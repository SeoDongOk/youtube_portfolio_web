import axios from "axios";
import { TOKEN, DATABASE_ID } from "../config";

export async function getStaticProps() {
  console.log("TOKEN: ", TOKEN);
  if (TOKEN === undefined) {
    return null;
  }
  const options = {
    header: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    // body: JSON.stringify({ page_size: 100 }),
  };
  const res = await axios.post(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  console.log("res: ", JSON.stringify(res.data));
  // return <div>{res.data}</div>;
}
