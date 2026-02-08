import React from "react";
import CategoryLayout from "@/components/category/CategoryLayout";
import { categoryData } from "@/data/categoryData";

const QualityProcess = () => {
  const data = categoryData["quality-process"];
  return <CategoryLayout data={data} />;
};

export default QualityProcess;
