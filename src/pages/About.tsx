import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Shield, Smile, Target, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";

const trainers = [
  { name: "Asaan Team Lead", role: "Owner & Manager", bio: "Leading Asaan Motor with a vision to make driving training accessible and easy for everyone in Agra." },
  { name: "Jitendra Bhaiya", role: "Senior Instructor", bio: "Highly experienced and patient instructor. Known for excellent teaching methods and polite behavior." },
  { name: "Experienced Trainer 1", role: "Driving Instructor", bio: "Expert in car training with 10+ years experience. Specializes in beginner and nervous drivers." },
  { name: "Experienced Trainer 2", role: "Driving Instructor", bio: "Professional instructor skilled in teaching different driving techniques across various vehicles." },
  { name: "Experienced Trainer 3", role: "Driving Instructor", bio: "Dedicated trainer focused on road safety and building confidence in new drivers." },
];

const whyChooseUs = [
  { icon: Heart, text: "Polite and patient instructors" },
  { icon: Target, text: "Flexible class timings" },
  { icon: Smile, text: "Different vehicles for practice" },
  { icon: Shield, text: "Focus on safety and confidence" },
];

const About = () => {
  return (
    <Layout>
      <WhatsAppButton variant="floating" />

      <section className="pt-12 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">About <span className="text-primary">Asaan Motor</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground">आसान मोटर ड्राइविंग ट्रेनिंग विद्यालय, Agra</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="section-title mt-2">Making Driving Training Easy</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Asaan Motor Driving Training School in Kamla Nagar, Agra is dedicated to making driving education simple, accessible, and effective for everyone.</p>
                <p>With experienced instructors, flexible timings, and training in different vehicles and locations, we ensure our students are well-prepared for real-world driving.</p>
                <p>Rated 4.8★ by 344+ students, we pride ourselves on polite behavior, professional training, and excellent results.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <div className="card-hover text-center"><div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8★</div><div className="text-xs md:text-sm text-muted-foreground">Google Rating</div></div>
              <div className="card-hover text-center"><div className="text-3xl md:text-4xl font-bold text-primary mb-2">344+</div><div className="text-xs md:text-sm text-muted-foreground">Happy Students</div></div>
              <div className="card-hover text-center"><div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div><div className="text-xs md:text-sm text-muted-foreground">Years Experience</div></div>
              <div className="card-hover text-center"><div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div><div className="text-xs md:text-sm text-muted-foreground">Success Rate</div></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle mx-auto">Experienced and polite instructors dedicated to your success.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trainers.map((trainer, index) => (
              <motion.div key={trainer.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card-hover text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center"><span className="text-2xl md:text-3xl font-bold text-primary-foreground">{trainer.name.charAt(0)}</span></div>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-1">{trainer.name}</h3>
                <p className="text-primary font-medium text-xs md:text-sm mb-3">{trainer.role}</p>
                <p className="text-muted-foreground text-sm">{trainer.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="section-title">Why Choose Asaan Motor?</h2>
              <div className="space-y-4 mt-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><item.icon className="w-6 h-6 text-primary" /></div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                {["Personalized attention for each student", "Training in different vehicles", "Flexible scheduling", "Comprehensive road safety education", "Support until you pass your test"].map((item, index) => (
                  <li key={index} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span className="text-primary-foreground/90 text-sm md:text-base">{item}</span></li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">Learn Essential Road Signs</h2>
            <p className="text-muted-foreground mb-6">Prepare for your driving test with our comprehensive road signs guide.</p>
            <Link to="/roadsigns" className="btn-primary group">Learn Road Signs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;