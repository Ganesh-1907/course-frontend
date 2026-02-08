import React from "react";
import CategoryLayout from "@/components/category/CategoryLayout";
import { categoryData } from "@/data/categoryData";

const ProjectManagement = () => {
  const data = categoryData["project-management"];
  return <CategoryLayout data={data} />;
};

export default ProjectManagement;
