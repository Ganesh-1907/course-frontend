import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Calendar, Users, Clock, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    category: string;
    rating: number;
    enrolled: string;
    duration: string;
    format: string;
    price: number;
    originalPrice: number;
    discount: number;
    badge?: string;
    image: string;
    nextDate?: string;
    path?: string;
  };
  index: number;
}

const categoryColors: Record<string, string> = {
  AGILE: "badge-agile",
  SERVICE: "badge-service",
  SAFe: "badge-safe",
  PROJECT: "badge-project",
  QUALITY: "badge-quality",
  BUSINESS: "badge-business",
  "Generative AI": "badge-ai",
};

const CourseCard = ({ course, index }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-lg overflow-hidden shadow-sm border border-border/50 card-hover"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {course.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
            course.badge === "Popular" ? "bg-yellow-400 text-yellow-900" : "bg-blue-500 text-white"
          }`}>
            {course.badge}
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">{course.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-2 ${categoryColors[course.category] || "bg-gray-100 text-gray-600"}`}>
          {course.category}
        </span>
        
        <h3 className="font-semibold text-lg mb-3 line-clamp-2 min-h-[3.5rem]">
          {course.title}
        </h3>

        {/* Schedule */}
        {course.nextDate && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Calendar className="w-4 h-4" />
            <span>Next Schedule starts at {course.nextDate}</span>
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.enrolled}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MonitorPlay className="w-4 h-4" />
            <span>{course.format}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-xs text-muted-foreground">Starts From</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">${course.price}</span>
              <span className="text-muted-foreground line-through text-sm">${course.originalPrice}</span>
              <span className="bg-orange-100 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
                {course.discount}% off
              </span>
            </div>
          </div>
          <Link to={course.path || "/sub-category"}>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
