"use client";
import { GetNotionDataApi } from "@/app/data/NotionData";

const Project_Item = () => {
  const callData = async () => {
    try {
      console.log("start getNotionData");
      const data = fetch(GetNotionDataApi());
      console.log("data: ", data);
    } catch (e) {
      console.log("e: ", e);
    }
  };

  callData();
};

export default Project_Item;
