import { motion } from "framer-motion";

const partners = [
  "Scrum Alliance",
  "PMI",
  "Platinum SPCT",
  "AXELOS",
  "IIBA",
  "PTP",
  "PeopleCert",
  "Scrum.org",
  "IC Agile",
  "LTP",
];

const Partners = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display">
            Partnering with World's Leading Governing Bodies
          </h2>
        </motion.div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="bg-card px-6 py-4 rounded-lg shadow-sm border border-border/30">
                  <span className="text-muted-foreground font-medium whitespace-nowrap">
                    {partner}
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

export default Partners;
