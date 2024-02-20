import { NextResponse } from "next/server";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import fetch from "node-fetch";
import app from '@/lib/firebase/firebaseConfig';
import path from "path";

const storage = getStorage(app);
const username = process.env.NEXT_PUBLIC_ATLASSIAN_USERNAME;
const apiKey = process.env.NEXT_PUBLIC_ATLASSIAN_API_KEY;
const domain = process.env.NEXT_PUBLIC_DOMAIN;
const page_id = process.env.NEXT_PUBLIC_ID_GETTING;
const authHeader = `Basic ${Buffer.from(`${username}:${apiKey}`).toString("base64")}`;


async function uploadImageToFirebase(imageUrl, fileName, folderName) {
  try {
    const imageResponse = await fetch(imageUrl, {
      headers: {
        'Authorization': authHeader,
        'Accept': 'application/json',
      },
    });

    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image ${fileName}`);
    }

    const imageBuffer = await imageResponse.arrayBuffer();

    // Get the file extension from the fileName
    const fileExtension = path.extname(fileName).toLowerCase();

    // Set MIME type based on file extension
    let mimeType;
    switch (fileExtension) {
      case '.jpg':
      case '.jpeg':
        mimeType = 'image/jpeg';
        break;
      case '.png':
        mimeType = 'image/png';
        break;
      case '.gif':
        mimeType = 'image/gif';
        break;
      case '.mp4':
        mimeType = 'video/mp4';
        break;
      case '.webm':
        mimeType = 'video/webm';
        break;
      case '.mov':
        mimeType = 'video/quicktime';
        break;
      // Add more cases for other supported video types if needed
      default:
        throw new Error(`Unsupported file type: ${fileExtension}`);
    }


    const storageRef = ref(storage, `images/${folderName}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, imageBuffer, { contentType: mimeType });

    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed', (snapshot) => {
        // Handle state changes if needed
      }, (error) => {
        console.error('Error uploading image:', error);
        reject(error);
      }, async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log('File uploaded to Firebase storage:', downloadURL);
        resolve(downloadURL);
      });
    });
  } catch (error) {
    console.error('Error uploading image to Firebase:', error);
    throw error;
  }
}

async function fetchAttachments(childPageId) {
  try {
    const attachmentsResponse = await fetch(
      `https://${domain}.atlassian.net/wiki/api/v2/pages/${childPageId}/attachments`,
      {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'Accept': 'application/json',
        },
      }
    );

    if (!attachmentsResponse.ok) {
      throw new Error(`Failed to fetch attachments for child page ${childPageId}`);
    }

    const attachmentsData = await attachmentsResponse.json();

    const uploadPromises = attachmentsData.results.map(async (attachment) => {
      const imageUrl = `https://${domain}.atlassian.net/wiki${attachment._links.download}`;
      return uploadImageToFirebase(imageUrl, attachment.title, childPageId); // Pass childPageId
    });

    return Promise.all(uploadPromises);
  } catch (error) {
    console.error(`Error fetching and uploading attachments for child page ${childPageId}:`, error);
    throw error;
  }
}


export async function GET(req, res) {
  try {
    const timestamp = new Date().getTime();
    const childPagesResponse = await fetch(
      `https://${domain}.atlassian.net/wiki/rest/api/content/${page_id}/child/page?timestamp=${timestamp}&limit=50`,
      {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'Accept': 'application/json',
          // 'Cache-Control': 'no-cache, must-revalidate',
        },
      }
    );

    const childPagesData = await childPagesResponse.json();

    const childPagePromises = childPagesData.results.map(async (childPage) => {
      const contentResponse = await fetch(
        `https://${domain}.atlassian.net/wiki/rest/api/content/${childPage.id}?expand=body.view`,
        {
          method: 'GET',
          headers: {
            'Authorization': authHeader,
            'Accept': 'application/json',
            // 'Cache-Control': 'no-cache, must-revalidate',
          },
        }
      );

      const content = await contentResponse.json();
      await fetchAttachments(childPage.id); // Wait for attachments to be fetched and uploaded

      return { ...content };
    });

    const allChildPageContent = await Promise.all(childPagePromises);
    return NextResponse.json(allChildPageContent);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
