import React from "react";
import { Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";

interface Client {
  name: string;
  logo: string;
}

interface CourseClientsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  clients: Client[];
}

const CourseClients: React.FC<CourseClientsProps> = ({
  title = "Trusted Globally",
  subtitle = "Partnering with Industry Leaders",
  description = "We've helped thousands of professionals from the world's most prestigious organizations achieve their Scrum certification goals.",
  clients
}) => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-[12px] text-blue-600 font-black uppercase tracking-[0.2em]">{title}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#001c3d] tracking-tight leading-[1.1]">
              {subtitle.split("Industry Leaders")[0]}<span className="text-blue-600">Industry Leaders</span>
            </h2>
            <p className="text-slate-500 font-medium text-[15px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[...clients, ...clients.slice(0, 5)].map((client, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 p-8 rounded-3xl flex items-center justify-center min-h-[120px] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group cursor-pointer"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-14 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseClients;
