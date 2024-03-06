import { NextResponse } from "next/server";
import fetch from "node-fetch";

const username = process.env.NEXT_PUBLIC_ATLASSIAN_USERNAME;
const apiKey = process.env.NEXT_PUBLIC_ATLASSIAN_API_KEY;
const domain = process.env.NEXT_PUBLIC_DOMAIN;
const page_id = process.env.NEXT_PUBLIC_ID_GETTING
// const page_id = "2993324463"
const authHeader = `Basic ${Buffer.from(`${username}:${apiKey}`).toString("base64")}`;

async function fetchChildPages() {
  try {
    const timestamp = new Date().getTime();
    const childPagesResponse = await fetch(
      `https://${domain}.atlassian.net/wiki/api/v2/pages/${page_id}/children?timestamp=${timestamp}&limit=50`,
      {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'Accept': 'application/json',
          // 'Cache-Control': 'no-cache, no-store, must-revalidate',
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


export async function getData() {
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
            // 'Cache-Control': 'no-cache, no-store, must-revalidate',
          },
        }
      );
      const content = await contentResponse.json();

      // Merge the content with attachments
      return { ...content };
    });

    const allChildPageContent = await Promise.all(childPagePromises);
    return allChildPageContent;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export const revalidate = 3600;
export async function GET(req, res) {
  try {
    const pageContent = await getData();
    return NextResponse.json(pageContent);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}