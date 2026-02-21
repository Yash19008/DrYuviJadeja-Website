import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Ready to start your journey? Get in touch with Dr. Yuvi's team today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-display font-bold">Get In Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have questions about our services or want to schedule a consultation, we're here to help.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Location", value: "Vadodara, Gujarat, India" },
                  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                  { icon: Mail, label: "Email", value: "info@doctoryuvi.com" },
                  { icon: Clock, label: "Hours", value: "Mon-Sat: 9:00 AM - 7:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {!submitted ? (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-card rounded-lg border p-6 sm:p-8 card-elevated space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your full name" required maxLength={100} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required maxLength={15} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required maxLength={255} />
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Location</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select a city" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vadodara">Vadodara</SelectItem>
                        <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="anand">Anand</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Service of Interest</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ivf">IVF Treatment</SelectItem>
                        <SelectItem value="icsi">ICSI</SelectItem>
                        <SelectItem value="iui">IUI</SelectItem>
                        <SelectItem value="egg-freezing">Egg Freezing</SelectItem>
                        <SelectItem value="pregnancy">Pregnancy Care</SelectItem>
                        <SelectItem value="second-opinion">Second Opinion</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your situation..." rows={4} maxLength={1000} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-lg border p-8 text-center card-elevated"
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been sent. Our team will get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
