import React from "react";

interface ELearningPrerequisitesProps {
  courseName: string;
  description?: string;
}

const ELearningPrerequisites: React.FC<ELearningPrerequisitesProps> = ({ 
  courseName, 
  description = "Accredited Agile Scrum Master online course has no prerequisites, but having a fundamental understanding of Scrum can be beneficial."
}) => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Prerequisites:</h2>
      <p className="text-slate-600 font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ELearningPrerequisites;
