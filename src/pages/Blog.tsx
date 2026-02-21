import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  { id: "understanding-ivf", title: "Understanding IVF: A Complete Guide for Couples", excerpt: "Learn everything about In Vitro Fertilization — from the process to success rates and what to expect.", date: "Feb 15, 2026", category: "Fertility" },
  { id: "egg-freezing-guide", title: "Egg Freezing: When, Why, and How", excerpt: "A comprehensive guide to fertility preservation through egg freezing for modern women.", date: "Feb 10, 2026", category: "Fertility Preservation" },
  { id: "male-infertility", title: "Male Infertility: Causes and Modern Solutions", excerpt: "Breaking the stigma around male infertility and exploring advanced treatment options.", date: "Feb 5, 2026", category: "Men's Health" },
  { id: "pregnancy-nutrition", title: "Nutrition During Pregnancy: What You Should Know", excerpt: "Essential dietary guidelines for a healthy pregnancy and baby development.", date: "Jan 28, 2026", category: "Pregnancy" },
  { id: "pcos-fertility", title: "PCOS and Fertility: Understanding the Connection", excerpt: "How Polycystic Ovary Syndrome affects fertility and what treatment options are available.", date: "Jan 20, 2026", category: "Women's Health" },
  { id: "ivf-myths", title: "5 Common Myths About IVF Debunked", excerpt: "Separating fact from fiction when it comes to In Vitro Fertilization treatments.", date: "Jan 12, 2026", category: "Fertility" },
];

const Blog = () => {
  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-4">Health Blog</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Expert insights on fertility, pregnancy, and women's health by Dr. Yuvi.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="block bg-card rounded-lg border card-elevated overflow-hidden group"
                >
                  <div className="h-48 bg-secondary flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">{post.category}</span>
                    <h3 className="font-display font-semibold text-lg mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
