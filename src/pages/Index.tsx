import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-doctor.jpg";
import clinicImage from "@/assets/clinic.jpg";
import { Baby, HeartPulse, Microscope, ShieldCheck, Star, ArrowRight, Phone, MapPin, Award, Users, Clock, CheckCircle2 } from "lucide-react";

const services = [
  { icon: Baby, title: "IVF Treatment", slug: "ivf", desc: "Advanced In Vitro Fertilization with state-of-the-art technology and personalized protocols." },
  { icon: Microscope, title: "ICSI", slug: "icsi", desc: "Intracytoplasmic Sperm Injection for precise fertilization and improved success rates." },
  { icon: HeartPulse, title: "IUI", slug: "iui", desc: "Intrauterine Insemination — a gentle, minimally invasive fertility treatment." },
  { icon: ShieldCheck, title: "Egg Freezing", slug: "egg-freezing", desc: "Preserve your fertility with advanced oocyte cryopreservation techniques." },
];

const stats = [
  { icon: Award, value: "85%", label: "IVF Success Rate" },
  { icon: Users, value: "5000+", label: "Happy Families" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: MapPin, value: "4", label: "City Locations" },
];

const testimonials = [
  { name: "Priya & Rajesh", text: "After 5 years of trying, Dr. Yuvi's IVF treatment blessed us with twins. We are forever grateful.", rating: 5, treatment: "IVF" },
  { name: "Anita & Vikram", text: "Dr. Yuvi's compassionate approach made our ICSI journey smooth. Our baby girl is now 6 months old!", rating: 5, treatment: "ICSI" },
  { name: "Meera & Sunil", text: "The entire team was incredibly supportive. Dr. Yuvi explained every step and gave us hope when we needed it most.", rating: 5, treatment: "IVF" },
];

const whyChoose = [
  "85% IVF success rate — well above national average",
  "Personalized treatment protocols for every patient",
  "10+ years of fertility expertise",
  "State-of-the-art lab and equipment",
  "Compassionate, patient-first approach",
  "TEDx speaker and fertility educator",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[650px]">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Dr. Yuvi's fertility clinic" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        </div>
        <div className="relative container section-padding flex items-center min-h-[650px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              TEDx Speaker · 10+ Years of Excellence
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Your Journey to <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="italic text-accent"
              >Parenthood</motion.span> Starts Here
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-primary-foreground/80 text-lg mb-8 leading-relaxed"
            >
              Dr. Yuvrajsingh Jadeja — trusted Gynaecologist & IVF Specialist helping thousands of families across India realize their dream of having a child.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" variant="hero" asChild>
                <Link to="/contact">Book Consultation <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button size="lg" variant="hero-outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating card */}
        <motion.div
          initial={{ opacity: 0, y: 30, x: 30 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden lg:block absolute bottom-12 right-12 xl:right-24 bg-card/95 backdrop-blur-md rounded-xl border p-6 shadow-xl max-w-xs"
        >
          <div className="flex items-center gap-3 mb-3">
            <Phone className="w-5 h-5 text-primary" />
            <span className="font-display font-semibold">Quick Consultation</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">Call us to schedule your appointment today.</p>
          <a href="tel:+919876543210" className="text-primary font-bold text-lg hover:underline">+91 98765 43210</a>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-primary relative -mt-1">
        <div className="container py-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={item} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10 mb-3">
                  <stat.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Fertility & Women's Health Care"
            subtitle="From fertility treatments to pregnancy care, Dr. Yuvi provides compassionate, world-class healthcare."
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={item}>
                <Link
                  to={`/services/${service.slug}`}
                  className="block bg-card rounded-xl p-6 card-elevated border group h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button variant="outline" asChild>
              <Link to="/services">View All Services <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section-alt section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={clinicImage} alt="Modern fertility clinic" className="rounded-xl shadow-xl w-full" />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-card rounded-xl border shadow-lg p-4 hidden md:block"
              >
                <div className="text-2xl font-display font-bold text-primary">85%</div>
                <div className="text-xs text-muted-foreground">IVF Success Rate</div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wide uppercase mb-4">
                About Dr. Yuvi
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                A Decade of Helping Dreams Come True
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Yuvrajsingh Jadeja is a renowned Gynaecologist & IVF Specialist with over 10 years of clinical experience. With clinics across Vadodara, Ahmedabad, Mumbai, and Anand, he has helped thousands of couples achieve their dream of parenthood.
              </p>
              <div className="space-y-2.5 mb-6">
                {whyChoose.slice(0, 4).map((reason) => (
                  <div key={reason} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            badge="Success Stories"
            title="Families We've Helped Grow"
            subtitle="Real stories from real families who trusted Dr. Yuvi with their fertility journey."
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={item}
                className="bg-card rounded-xl p-6 border card-elevated relative"
              >
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-3">
                  {t.treatment}
                </span>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-sm">{t.name}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button variant="outline" asChild>
              <Link to="/success-stories">View All Stories <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Take the first step towards parenthood. Book a consultation with Dr. Yuvi today.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" variant="hero" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="hero-outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/ivf-quiz">Take IVF Quiz</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
