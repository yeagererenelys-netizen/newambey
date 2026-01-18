import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Award, TrendingUp, ArrowRight, Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import GallerySlider from "@/components/GallerySlider";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-road.jpg";

const highlights = [
  {
    icon: Users,
    title: "Experienced Trainers",
    description: "Polite and skilled instructors who make learning driving easy and comfortable.",
  },
  {
    icon: Award,
    title: "4.8★ Rating",
    description: "Trusted by 344+ students with excellent reviews and proven results.",
  },
  {
    icon: TrendingUp,
    title: "Flexible Timings",
    description: "Classes available throughout the day to fit your schedule. Open till 8 PM.",
  },
];

const testimonials = [
  { name: "Harshit Garg", text: "Must visit Asaan for Car Training. Drivers are very Experienced and Polite while giving the classes. Classes are flexible which will help all people to practice any time.", rating: 5 },
  { name: "TeXaZz", text: "Best training school in Agra, excellent teachers. They teach in different cars with different techniques.", rating: 5 },
  { name: "Dhhairya Jha", text: "Aasan motor agra is great institution for learning driving for beginners. They have taught driving in different vehicles and different places which we required in day to day life.", rating: 5 },
  { name: "Yatin Kumar", text: "Brilliant experience ❤️ good behaviour teachers. Really appreciate the service!!", rating: 5 },
  { name: "Aditya Rathore", text: "Good interaction by driver very good condition of car 👍 99% satisfied with the training.", rating: 5 },
  { name: "Anisha Gupta", text: "Jitendra Bhaiya is an excellent instructor. Very patient and explains everything clearly. Highly recommend!", rating: 5 },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const getVisibleCards = () => {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    };
    setVisibleCards(getVisibleCards());
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxOffset = Math.max(0, testimonials.length - visibleCards);
  const scrollLeft = () => setCurrentTestimonial((prev) => Math.max(prev - 1, 0));
  const scrollRight = () => setCurrentTestimonial((prev) => Math.min(prev + 1, maxOffset));

  return (
    <Layout>
      <WhatsAppButton variant="floating" />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-current" /> 4.8★ Rated • 344+ Reviews
            </motion.span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              Learn Driving the <span className="text-accent">Easy Way</span>
            </h1>
            <p className="text-sm text-primary-foreground/80 mb-2">आसान मोटर ड्राइविंग ट्रेनिंग विद्यालय</p>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Best driving school in Agra with experienced trainers. Flexible classes, modern vehicles, and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-secondary group">Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Link>
              <Link to="/services" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">View Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-title">Why Choose Asaan?</h2>
            <p className="section-subtitle mx-auto">Making driving training simple, affordable, and effective.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card-hover text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GallerySlider />

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle mx-auto">Join 344+ happy students who learned driving with Asaan Motor.</p>
          </motion.div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <button onClick={scrollLeft} disabled={currentTestimonial <= 0} className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-xl bg-card shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollRight} disabled={currentTestimonial >= maxOffset} className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-xl bg-card shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="overflow-hidden mx-12 md:mx-16">
            <motion.div className="flex gap-5" animate={{ x: `-${currentTestimonial * (100 / visibleCards)}%` }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
              {testimonials.map((t, i) => (
                <div key={i} className="flex-shrink-0 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-foreground mb-4 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">{t.name.charAt(0)}</div>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <div className="flex gap-0.5">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-accent fill-current" />)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxOffset + 1 }).map((_, i) => (
              <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === i ? "bg-primary w-8" : "bg-border"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Start Your Driving Journey?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Contact us today to book your first lesson. Learn driving the easy way with Asaan Motor!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary group">Contact Us Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Link>
              <WhatsAppButton className="justify-center" />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;