import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import clinicImage from "@/assets/clinic.jpg";
import heroImage from "@/assets/hero-doctor.jpg";
import successImage from "@/assets/success-story.jpg";

const images = [
  { src: clinicImage, alt: "Modern IVF Laboratory", category: "Clinic" },
  { src: heroImage, alt: "Dr. Yuvi at the clinic", category: "Doctor" },
  { src: successImage, alt: "Happy family after successful treatment", category: "Success" },
  { src: clinicImage, alt: "State-of-the-art equipment", category: "Clinic" },
  { src: heroImage, alt: "Consultation room", category: "Clinic" },
  { src: successImage, alt: "New parents with their baby", category: "Success" },
];

const categories = ["All", "Clinic", "Doctor", "Success"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-4">Image Gallery</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Take a look inside our world-class fertility clinic and see our happy families.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={`${img.alt}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelected(i)}
                  className="cursor-pointer group overflow-hidden rounded-lg border card-elevated"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium">{img.alt}</p>
                    <p className="text-xs text-muted-foreground">{img.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={filtered[selected]?.src}
              alt={filtered[selected]?.alt}
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
