"use client";
import React, { useEffect } from "react";
import { getNotionDataApi } from "@/app/data/NotionData";

const Project_Item = () => {
  console.log("here? start");
  useEffect(() => {
    console.log("here?");
    const callData = async () => {
      try {
        const data = await getNotionDataApi();
        console.log("data: ", data);
      } catch (e) {
        console.log("e: ");
      }
    };

    callData();
  }, []);
  return <div>project-items</div>;
};

export default Project_Item;
