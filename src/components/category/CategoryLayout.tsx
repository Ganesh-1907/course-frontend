import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import CategoryHero from "./CategoryHero";
import CategoryStats from "./CategoryStats";
import CategoryCatalog from "./CategoryCatalog";
import CategoryCertification from "./CategoryCertification";
import CategoryFAQ from "./CategoryFAQ";
import CategoryCTA from "./CategoryCTA";
import CategorySubNav from "./CategorySubNav";
import { CategoryData } from "@/data/categoryData";

interface CategoryLayoutProps {
  data: CategoryData;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = ({ data }) => {
  const [showSubNav, setShowSubNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSubNav(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Header is hidden when SubNav is shown */}
      <Header hidden={showSubNav} />
      
      {/* Sticky Sub-nav (appears on scroll) */}
      <CategorySubNav forcedVisible={showSubNav} />

      <main className="pt-16">
        <CategoryHero data={data} />
        
        {/* Floating Stats Bar */}
        <CategoryStats />

        {/* Course Grid */}
        <section id="catalog" className="py-16">
          <CategoryCatalog data={data} />
        </section>

        {/* Accreditation & Certification Details */}
        <div id="certification">
          <CategoryCertification data={data} />
        </div>

        {/* Global Review Section */}
        <div id="testimonials">
          <Testimonials />
        </div>

        {/* Category Specific FAQs */}
        <div>
          <CategoryFAQ data={data} />
        </div>

        {/* Final CTA Banner */}
        <CategoryCTA />
      </main>

      <Footer />
    </div>
  );
};

export default CategoryLayout;
