"use client";
import React, { useEffect } from "react";
import { GetNotionDataApi } from "@/app/data/NotionData";

const Project_Item = () => {
  const callData = async () => {
    try {
      console.log("start getNotionData");
      const data = await GetNotionDataApi();
      console.log("data: ", data);
    } catch (e) {
      console.log("e: ");
    }
  };

  callData();
};

export default Project_Item;
