import { motion } from "framer-motion";
import { Sparkles, Globe, Building } from "lucide-react";

const clientLogos = [
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
];

const ClientLogos = () => {
  return (
    <section id="clients" className="py-16 bg-muted/20 relative overflow-hidden">
      <div className="container">
        {/* Standardized Header - lg:text-4xl */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
          >
            Our Corporate Network
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-black font-display tracking-tight uppercase"
          >
            Empowering Talent at the World's <span className="text-primary">Leading</span> Enterprises
          </motion.h2>
        </div>

        {/* High-End Logo Marquee */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-muted/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-muted/20 to-transparent z-10 pointer-events-none" />

          {/* Forward Marquee */}
          <div className="overflow-hidden flex mb-8">
            <motion.div 
              className="flex items-center gap-16 pr-16"
              animate={{ x: [0, -1500] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
                >
                  <div className="h-12 md:h-14 w-auto flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-full w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Reverse Marquee */}
          <div className="overflow-hidden flex opacity-60">
            <motion.div 
              className="flex items-center gap-20 pr-20"
              animate={{ x: [-1500, 0] }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            >
              {[...clientLogos.reverse(), ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center group"
                >
                  <div className="h-8 md:h-10 w-auto flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-full w-auto object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Feature Points */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            { icon: Globe, title: "Global Presence", desc: "Trusted by Fortune 500 companies across 6 continents." },
            { icon: Building, title: "Fortune 500", desc: "Official training partner for leading global MNCs." },
            { icon: Sparkles, title: "Alumni Network", desc: "Join 110K+ alumni hired by these top brands." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-6 rounded-xl bg-white border border-border/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-black text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
