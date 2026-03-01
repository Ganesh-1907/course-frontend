import React from "react";
import CategoryLayout from "@/components/category/CategoryLayout";
import { categoryData } from "@/data/categoryData";

const ITServiceManagement = () => {
  const data = categoryData["it-service-management"];
  return <CategoryLayout data={data} />;
};

export default ITServiceManagement;
