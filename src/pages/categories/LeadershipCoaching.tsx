import React from "react";
import CategoryLayout from "@/components/category/CategoryLayout";
import { categoryData } from "@/data/categoryData";

const LeadershipCoaching = () => {
  const data = categoryData["leadership-coaching"];
  return <CategoryLayout data={data} />;
};

export default LeadershipCoaching;
