import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Award, TrendingUp, ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
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

const CARD_WIDTH = 350;
const CARD_GAP = 32; // mx-4 = 16px each side

const Index = () => {
  const [carouselOffset, setCarouselOffset] = useState(0);
  const testimonialCount = testimonials.length;

  const scrollLeft = () => {
    setCarouselOffset((prev) => Math.min(prev + 1, 0));
  };

  const scrollRight = () => {
    setCarouselOffset((prev) => Math.max(prev - 1, -(testimonialCount - 1)));
  };
  return (
    <Layout>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Learn to Drive Safely with{" "}
              <span className="text-secondary">New Ambey Motor Driving School</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
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
      <section className="py-20 bg-background">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-muted overflow-hidden">
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

        {/* Manual Carousel with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            disabled={carouselOffset >= 0}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            disabled={carouselOffset <= -(testimonialCount - 1)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden px-16 md:px-24">
            <motion.div
              className="flex"
              animate={{ x: carouselOffset * (CARD_WIDTH + CARD_GAP) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[350px] mx-4 bg-card rounded-xl p-6 shadow-card"
                >
                  <Quote className="w-8 h-8 text-secondary/30 mb-4" />
                  <p className="text-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-500">★</span>
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
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCarouselOffset(-index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  carouselOffset === -index ? "bg-secondary" : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Driving Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today to book your first lesson. Our friendly team is ready to help 
              you become a confident driver.
            </p>
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4 group">
              Contact Us Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
