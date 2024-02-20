import { NextResponse } from "next/server";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";

const username = process.env.NEXT_PUBLIC_ATLASSIAN_USERNAME;
const apiKey = process.env.NEXT_PUBLIC_ATLASSIAN_API_KEY;
const domain = process.env.NEXT_PUBLIC_DOMAIN;
const page_id = process.env.NEXT_PUBLIC_ID_FOUNDATION;
const authHeader = `Basic ${Buffer.from(`${username}:${apiKey}`).toString("base64")}`;

const imageDirectory = "./public/images";
const cacheFilePath = path.join(imageDirectory, "cache.json");
let cache = {};

if (fs.existsSync(cacheFilePath)) {
  const cacheData = fs.readFileSync(cacheFilePath, "utf-8");
  cache = JSON.parse(cacheData);
}

async function fetchChildPages() {
  try {
    const childPagesResponse = await fetch(
      `https://${domain}.atlassian.net/wiki/rest/api/content/${page_id}/child/page`,
      {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'Accept': 'application/json',
          'Cache-Control': 'max-age=3600, must-revalidate',
        },
      }
    );

    const childPagesData = await childPagesResponse.json();
    return childPagesData.results;
  } catch (error) {
    console.error('Error fetching child pages:', error);
    throw error;
  }
}

async function isImageInUse(pageId, imageFilename) {
  try {
    const childPages = await fetchChildPages();

    for (const childPage of childPages) {
      const contentResponse = await fetch(
        `https://${domain}.atlassian.net/wiki/rest/api/content/${childPage.id}?expand=body.view`,
        {
          method: 'GET',
          headers: {
            'Authorization': authHeader,
            'Accept': 'application/json',
            'Cache-Control': 'max-age=3600, must-revalidate',
          },
        }
      );

      const content = await contentResponse.json();

      if (content.body.view.value.includes(imageFilename)) {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error('Error checking image usage:', error);
    return true;
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
          'Cache-Control': 'max-age=3600, must-revalidate',
        },
      }
    );

    if (!attachmentsResponse.ok) {
      throw new Error(`Failed to fetch attachments for child page ${childPageId}`);
    }

    const attachmentsData = await attachmentsResponse.json();
    const imageDirectory = `./public/images/${childPageId}`;

    if (!fs.existsSync(imageDirectory)) {
      fs.mkdirSync(imageDirectory, { recursive: true });
    }

    for (const attachment of attachmentsData.results) {
      const baseUrl = `https://${domain}.atlassian.net/wiki`;
      const imageUrl = `${baseUrl}${attachment._links.download}`;
      const filePath = path.join(imageDirectory, attachment.title);

      if (!fs.existsSync(filePath)) {
        const imageResponse = await fetch(imageUrl, {
          headers: {
            'Authorization': authHeader,
          },
        });

        if (imageResponse.ok) {
          const imageArrayBuffer = await imageResponse.arrayBuffer();
          const imageBuffer = Buffer.from(imageArrayBuffer);

          fs.writeFileSync(filePath, imageBuffer);
          console.log(`Downloaded ${attachment.title} for child page ${childPageId}`);
        }
      } else {
        if (!(await isImageInUse(childPageId, attachment.title))) {
          fs.unlinkSync(filePath);
          console.log(`Deleted unused image: ${attachment.title}`);
        } else {
          console.log(`Image ${attachment.title} already exists for child page ${childPageId}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error fetching attachments for child page ${childPageId}:`, error);
    return [];
  }
}

export async function GET(req, res) {
  try {
    const childPages = await fetchChildPages();
    const childPagePromises = childPages.map(async (childPage) => {
      const contentResponse = await fetch(
        `https://${domain}.atlassian.net/wiki/rest/api/content/${childPage.id}?expand=body.view`,
        {
          method: 'GET',
          headers: {
            'Authorization': authHeader,
            'Accept': 'application/json',
            'Cache-Control': 'max-age=60',
          },
        }
      );

      const content = await contentResponse.json();
      const attachments = await fetchAttachments(childPage.id);

      return { ...content, attachments };
    });

    const allChildPageContent = await Promise.all(childPagePromises);
    return NextResponse.json(allChildPageContent);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
