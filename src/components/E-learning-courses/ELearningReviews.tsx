import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  name: string;
  role: string;
  rating: number;
  content: string;
  date: string;
}

interface ELearningReviewsProps {
  reviews: Review[];
}

const ELearningReviews: React.FC<ELearningReviewsProps> = ({ reviews }) => {
  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Student Reviews</h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <Card key={idx} className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`} 
                  />
                ))}
              </div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed italic">
                "{review.content}"
              </p>
              <div className="pt-2">
                <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter mt-0.5">{review.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ELearningReviews;
