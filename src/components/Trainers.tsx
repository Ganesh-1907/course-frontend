import { motion } from "framer-motion";
import { Star } from "lucide-react";

const trainers = [
  {
    name: "Aakash Srinivasan, CST",
    certifications: "CSPO | CSM | A-CSM | A-CSPO",
    rating: 4.9,
    experience: "15+",
    professionals: "25K+",
    workshops: "2700+",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Michel Goldenberg, CST",
    certifications: "CSPO | A-CSM | A-CSPO | CSM",
    rating: 4.9,
    experience: "21+",
    professionals: "10K+",
    workshops: "3780+",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Raj Kasturi, CST",
    certifications: "CSM",
    rating: 4.8,
    experience: "28+",
    professionals: "20K+",
    workshops: "5040+",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Abid Quereshi, CST",
    certifications: "CSPO | A-CSM | CSM | A-CSPO",
    rating: 4.9,
    experience: "25+",
    professionals: "25K+",
    workshops: "4500+",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
  },
];

const Trainers = () => {
  return (
    <section className="py-16 bg-cream-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm mb-2">
            Our Experienced Training Expert
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Meet the Team That's Invested in Your Success
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 text-center card-hover"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg mb-1">{trainer.name}</h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{trainer.rating}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{trainer.certifications}</p>
              
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                <div>
                  <p className="font-bold text-primary">{trainer.experience}</p>
                  <p className="text-xs text-muted-foreground">Years Exp</p>
                </div>
                <div>
                  <p className="font-bold text-primary">{trainer.professionals}</p>
                  <p className="text-xs text-muted-foreground">Professionals</p>
                </div>
                <div>
                  <p className="font-bold text-primary">{trainer.workshops}</p>
                  <p className="text-xs text-muted-foreground">Workshops</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
