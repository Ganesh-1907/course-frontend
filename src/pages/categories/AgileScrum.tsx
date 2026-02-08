import React from "react";
import CategoryLayout from "@/components/category/CategoryLayout";
import { categoryData } from "@/data/categoryData";

const AgileScrum = () => {
  const data = categoryData["agile-scrum"];
  return <CategoryLayout data={data} />;
};

export default AgileScrum;
