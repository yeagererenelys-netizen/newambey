import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Award, TrendingUp, ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import GallerySlider from "@/components/GallerySlider";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-road.jpg";

const highlights = [
  {
    icon: Users,
    title: "Patient Trainers",
    description: "Our instructors treat every student like family, ensuring a comfortable learning experience.",
  },
  {
    icon: Award,
    title: "Affordable Rates",
    description: "Quality driving education at competitive prices. Value for your investment.",
  },
  {
    icon: TrendingUp,
    title: "High Success Rate",
    description: "Most of our students pass their driving tests on the first attempt.",
  },
];

const testimonials = [
  {
    name: "Siddhi Sharma",
    text: "Awesome experience! Highly recommend for beginners!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    text: "Lokesh Sir is very patient and teaches in a simple way. Best driving school in Jaipur!",
    rating: 5,
  },
  {
    name: "Priya Meena",
    text: "Being a woman, I was nervous at first. But the trainers were so supportive and polite. Learned driving confidently!",
    rating: 5,
  },
  {
    name: "Amit Verma",
    text: "Kaushal Bhaiya explained everything clearly. The road signs knowledge was very helpful for my test.",
    rating: 5,
  },
  {
    name: "Sunita Agarwal",
    text: "Friendly behavior and good teaching. My son learned driving in just 2 weeks!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    text: "Professional training with focus on safety. Highly recommended for everyone in Vidyadhar Nagar.",
    rating: 5,
  },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Responsive: show 1 card on mobile, 2 on tablet, 3 on desktop
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // Update visible cards on resize
  useState(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const maxOffset = Math.max(0, testimonials.length - visibleCards);

  const scrollLeft = () => {
    setCurrentTestimonial((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setCurrentTestimonial((prev) => Math.min(prev + 1, maxOffset));
  };

  return (
    <Layout>
      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6"
            >
              Trusted Driving School Since 2000
            </motion.span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Learn to Drive Safely with{" "}
              <span className="text-secondary">New Ambey Motor Driving School</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Expert lessons for beginners, men, and women in Jaipur. Our patient trainers 
              help you become a confident and safe driver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-secondary group">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-primary-foreground/70"
            />
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-subtitle mx-auto">
              We're committed to making your driving journey smooth, safe, and enjoyable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-hover text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <GallerySlider />

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle mx-auto">
              Join hundreds of satisfied students who learned to drive with us.
            </p>
          </motion.div>
        </div>

        {/* Responsive Carousel */}
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            disabled={currentTestimonial <= 0}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed touch-manipulation"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            disabled={currentTestimonial >= maxOffset}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed touch-manipulation"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="overflow-hidden mx-10 md:mx-16">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{ x: `-${currentTestimonial * (100 / visibleCards)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-card rounded-xl p-5 md:p-6 shadow-card"
                >
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-secondary/30 mb-3 md:mb-4" />
                  <p className="text-foreground text-sm md:text-base mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm md:text-base">{testimonial.name}</p>
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-500 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxOffset + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 md:w-2.5 md:h-2.5 rounded-full transition-colors touch-manipulation ${
                  currentTestimonial === index ? "bg-secondary" : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Driving Journey?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today to book your first lesson. Our friendly team is ready to help 
              you become a confident driver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 group">
                Contact Us Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <WhatsAppButton className="justify-center text-base md:text-lg px-6 md:px-8 py-3 md:py-4" />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
