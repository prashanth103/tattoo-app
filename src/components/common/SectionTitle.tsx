import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  index?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  index,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start"}`}
    >
      <div className="flex items-center gap-3">
        {index && <span className="eyebrow text-text-primary">{index}</span>}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      </div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`subtitle ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>}
    </motion.div>
  );
}
