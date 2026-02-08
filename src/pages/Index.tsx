import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyTrusted from "@/components/WhyTrusted";
import Partners from "@/components/Partners";
import Courses from "@/components/Courses";
import CareerStats from "@/components/CareerStats";
import Webinars from "@/components/Webinars";
import Benefits from "@/components/Benefits";
import Trainers from "@/components/Trainers";
import CallToAction from "@/components/CallToAction";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyTrusted />
        <Partners />
        <Courses />
        <CareerStats />
        <Webinars />
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
