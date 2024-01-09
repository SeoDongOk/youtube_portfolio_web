import axios from "axios";
import { TOKEN, DATABASE_ID } from "../config";

export async function getStaticProps() {
  try {
    console.log("TOKEN2: ", TOKEN);
    if (TOKEN === undefined) {
      return null;
    }
    const options = {
      headers: {
        accept: "application/json",
        "Notion-Version": "2022-06-28",
        "content-type": "application/json",
      },
      data: { page_size: 100 },
    };
    const res = await axios.post(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      options
    );
    console.log("res: ", res.data);
    return (
      <div>
        {TOKEN}
        <h1>{DATABASE_ID}</h1>
      </div>
    );
  } catch (e) {
    console.log("error on notionDAta: ", e.code);
  }
}
