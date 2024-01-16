"use client";
import React from "react";
import { getNotionDataApi } from "@/app/data/NotionData";

const Project_Item = () => {
  const data = getNotionDataApi();
  return <div>project-items</div>;
};

export default Project_Item;
