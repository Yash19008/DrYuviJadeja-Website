import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import clinicImage from "@/assets/clinic.jpg";
import { Baby, HeartPulse, Microscope, ShieldCheck, Stethoscope, Scissors, ArrowRight, CheckCircle2, Clock, Users, Award, type LucideIcon } from "lucide-react";

interface ServiceData {
  icon: LucideIcon;
  title: string;
  slug: string;
  tagline: string;
  desc: string;
  longDesc: string;
  details: string[];
  benefits: string[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const serviceData: ServiceData[] = [
  {
    icon: Baby, title: "IVF Treatment", slug: "ivf",
    tagline: "Advanced In Vitro Fertilization",
    desc: "In Vitro Fertilization uses advanced reproductive technology to fertilize eggs with sperm outside the body, then transfer the embryo to the uterus.",
    longDesc: "IVF is one of the most effective forms of assisted reproductive technology. Dr. Yuvi's personalized IVF protocols have helped thousands of couples achieve their dream of parenthood with an 85% success rate. Each treatment plan is tailored to the individual patient's needs.",
    details: ["Personalized stimulation protocols", "Advanced embryo culture", "Blastocyst transfer", "Frozen embryo transfer (FET)", "Pre-implantation genetic testing", "Donor egg/sperm programs"],
    benefits: ["Highest success rates among fertility treatments", "Suitable for a wide range of infertility causes", "Genetic screening of embryos possible", "Fertility preservation through embryo freezing"],
    process: [
      { step: "Initial Consultation", desc: "Comprehensive fertility assessment and personalized treatment plan." },
      { step: "Ovarian Stimulation", desc: "Hormone medications to stimulate egg production over 10-14 days." },
      { step: "Egg Retrieval", desc: "Minimally invasive procedure to collect mature eggs." },
      { step: "Fertilization & Culture", desc: "Eggs are fertilized and embryos are cultured in our advanced lab." },
      { step: "Embryo Transfer", desc: "Selected embryo is transferred to the uterus." },
      { step: "Pregnancy Test", desc: "Blood test to confirm pregnancy approximately 2 weeks later." },
    ],
    faqs: [
      { q: "What is the success rate of IVF?", a: "Our clinic maintains an 85% success rate, well above the national average. Success depends on factors like age, cause of infertility, and overall health." },
      { q: "How long does one IVF cycle take?", a: "A typical IVF cycle takes about 4-6 weeks from start to pregnancy test." },
      { q: "Is IVF painful?", a: "Most patients experience minimal discomfort. Egg retrieval is done under light sedation." },
    ],
  },
  {
    icon: Microscope, title: "ICSI", slug: "icsi",
    tagline: "Intracytoplasmic Sperm Injection",
    desc: "A precise form of IVF where a single sperm is injected directly into an egg for fertilization.",
    longDesc: "ICSI is particularly effective for male factor infertility. By selecting and injecting a single healthy sperm directly into the egg, we achieve higher fertilization rates even in cases of low sperm count or poor motility.",
    details: ["Ideal for male factor infertility", "Higher fertilization rates", "Single sperm selection", "Coupled with IVF protocols", "Suitable for previous IVF failures", "Works with surgically retrieved sperm"],
    benefits: ["Overcomes severe male infertility", "Only one sperm needed per egg", "High fertilization rates", "Can use surgically retrieved sperm"],
    process: [
      { step: "Semen Analysis", desc: "Detailed evaluation of sperm quality and quantity." },
      { step: "Ovarian Stimulation", desc: "Partner undergoes hormone stimulation for egg production." },
      { step: "Sperm Selection", desc: "Best quality sperm is identified under high magnification." },
      { step: "Microinjection", desc: "Single sperm injected directly into each mature egg." },
      { step: "Embryo Culture", desc: "Fertilized eggs are monitored and cultured." },
      { step: "Transfer & Support", desc: "Embryo transfer followed by progesterone support." },
    ],
    faqs: [
      { q: "When is ICSI recommended over IVF?", a: "ICSI is recommended when there's severe male factor infertility, low sperm count, or previous IVF fertilization failure." },
      { q: "Does ICSI increase birth defect risk?", a: "Research shows ICSI babies have the same rate of birth defects as naturally conceived babies." },
    ],
  },
  {
    icon: HeartPulse, title: "IUI", slug: "iui",
    tagline: "Intrauterine Insemination",
    desc: "Places prepared sperm directly into the uterus around the time of ovulation.",
    longDesc: "IUI is a less invasive and more affordable fertility treatment. It's often the first line of treatment for couples with unexplained infertility, mild male factor issues, or cervical mucus problems.",
    details: ["Minimally invasive", "Timed with ovulation", "Sperm washing techniques", "Suitable for mild infertility", "Can be combined with medication", "Natural or medicated cycles"],
    benefits: ["Less invasive than IVF", "More affordable option", "Can be done in natural cycles", "Minimal recovery time"],
    process: [
      { step: "Cycle Monitoring", desc: "Track ovulation through ultrasound and blood tests." },
      { step: "Sperm Preparation", desc: "Semen sample is washed and concentrated." },
      { step: "Insemination", desc: "Prepared sperm placed directly in the uterus via catheter." },
      { step: "Follow-up", desc: "Pregnancy test after two weeks." },
    ],
    faqs: [
      { q: "How many IUI cycles should I try?", a: "We typically recommend 3-4 IUI cycles before considering IVF." },
      { q: "Is IUI painful?", a: "Most women describe it as similar to a Pap smear — mild discomfort but not painful." },
    ],
  },
  {
    icon: ShieldCheck, title: "Egg Freezing", slug: "egg-freezing",
    tagline: "Oocyte Cryopreservation",
    desc: "Allows women to preserve their fertility by freezing eggs for future use.",
    longDesc: "Egg freezing empowers women to take control of their reproductive timeline. Using vitrification technology, we can freeze eggs with a high survival rate, giving you the freedom to plan your family on your terms.",
    details: ["Vitrification technology", "Fertility preservation", "Future family planning", "High survival rates", "Pre-cancer treatment preservation", "Elective fertility preservation"],
    benefits: ["Preserve fertility for the future", "No partner needed", "High egg survival rates with vitrification", "Peace of mind for career planning"],
    process: [
      { step: "Consultation", desc: "Discuss your goals and assess ovarian reserve." },
      { step: "Stimulation", desc: "Hormone injections to produce multiple eggs." },
      { step: "Egg Retrieval", desc: "Eggs collected through a quick outpatient procedure." },
      { step: "Vitrification", desc: "Eggs rapidly frozen and stored safely." },
    ],
    faqs: [
      { q: "What is the best age to freeze eggs?", a: "Ideally before age 35, but women up to 40 can still benefit. Younger eggs have higher quality." },
      { q: "How long can eggs be stored?", a: "Frozen eggs can be stored indefinitely without loss of quality." },
    ],
  },
  {
    icon: Stethoscope, title: "Pregnancy Care", slug: "pregnancy-care",
    tagline: "Comprehensive Prenatal & Postnatal Care",
    desc: "Comprehensive prenatal and postnatal care including high-risk pregnancy management.",
    longDesc: "From your first trimester through delivery and beyond, Dr. Yuvi provides expert pregnancy care. We specialize in high-risk pregnancies and ensure both mother and baby receive the best possible care throughout the journey.",
    details: ["Regular monitoring", "High-risk pregnancy care", "Ultrasound assessments", "Nutritional guidance", "Gestational diabetes management", "Postpartum support"],
    benefits: ["Expert high-risk pregnancy management", "Regular growth monitoring", "Comprehensive delivery planning", "Postnatal care and support"],
    process: [
      { step: "First Trimester", desc: "Initial assessment, dating scan, and care plan." },
      { step: "Second Trimester", desc: "Anomaly scan, growth monitoring, and maternal health checks." },
      { step: "Third Trimester", desc: "Regular check-ups, birth plan discussion, and delivery preparation." },
      { step: "Delivery & Beyond", desc: "Expert delivery management and postnatal care." },
    ],
    faqs: [
      { q: "What makes a pregnancy high-risk?", a: "Factors include maternal age, pre-existing conditions, multiple pregnancies, and complications during pregnancy." },
    ],
  },
  {
    icon: Scissors, title: "Laparoscopic Surgery", slug: "laparoscopic",
    tagline: "Minimally Invasive Gynecological Surgery",
    desc: "Minimally invasive surgical procedures for gynecological conditions with faster recovery.",
    longDesc: "Laparoscopic surgery uses small incisions and a camera to perform complex gynecological procedures with minimal scarring and faster recovery. Dr. Yuvi has performed thousands of successful laparoscopic procedures.",
    details: ["Minimal scarring", "Faster recovery", "Diagnostic laparoscopy", "Endometriosis treatment", "Fibroid removal", "Ovarian cyst management"],
    benefits: ["Smaller incisions and less scarring", "Shorter hospital stay", "Faster return to normal activities", "Less post-operative pain"],
    process: [
      { step: "Pre-operative Assessment", desc: "Complete evaluation and surgical planning." },
      { step: "Surgery", desc: "Procedure performed through small keyhole incisions." },
      { step: "Recovery", desc: "Most patients go home same day or next day." },
      { step: "Follow-up", desc: "Post-operative check and recovery guidance." },
    ],
    faqs: [
      { q: "How long is the recovery?", a: "Most patients return to normal activities within 1-2 weeks, much faster than traditional surgery." },
    ],
  },
];

const relatedStats = [
  { icon: Award, label: "Success Rate", value: "85%" },
  { icon: Users, label: "Happy Families", value: "5000+" },
  { icon: Clock, label: "Years Experience", value: "10+" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const otherServices = serviceData.filter((s) => s.slug !== slug);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
              ← All Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">{service.tagline}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-4">{service.title}</h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">{service.desc}</p>
            <div className="mt-8">
              <Button size="lg" variant="hero" asChild>
                <Link to="/contact">Book Consultation <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b bg-card">
        <div className="container py-6">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {relatedStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xl font-display font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Image */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <SectionHeading badge="About This Treatment" title={`Why Choose ${service.title}?`} center={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">{service.longDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              <img src={clinicImage} alt={service.title} className="rounded-xl shadow-xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-alt section-padding">
        <div className="container">
          <SectionHeading badge="What's Included" title="Treatment Features" subtitle={`Everything covered in our ${service.title} program.`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {service.details.map((d, i) => (
              <motion.div
                key={d}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-lg border p-5 card-elevated flex items-start gap-3"
              >
                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-foreground">{d}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading badge="The Process" title="Step-by-Step Journey" subtitle="Here's what to expect during your treatment." />
          <div className="max-w-3xl mx-auto">
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < service.process.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-display font-semibold text-lg mb-1">{step.step}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="section-alt section-padding">
          <div className="container">
            <SectionHeading badge="Common Questions" title={`${service.title} FAQs`} />
            <div className="max-w-2xl mx-auto space-y-4">
              {service.faqs.map((faq) => (
                <motion.div key={faq.q} {...fadeUp} className="bg-card rounded-lg border p-6">
                  <h4 className="font-display font-semibold mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading badge="Explore More" title="Other Services" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {otherServices.slice(0, 3).map((s, i) => (
              <motion.div key={s.slug} {...fadeUp} transition={{ delay: i * 0.08 }}>
                <Link
                  to={`/services/${s.slug}`}
                  className="block bg-card rounded-lg border p-6 card-elevated group"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Begin Your {service.title} Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Book a consultation with Dr. Yuvi to discuss your personalized treatment plan.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/contact">Book Consultation <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
// TO BE MADE DYNAMIC