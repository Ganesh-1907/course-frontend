import { motion } from "framer-motion";
import { Phone, Linkedin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const countries = [
  { name: "USA", phone: "+1-214-286-6498", flag: "🇺🇸" },
  { name: "Canada", phone: "+1-249-500-3143", flag: "🇨🇦" },
  { name: "India", phone: "+91-9611709643", flag: "🇮🇳" },
  { name: "UK", phone: "+44-1414890048", flag: "🇬🇧" },
  { name: "Australia", phone: "+61-272025160", flag: "🇦🇺" },
  { name: "Singapore", phone: "+65-31592313", flag: "🇸🇬" },
];

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
];

const paymentMethods = ["Visa", "Mastercard", "PayPal", "Amex"];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Contact Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {countries.map((country, index) => (
              <a
                key={index}
                href={`tel:${country.phone.replace(/-/g, "")}`}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <span className="text-lg">{country.flag}</span>
                <div>
                  <p className="font-medium text-xs text-muted-foreground">{country.name}</p>
                  <p>{country.phone}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-muted/20">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Connect with us :</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">We Accept</span>
              <div className="flex gap-2">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-muted/20 rounded text-xs font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="py-6 border-t border-muted/20">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Disclaimer:</strong> Certified Scrum Master(CSM®), Advanced Certified Scrum Master(A-CSM®), 
              Certified Scrum Product Owner (CSPO®), and other certifications are registered trademarks of their 
              respective owners. viovn INC is a Licensed Training Partner (LTP) of Scrum Alliance, 
              Professional Training Network member of Scrum.org®, and Platinum SPCT Partner of Scaled Agile, Inc®.
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-muted/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link to="/" className="bg-white p-1.5 rounded-lg hover:opacity-90 transition-opacity">
                <img src="/image.png" alt="Viovn Logo" className="h-12 w-auto object-contain" />
              </Link>
              <div className="flex flex-col ml-1">
                <span className="text-xl font-black text-white tracking-tighter leading-none">Viovn</span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-0.5">Technologies</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2018-2026, viovn Solutions Private Limited. All Rights Reserved
            </p>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Our privacy policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
