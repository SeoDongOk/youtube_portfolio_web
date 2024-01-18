"use client";
import React, { useEffect } from "react";
import { getNotionDataApi } from "@/app/data/NotionData";

const Project_Item = () => {
  useEffect(() => {
    console.log("useEffect in Prject_Item");
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
