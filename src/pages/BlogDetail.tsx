import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";

const blogContent: Record<string, { title: string; date: string; category: string; content: string[] }> = {
  "understanding-ivf": {
    title: "Understanding IVF: A Complete Guide for Couples",
    date: "Feb 15, 2026",
    category: "Fertility",
    content: [
      "In Vitro Fertilization (IVF) is one of the most well-known and effective forms of assisted reproductive technology. For couples struggling with infertility, IVF has opened doors that once seemed permanently closed.",
      "The IVF process involves several steps: ovarian stimulation, egg retrieval, fertilization in the laboratory, embryo culture, and embryo transfer. Each step is carefully monitored and adjusted based on the individual patient's response.",
      "Success rates for IVF vary based on age, cause of infertility, and clinic expertise. At our clinic, we maintain success rates well above the national average thanks to our state-of-the-art laboratory and personalized treatment protocols.",
      "One of the most common concerns patients have is about the emotional and physical toll of IVF. While the process can be demanding, our comprehensive support system — including counseling, nutritional guidance, and 24/7 availability — ensures you never feel alone on this journey.",
      "If you're considering IVF, the first step is a thorough evaluation. This includes blood tests, ultrasound assessments, and a detailed discussion about your medical history and fertility goals. Dr. Yuvi believes in transparency and will walk you through every option available.",
    ],
  },
  "egg-freezing-guide": {
    title: "Egg Freezing: When, Why, and How",
    date: "Feb 10, 2026",
    category: "Fertility Preservation",
    content: [
      "Egg freezing, also known as oocyte cryopreservation, has revolutionized fertility preservation. It gives women the power to plan their reproductive future on their own terms.",
      "The ideal age for egg freezing is typically between 25 and 35, when egg quality and quantity are at their best. However, every woman's situation is unique, and a consultation can help determine the best timing for you.",
      "The process involves hormonal stimulation for about 10-14 days, followed by a brief egg retrieval procedure. The retrieved eggs are then flash-frozen using a technique called vitrification, which preserves them in excellent condition.",
      "Modern vitrification techniques have dramatically improved egg survival rates, making egg freezing a reliable option for fertility preservation. When you're ready to use your frozen eggs, they can be thawed, fertilized, and transferred with high success rates.",
    ],
  },
};

const defaultContent = {
  title: "Blog Post",
  date: "2026",
  category: "Health",
  content: ["This blog post content is coming soon. Stay tuned for expert insights from Dr. Yuvi on fertility, pregnancy, and women's health."],
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogContent[id || ""] || defaultContent;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container max-w-3xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/blog"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
          </Button>

          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">{post.category}</span>
            <h1 className="text-3xl sm:text-4xl font-display font-bold mt-2 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> Dr. Yuvrajsingh Jadeja</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
            </div>
            <div className="prose prose-lg max-w-none">
              {post.content.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-6">{para}</p>
              ))}
            </div>
            <div className="mt-12 p-6 bg-secondary rounded-lg text-center">
              <h3 className="font-display font-semibold text-lg mb-2">Have Questions?</h3>
              <p className="text-muted-foreground text-sm mb-4">Book a consultation with Dr. Yuvi to discuss your specific situation.</p>
              <Button asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </motion.article>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
