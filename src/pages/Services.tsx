import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import clinicImage from "@/assets/clinic.jpg";
import { Baby, HeartPulse, Microscope, ShieldCheck, Stethoscope, Scissors, ArrowRight } from "lucide-react";

const allServices = [
  { icon: Baby, title: "IVF Treatment", slug: "ivf", desc: "In Vitro Fertilization uses advanced reproductive technology to fertilize eggs with sperm outside the body, then transfer the embryo to the uterus.", details: ["Personalized stimulation protocols", "Advanced embryo culture", "Blastocyst transfer", "Frozen embryo transfer (FET)"] },
  { icon: Microscope, title: "ICSI", slug: "icsi", desc: "Intracytoplasmic Sperm Injection is a precise form of IVF where a single sperm is injected directly into an egg for fertilization.", details: ["Ideal for male factor infertility", "Higher fertilization rates", "Single sperm selection", "Coupled with IVF protocols"] },
  { icon: HeartPulse, title: "IUI", slug: "iui", desc: "Intrauterine Insemination places prepared sperm directly into the uterus around the time of ovulation.", details: ["Minimally invasive", "Timed with ovulation", "Sperm washing techniques", "Suitable for mild infertility"] },
  { icon: ShieldCheck, title: "Egg Freezing", slug: "egg-freezing", desc: "Oocyte cryopreservation allows women to preserve their fertility by freezing eggs for future use.", details: ["Vitrification technology", "Fertility preservation", "Future family planning", "High survival rates"] },
  { icon: Stethoscope, title: "Pregnancy Care", slug: "pregnancy-care", desc: "Comprehensive prenatal and postnatal care including high-risk pregnancy management.", details: ["Regular monitoring", "High-risk pregnancy care", "Ultrasound assessments", "Nutritional guidance"] },
  { icon: Scissors, title: "Laparoscopic Surgery", slug: "laparoscopic", desc: "Minimally invasive surgical procedures for gynecological conditions with faster recovery.", details: ["Minimal scarring", "Faster recovery", "Diagnostic laparoscopy", "Endometriosis treatment"] },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-4">Our Services</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Comprehensive fertility and women's health services with cutting-edge technology and compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-16">
            {allServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <Link to={`/services/${service.slug}`}>Learn More <ArrowRight className="w-4 h-4" /></Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/contact">Enquire Now</Link>
                    </Button>
                  </div>
                </div>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <img src={clinicImage} alt={service.title} className="rounded-lg shadow-lg w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">Need a Second Opinion?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Dr. Yuvi offers second opinion IVF consultations for patients seeking clarity before major treatment decisions.
          </p>
          <Button size="lg" variant="hero" asChild>
            <Link to="/contact">Get Second Opinion</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

// TO BE DONE