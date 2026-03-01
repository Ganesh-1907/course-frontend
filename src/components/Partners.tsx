import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Scrum Alliance", logo: "https://upload.wikimedia.org/wikipedia/en/3/3d/Scrum_Alliance_Logo.png" },
  { name: "PMI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/PMI_logo.svg/1024px-PMI_logo.svg.png" },
  { name: "AXELOS", logo: "https://www.axelos.com/Axelos/media/Axelos-Media/General/Axelos-Logo.svg" },
  { name: "IIBA", logo: "https://www.iiba.org/siteassets/logos/iiba_logo_rgb_gradient.png" },
  { name: "PeopleCert", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PeopleCert_Logo.svg/1024px-PeopleCert_Logo.svg.png" },
  { name: "Scrum.org", logo: "https://www.scrum.org/themes/custom/scrumorg/logo.svg" },
  { name: "IC Agile", logo: "https://icagile.com/images/icagile-logo-horizontal.svg" },
];

const Partners = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
          >
            Global Accreditations
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-black font-display tracking-tight uppercase"
          >
            Partnering with World's Leading Governing Bodies
          </motion.h2>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden group">
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex items-center gap-16 md:gap-24"
            animate={{ x: [0, -1500] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                {partners.map((partner, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="flex-shrink-0 flex flex-col items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-12 md:h-16 w-auto object-contain mb-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest hidden group-hover:block transition-all">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
