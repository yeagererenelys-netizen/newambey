import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Shield, Smile, Target, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const trainers = [
  {
    name: "Lokesh Sir",
    role: "Senior Instructor",
    bio: "Patient and professional instructor with over 15 years of experience. Known for treating students like family.",
  },
  {
    name: "Kaushal Bhaiya",
    role: "Driving Instructor",
    bio: "Expert in teaching beginners with clear explanations and friendly approach. Specializes in confidence building.",
  },
  {
    name: "Ramesh Ji",
    role: "Theory Instructor",
    bio: "Thorough knowledge of road signs and traffic rules. Prepares students for theoretical exams.",
  },
];

const whyChooseUs = [
  { icon: Heart, text: "Friendly and supportive behavior" },
  { icon: Target, text: "Clear and simple teaching methods" },
  { icon: Smile, text: "Perfect for nervous beginners" },
  { icon: Shield, text: "Focus on safety and confidence" },
];

const About = () => {
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
              About <span className="text-secondary">New Ambey</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Driving School for Women and Men Since 2000
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="section-title mt-2">Building Confident Drivers for Over Two Decades</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Established in 2000, New Ambey Motor Driving School in Vidyadhar Nagar, Jaipur, 
                  has been a trusted name in professional driving training for over two decades.
                </p>
                <p>
                  We offer comprehensive driving training with a strong focus on patience, safety, 
                  and skill-building. Our trainers, like Lokesh Sir and Kaushal Bhaiya, treat students 
                  like family, ensuring a comfortable and supportive learning environment.
                </p>
                <p>
                  Whether you're a complete beginner, a woman learning to drive, or someone looking 
                  to refresh their skills, our experienced team is here to help you become a confident 
                  and safe driver on Jaipur's roads.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="card-hover text-center">
                <div className="text-4xl font-bold text-primary mb-2">24+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="card-hover text-center">
                <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="card-hover text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="card-hover text-center">
                <div className="text-4xl font-bold text-secondary mb-2">4.8</div>
                <div className="text-sm text-muted-foreground">Star Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle mx-auto">
              Experienced and patient instructors dedicated to your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-hover text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">
                    {trainer.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{trainer.name}</h3>
                <p className="text-secondary font-medium text-sm mb-3">{trainer.role}</p>
                <p className="text-muted-foreground text-sm">{trainer.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">Why Choose New Ambey?</h2>
              <div className="space-y-4 mt-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary rounded-2xl p-8 text-primary-foreground"
            >
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                {[
                  "Personalized attention for each student",
                  "Flexible scheduling to suit your needs",
                  "Modern teaching techniques",
                  "Comprehensive road safety education",
                  "Support until you pass your test",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Learn Essential Road Signs
            </h2>
            <p className="text-muted-foreground mb-6">
              Prepare for your driving test with our comprehensive road signs guide.
            </p>
            <Link to="/roadsigns" className="btn-secondary group">
              Learn Road Signs
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
