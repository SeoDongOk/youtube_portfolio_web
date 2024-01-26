"use client";
import { TOKEN, DATABASE_ID } from "../config";

export async function GetNotionDataApi() {
  try {
    console.log("try catch in getNotionData");
    const options = {
      method: "POST",
      url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      headers: {
        accept: "application/json",
        "Notion-Version": "2022-06-28",
        "content-type": "application/json",
        Authorization: `${TOKEN}`,
      },
      body: JSON.stringify({
        sorts: [
          {
            property: "Name",
            direction: "ascending",
          },
        ],
        page_size: 100,
      }),
    };
    if (DATABASE_ID || TOKEN === undefined) {
      throw new Error("DATABASE_ID or TOKEN value is undefined");
    }
    const res = await fetch.request(options);

    const projects = await res.data;

    const projectNames = projects.results.map((aProject) => {
      console.log("aProject: ", aProject.properties.이름.title[0].plain_text);
      if (aProject.properties.이름.title[0].plain_text === undefined) {
        return;
      }
      return aProject.properties.이름.title[0].plain_text;
    });
    console.log(projectNames);
    return projectNames;
  } catch (e) {
    console.log("error on notionData: ", e);
  }
}
