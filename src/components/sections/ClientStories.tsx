import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews, GOOGLE_REVIEWS } from "@/data/dummyData";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";

const GoogleIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export default function ClientStories() {
  return (
    <section className="section-padding py-24 md:py-32">
      <div className="container-width">
        <SectionTitle
          index="07"
          eyebrow="CLIENT STORIES"
          title="What our clients say"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mt-12 mb-16 border border-border rounded-xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={28} className="fill-[#FBBC05] text-[#FBBC05]" strokeWidth={1} />
              ))}
            </div>
            <span className="font-body text-text-secondary text-lg">{GOOGLE_REVIEWS.total} Reviews</span>
          </div>

          <div className="font-display text-[56px] md:text-[64px] mb-4 leading-none">{GOOGLE_REVIEWS.rating} / 5</div>

          <div className="flex items-center justify-center gap-3 mb-8">
            <GoogleIcon className="w-6 h-6" />
            <p className="text-text-muted font-body text-sm md:text-base tracking-wide uppercase">Based on {GOOGLE_REVIEWS.total} Google Reviews</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              href={GOOGLE_REVIEWS.writeReviewUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a Review
            </Button>
            <Button
              href={GOOGLE_REVIEWS.businessUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleIcon className="w-6 h-6 mr-2" />
              View on Google
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-base p-8 flex flex-col gap-6 hover:-translate-y-1 hover:shadow-lg hover:border-text-secondary/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    strokeWidth={1.5}
                    className={s < t.rating ? "fill-[#FBBC05] text-[#FBBC05]" : "text-border"}
                  />
                ))}
              </div>
              <p className="font-display text-xl leading-snug text-text-primary italic line-clamp-4">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-border/50">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                <div className="flex-1">
                  <p className="text-sm text-text-primary font-body">{t.name}</p>
                  <p className="text-xs text-text-muted font-body mt-0.5">{t.date}</p>
                </div>
                <GoogleIcon className="w-5 h-5 ml-auto opacity-80" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
