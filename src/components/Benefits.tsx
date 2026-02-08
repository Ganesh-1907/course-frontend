import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User, Building2, Check } from "lucide-react";

const individualBenefits = [
  "Master Agile & explore more career opportunities.",
  "Sharpen your Scrum skills & improve your chances of getting hired.",
  "Become a part of the renowned Agile community & connect with experts.",
  "Expand your Scrum knowledge & boost team collaboration.",
  "Collaborate with customers & prioritize projects.",
];

const corporateBenefits = [
  "Develop an Agile mindset and direct your team toward success.",
  "Direct teams with an interesting product vision.",
  "Foster seamless collaboration among stakeholders and teams.",
  "Ensure the delivery of high-quality products to meet customer expectations.",
  "Embrace Scrum, Adopt Agility, and help teams to excel in Agile environments.",
];

const Benefits = () => {
  const [activeTab, setActiveTab] = useState<"individual" | "corporate">("individual");

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm mb-2">
            Benefits focused on Individuals and corporate
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Individual & Organizational Benefits
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("individual")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "individual"
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <User className="w-5 h-5" />
              Individuals Benefits
            </button>
            <button
              onClick={() => setActiveTab("corporate")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "corporate"
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Building2 className="w-5 h-5" />
              Corporate Benefits
            </button>
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
          >
            <h3 className="text-xl font-semibold mb-6">
              {activeTab === "individual" 
                ? "Solid Experiential Learning" 
                : "Customized Corporate Training"}
            </h3>
            
            <ul className="space-y-4 mb-8">
              {(activeTab === "individual" ? individualBenefits : corporateBenefits).map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button className="btn-primary">
              {activeTab === "individual" ? "Contact Course Advisor" : "Corporate Enquiry"}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
