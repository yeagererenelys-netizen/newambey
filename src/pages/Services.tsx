import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, RefreshCw, GraduationCap, Clock, Users, Shield, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Car,
    title: "Car Driving Lessons",
    description: "Comprehensive car driving training from basic to advanced levels. Perfect for complete beginners.",
    features: ["15-20 sessions", "Manual & Automatic", "Traffic handling", "Parking techniques"],
    price: "Affordable packages available",
  },
  {
    icon: GraduationCap,
    title: "Beginner Training",
    description: "Special program designed for first-time learners with patient step-by-step guidance.",
    features: ["Zero experience needed", "Patient instructors", "Build confidence", "Safe environment"],
    price: "Beginner-friendly rates",
  },
  {
    icon: RefreshCw,
    title: "Refresher Courses",
    description: "For licensed drivers who want to regain confidence or improve their driving skills.",
    features: ["Skill assessment", "Confidence building", "New road rules update", "Flexible scheduling"],
    price: "Short-term packages",
  },
];

const benefits = [
  { icon: Clock, text: "Flexible Timings" },
  { icon: Users, text: "Male & Female Trainers" },
  { icon: Shield, text: "Safety First Approach" },
  { icon: Car, text: "Well-Maintained Vehicles" },
];

const Services = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-12 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional driving courses tailored to your needs and skill level
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-hover flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-secondary font-medium mb-4">{service.price}</p>
                  <Link to="/contact" className="btn-primary w-full text-center group">
                    Enquire Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-2">
              Why Train With Us?
            </h2>
            <p className="text-primary-foreground/80">
              Experience the difference of quality driving education
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-primary-foreground font-medium text-sm">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">Affordable Pricing</h2>
              <p className="section-subtitle mx-auto mb-8">
                We believe quality driving education should be accessible to everyone. 
                Our courses start from competitive rates with flexible payment options.
              </p>
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">₹2,500+</div>
                    <p className="text-sm text-muted-foreground">Beginner Package</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-1">₹4,000+</div>
                    <p className="text-sm text-muted-foreground">Complete Course</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">₹1,500+</div>
                    <p className="text-sm text-muted-foreground">Refresher Course</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-6">
                  *Prices are indicative. Contact us for exact quotes based on your requirements.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-secondary group">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
