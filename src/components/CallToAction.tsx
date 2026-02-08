import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm mb-2">
              still questions? answers are here!
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Now, schedule a free counselling session.
            </h2>
            <Button className="btn-primary">
              <Phone className="w-5 h-5" />
              Request a call back
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=400&fit=crop"
              alt="Learning Advisor"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
