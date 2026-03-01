import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Courses from "@/components/Courses";
import Benefits from "@/components/Benefits";
import Trainers from "@/components/Trainers";
import CallToAction from "@/components/CallToAction";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

import SuccessRoadmap from "@/components/SuccessRoadmap";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Courses />
        <SuccessRoadmap />
        <Benefits />
        <Trainers />
        <CallToAction />
        <ClientLogos />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
