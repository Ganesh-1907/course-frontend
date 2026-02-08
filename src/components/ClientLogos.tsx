import { motion } from "framer-motion";

const clientLogos = [
  "Infosys",
  "Cognizant", 
  "Accenture",
  "TCS",
  "Wipro",
  "HCL",
  "IBM",
  "Microsoft",
  "Google",
  "Amazon",
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground text-sm mb-2">
            Our Customer words for us
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-display">
            Take a Look at Our Clients
          </h2>
        </motion.div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-slow">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 flex items-center justify-center"
              >
                <div className="bg-card px-8 py-4 rounded-lg shadow-sm border border-border/30">
                  <span className="text-muted-foreground font-semibold whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
