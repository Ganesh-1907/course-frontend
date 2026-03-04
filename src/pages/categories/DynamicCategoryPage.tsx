import React from "react";
import { useParams } from "react-router-dom";
import CategoryLayout from "@/components/category/CategoryLayout";
import { categoryData } from "@/data/categoryData";
import NotFound from "@/pages/NotFound";

const DynamicCategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  if (!categoryId || !categoryData[categoryId]) {
    return <NotFound />;
  }

  const data = categoryData[categoryId];
  return <CategoryLayout data={data} />;
};

export default DynamicCategoryPage;
