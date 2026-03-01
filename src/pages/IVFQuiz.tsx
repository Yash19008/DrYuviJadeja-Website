import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const questions = [
  {
    question: "How long have you been trying to conceive?",
    options: ["Less than 6 months", "6-12 months", "1-2 years", "More than 2 years"],
  },
  {
    question: "What is your age group?",
    options: ["Under 30", "30-35", "35-40", "Over 40"],
  },
  {
    question: "Have you been diagnosed with any reproductive condition?",
    options: ["PCOS", "Endometriosis", "Low sperm count/motility", "No known diagnosis", "Other"],
  },
  {
    question: "Have you undergone any fertility treatments before?",
    options: ["No, this is our first time", "IUI", "IVF", "Other treatments"],
  },
  {
    question: "What is most important to you in choosing a fertility specialist?",
    options: ["High success rates", "Personalized care", "Affordable treatment", "Advanced technology", "All of the above"],
  },
];

const IVFQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[current] = answer;
    setAnswers(newAnswers);
  };

  const next = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
    else setCompleted(true);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-4">IVF Readiness Quiz</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Answer a few questions to help us understand your fertility journey better.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-2xl">
          {!completed ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card rounded-lg border p-8 card-elevated"
            >
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Question {current + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <h2 className="text-xl font-display font-semibold mb-6">{questions[current].question}</h2>

              <div className="space-y-3 mb-8">
                {questions[current].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-sm ${
                      answers[current] === option
                        ? "border-primary bg-secondary text-primary font-medium"
                        : "border-border hover:border-primary/30 text-muted-foreground"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <Button variant="ghost" onClick={prev} disabled={current === 0}>
                  <ArrowLeft className="w-4 h-4" /> Previous
                </Button>
                <Button onClick={next} disabled={!answers[current]}>
                  {current === questions.length - 1 ? "Submit" : "Next"} <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-lg border p-8 text-center card-elevated"
            >
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-display font-bold mb-3">Thank You!</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Based on your responses, we recommend scheduling a personalized consultation with Dr. Yuvi to discuss the best fertility treatment plan for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" asChild>
                  <Link to="/contact">Book Consultation</Link>
                </Button>
                <Button variant="outline" onClick={() => { setCompleted(false); setCurrent(0); setAnswers([]); }}>
                  Retake Quiz
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default IVFQuiz;


// Questions will be shown according to previous answers!