import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video, Lightbulb, MessageSquare, Wrench } from "lucide-react";

const features = [
  { icon: Video, text: "Live Expert Sessions" },
  { icon: Lightbulb, text: "Real-world Insights" },
  { icon: MessageSquare, text: "Interactive Q&A" },
  { icon: Wrench, text: "Hands-On Techniques" },
];

const Webinars = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Exclusive Live Webinars – Real Insights. Real Learning!
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <Button className="btn-primary">
              Explore Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600&h=400&fit=crop"
              alt="Live Webinar"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Webinars;
