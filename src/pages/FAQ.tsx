import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is IVF and how does it work?", a: "IVF (In Vitro Fertilization) involves stimulating the ovaries to produce multiple eggs, retrieving those eggs, fertilizing them with sperm in a lab, and transferring the resulting embryo(s) to the uterus. The process typically takes 2-3 weeks per cycle." },
  { q: "What is the success rate of IVF?", a: "IVF success rates vary based on age, diagnosis, and clinic expertise. For women under 35, success rates can be as high as 50-60% per cycle. Dr. Yuvi's clinic maintains success rates above the national average due to advanced technology and personalized protocols." },
  { q: "How much does IVF cost?", a: "IVF costs vary depending on the specific treatment plan, medications needed, and additional procedures. We offer transparent pricing and can discuss payment options during your initial consultation." },
  { q: "What is the difference between IVF and ICSI?", a: "In standard IVF, eggs and sperm are mixed together for fertilization. In ICSI, a single sperm is directly injected into each egg. ICSI is typically recommended when there are male factor infertility issues or when previous IVF cycles have had poor fertilization." },
  { q: "Is IVF painful?", a: "The IVF process involves hormonal injections (which may cause mild discomfort) and an egg retrieval procedure (performed under sedation). Most patients report minimal pain. Recovery from egg retrieval typically takes 1-2 days." },
  { q: "How long should we try before considering IVF?", a: "Generally, couples under 35 should consider fertility evaluation after 1 year of trying to conceive. For women over 35, evaluation is recommended after 6 months. Dr. Yuvi can assess your specific situation and recommend the best path forward." },
  { q: "What is egg freezing and who should consider it?", a: "Egg freezing preserves your eggs for future use. It's ideal for women who want to delay childbearing for personal or medical reasons. The best results are typically achieved when eggs are frozen before age 35." },
  { q: "Do you offer second opinions on IVF?", a: "Yes! Dr. Yuvi provides comprehensive second opinion consultations for patients who want additional clarity before proceeding with IVF treatment. This includes reviewing previous records and providing an independent assessment." },
  { q: "What cities does Dr. Yuvi practice in?", a: "Dr. Yuvi has clinics and consultation services across Vadodara, Ahmedabad, Mumbai, and Anand. You can book a consultation at any of these locations." },
  { q: "Can male infertility be treated?", a: "Yes, many causes of male infertility can be treated. Options range from lifestyle modifications and medications to advanced techniques like ICSI. A comprehensive evaluation of both partners is always recommended." },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Find answers to common questions about fertility treatments and our services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <AccordionItem value={`faq-${i}`} className="bg-card rounded-lg border px-6 card-elevated">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
