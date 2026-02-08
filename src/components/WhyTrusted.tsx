import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Building2, Headphones } from "lucide-react";

const trustCards = [
  {
    icon: ShieldCheck,
    title: "Global Accreditations & Partnerships",
    logos: ["PMI", "Platinum SPCT", "IIBA", "LTP", "PTP"],
    color: "text-primary",
    bgColor: "bg-orange-50",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    stat: "72,000+",
    description: "Careers Transformed",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Building2,
    title: "Corporate Trust",
    description: "Preferred by MNCS & Startups",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Headphones,
    title: "Quality Support",
    description: "24/7 & Lifetime Access",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

const WhyTrusted = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Why <span className="logo-text inline">viovn</span> is trusted globally
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-hover transition-all duration-300"
            >
              <div className={`w-14 h-14 ${card.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <card.icon className={`w-7 h-7 ${card.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              {card.stat && (
                <p className={`text-2xl font-bold ${card.color}`}>{card.stat}</p>
              )}
              {card.description && (
                <p className="text-muted-foreground text-sm">{card.description}</p>
              )}
              {card.logos && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {card.logos.map((logo, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrusted;
