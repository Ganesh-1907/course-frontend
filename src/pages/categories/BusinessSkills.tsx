import React from "react";
import CategoryLayout from "@/components/category/CategoryLayout";
import { categoryData } from "@/data/categoryData";

const BusinessSkills = () => {
  const data = categoryData["business-skills"];
  return <CategoryLayout data={data} />;
};

export default BusinessSkills;
