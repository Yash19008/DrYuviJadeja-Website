import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
}

const SectionHeading = ({ badge, title, subtitle, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wide uppercase mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
