import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, Loader2, CheckCircle, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import Layout from "@/components/layout/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";

const topics = ["General Enquiry", "Course Details", "Pricing", "Scheduling Lessons", "Trainer Availability", "Road Signs Query", "Driving Test Preparation", "Feedback"];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", topic: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      await emailjs.send("default_service", "template_123abc", { from_name: formData.name, from_email: formData.email, phone: formData.phone, topic: formData.topic, message: formData.message }, "user_xyz");
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", topic: "", message: "" });
    } catch {
      setError("Failed to send message. Please try calling us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <WhatsAppButton variant="floating" />

      <section className="pt-12 pb-16 md:pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground">Have questions? We'd love to hear from you!</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div><h3 className="font-medium text-foreground mb-1">Address</h3><p className="text-muted-foreground text-sm">Shop no. C2/12/5, Vikas Market, near Sultanganj Crossing, Kamla Nagar, Agra, UP 282005</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-primary" /></div>
                  <div><h3 className="font-medium text-foreground mb-1">Phone</h3><a href="tel:+919837040974" className="text-muted-foreground text-sm hover:text-primary transition-colors">098370 40974</a></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary" /></div>
                  <div><h3 className="font-medium text-foreground mb-1">Working Hours</h3><p className="text-muted-foreground text-sm">Open Daily: Morning to 8:00 PM</p></div>
                </div>
              </div>
              <div className="mb-8"><h3 className="font-medium text-foreground mb-3">Quick Connect</h3><WhatsAppButton /></div>
              <div className="rounded-2xl overflow-hidden shadow-card h-[280px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.2!2d78.0!3d27.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEyJzAwLjAiTiA3OMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1699999999999" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Asaan Motor Driving School Location" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border/50">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                {isSuccess ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-primary" /></div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">Thank you for contacting Asaan Motor. We'll get back to you soon.</p>
                    <button onClick={() => setIsSuccess(false)} className="btn-outline">Send Another Message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div><label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Your name" /></div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div><label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="your@email.com" /></div>
                      <div><label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="+91 98370 40974" /></div>
                    </div>
                    <div><label htmlFor="topic" className="block text-sm font-medium text-foreground mb-1.5">Topic *</label><select id="topic" name="topic" value={formData.topic} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"><option value="">Select a topic</option>{topics.map((t) => <option key={t} value={t}>{t}</option>)}</select></div>
                    <div><label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none" placeholder="How can we help you?" /></div>
                    {error && <p className="text-destructive text-sm">{error}</p>}
                    <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-70">{isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</> : <><Send className="w-4 h-4 mr-2" />Send Message</>}</button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;