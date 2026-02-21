import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import successImage from "@/assets/success-story.jpg";
import { Play, Star, Quote } from "lucide-react";

const videoCategories = [
  {
    id: "all",
    label: "All Stories",
    videos: [
      { id: "dQw4w9WgXcQ", title: "IVF Success: Priya & Rajesh's Journey", category: "ivf" },
      { id: "dQw4w9WgXcQ", title: "From Infertility to Twins — Real Story", category: "ivf" },
      { id: "dQw4w9WgXcQ", title: "Our ICSI Baby — Anita Shares Her Story", category: "icsi" },
      { id: "dQw4w9WgXcQ", title: "5 Years of Trying — Finally a Mother", category: "journey" },
      { id: "dQw4w9WgXcQ", title: "Dr. Yuvi Changed Our Lives", category: "journey" },
      { id: "dQw4w9WgXcQ", title: "Miracle Baby After 3 IVF Cycles", category: "ivf" },
      { id: "dQw4w9WgXcQ", title: "ICSI Success at 38 — Our Story", category: "icsi" },
      { id: "dQw4w9WgXcQ", title: "IUI Worked for Us — Simple & Effective", category: "iui" },
    ],
  },
  {
    id: "ivf",
    label: "IVF Stories",
    filter: "ivf",
  },
  {
    id: "icsi",
    label: "ICSI Stories",
    filter: "icsi",
  },
  {
    id: "iui",
    label: "IUI Stories",
    filter: "iui",
  },
  {
    id: "journey",
    label: "Patient Journeys",
    filter: "journey",
  },
];

const allVideos = videoCategories[0].videos!;

const writtenStories = [
  {
    name: "Priya & Rajesh, Vadodara",
    story: "After 5 years of trying naturally and going through multiple failed treatments elsewhere, we found Dr. Yuvi. His personalized IVF approach worked on our very first attempt. We are now blessed with twin boys!",
    image: successImage,
    rating: 5,
    treatment: "IVF",
  },
  {
    name: "Anita & Vikram, Ahmedabad",
    story: "Dr. Yuvi's compassionate approach made all the difference. He took time to explain everything and our ICSI treatment was successful. Our baby girl Aria is now the light of our lives.",
    image: successImage,
    rating: 5,
    treatment: "ICSI",
  },
  {
    name: "Meera & Sunil, Mumbai",
    story: "We had almost given up hope after 3 failed IVF cycles at other clinics. Dr. Yuvi reviewed our case, adjusted the protocol, and we conceived successfully. We cannot thank him enough.",
    image: successImage,
    rating: 5,
    treatment: "IVF",
  },
  {
    name: "Kavita & Arjun, Anand",
    story: "Dr. Yuvi recommended IUI and it worked on the second cycle! We were amazed at how simple and stress-free the process was. Our son is now 2 years old.",
    image: successImage,
    rating: 5,
    treatment: "IUI",
  },
];

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredVideos = activeTab === "all"
    ? allVideos
    : allVideos.filter((v) => v.category === activeTab);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-4">Success Stories</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Real families, real journeys, real miracles. Watch and read stories from couples who trusted Dr. Yuvi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* YouTube Shorts with Tabs */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            badge="Video Stories"
            title="Watch Real Patient Journeys"
            subtitle="Short videos sharing the emotional and inspiring journeys of our patients."
          />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-secondary/50 p-1 flex-wrap h-auto gap-1">
                {videoCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm px-4 py-2"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {filteredVideos.map((short, i) => (
                  <motion.div
                    key={`${short.title}-${i}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="aspect-[9/16] rounded-xl overflow-hidden bg-foreground/5 border card-elevated group relative"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${short.id}`}
                      title={short.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-3 pointer-events-none">
                      <p className="text-primary-foreground text-xs font-medium line-clamp-2">{short.title}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Written Stories */}
      <section className="section-alt section-padding">
        <div className="container">
          <SectionHeading
            badge="Patient Testimonials"
            title="Stories That Inspire Hope"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {writtenStories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border p-6 sm:p-8 card-elevated relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                <div className="flex items-center gap-4 mb-4">
                  <img src={story.image} alt={story.name} className="w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-primary/20" />
                  <div>
                    <p className="font-semibold text-sm">{story.name}</p>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mt-1">
                      {story.treatment}
                    </span>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: story.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">"{story.story}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;
