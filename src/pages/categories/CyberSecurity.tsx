import React from "react";
import CategoryLayout from "@/components/category/CategoryLayout";
import { categoryData } from "@/data/categoryData";

const CyberSecurity = () => {
  const data = categoryData["cyber-security"];
  return <CategoryLayout data={data} />;
};

export default CyberSecurity;
