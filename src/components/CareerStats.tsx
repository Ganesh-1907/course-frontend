import { motion } from "framer-motion";
import { Users, BookOpen, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1,500+",
    label: "Industry Experts",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: BookOpen,
    value: "130+",
    label: "Courses",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Award,
    value: "2500+",
    label: "Successful workshops",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Globe,
    value: "130+",
    label: "Countries",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const CareerStats = () => {
  return (
    <section className="py-16 bg-cream-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Grow Your Career Faster with Our Skilled Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-card border border-border/50"
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <h3 className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerStats;
