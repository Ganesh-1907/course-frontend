import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Jai Kumar Jadhav",
    role: "",
    company: "",
    content: "I'm happy to share that I've obtained a new certification: Certified Scrum Product Owner (CSPO) from Scrum Alliance🙏 A heartfelt thank you to Simpliaxis for a well-structured training experience and to our amazing trainer for thoroughly covering the CSPO concepts and making the learning engaging and practical",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Komal Wankhede",
    role: "Assistant Vice President",
    company: "Citi",
    content: "I am delighted to complete my Certified Scrum Master Certification and Training from Scrum Alliance. I am thankful to Maria Matarelli for training and Simpliaxis for facilitating this training session.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Ankita Patel",
    role: "",
    company: "ISPOR",
    content: "Now a certified PMP - Project Management Professional. Ecstatic to share this new achievement, especially the certification, which is not theory-based but tests your skills and how you would manage your people, processes, and actions in a Business environment with situation-based questions.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Benjamin Tanyi Oben",
    role: "",
    company: "Euromonitor International",
    content: "What a great way to end the year by transforming 15+ years of experience managing projects to the next level by earning a new certification: Project Management Professional (PMP)® from Project Management Institute, all thanks to SimpliAxis and our great trainer.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState<"linkedin" | "trustpilot">("linkedin");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Our Learners Love Us
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("linkedin")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === "linkedin"
                ? "bg-blue-600 text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </button>
          <button
            onClick={() => setActiveTab("trustpilot")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === "trustpilot"
                ? "bg-emerald-600 text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            <Star className="w-5 h-5" />
            Trustpilot
          </button>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 overflow-hidden">
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    {testimonial.role && (
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    )}
                    {testimonial.company && (
                      <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                    )}
                  </div>
                  <Linkedin className="w-5 h-5 text-blue-600 ml-auto" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-5">
                  {testimonial.content}
                </p>
                <button className="text-primary text-sm font-medium mt-2">Read More</button>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
