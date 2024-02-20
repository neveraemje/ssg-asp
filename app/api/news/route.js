import { NextResponse } from "next/server";

const username = process.env.NEXT_PUBLIC_ATLASSIAN_USERNAME;
const apiKey = process.env.NEXT_PUBLIC_ATLASSIAN_API_KEY;
const domain = process.env.NEXT_PUBLIC_DOMAIN;
const page_id = process.env.NEXT_PUBLIC_ID_NEWS;
const authHeader = `Basic ${Buffer.from(`${username}:${apiKey}`).toString("base64")}`;

async function fetchChildPages() {
  try {
    const timestamp = new Date().getTime();
    const childPagesResponse = await fetch(
      `https://${domain}.atlassian.net/wiki/rest/api/content/${page_id}/child/page?timestamp=${timestamp}&limit=50`,
      {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'Accept': 'application/json',
        }
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
        `https://${domain}.atlassian.net/wiki/rest/api/content/${childPage.id}?expand=body.view,version`,
        {
          method: 'GET',
          headers: {
            'Authorization': authHeader,
            'Accept': 'application/json',
          },
        }
      );
      const content = await contentResponse.json();
      return content;
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
