import React from "react";
import CategoryLayout from "@/components/category/CategoryLayout";
import { categoryData } from "@/data/categoryData";

const AiTechnology = () => {
  const data = categoryData["ai-technology"];
  return <CategoryLayout data={data} />;
};

export default AiTechnology;
