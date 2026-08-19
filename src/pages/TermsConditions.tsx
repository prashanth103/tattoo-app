import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  HeartPulse,
  ShieldCheck,
  Ban,
  Clock,
  MapPin,
  Mail,
  Phone,
  HelpCircle,
  Camera,
} from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import SEO from "@/components/common/SEO";
import { CONTACT } from "@/constants/contact";

export default function TermsConditions() {
  const lastUpdated = "August 2026";

  const sections = [
    { id: "agreement", label: "1. Agreement to Terms" },
    { id: "studio-services", label: "2. Services & Consultations" },
    { id: "age-requirement", label: "3. Age & Identification" },
    { id: "health-sobriety", label: "4. Health & Session Readiness" },
    { id: "booking-pricing", label: "5. Pricing, Bookings & Scheduling" },
    { id: "intellectual-property", label: "6. Custom Artwork & Photography" },
    { id: "aftercare-healing", label: "7. Aftercare & Healing Guidance" },
    { id: "hygiene-standards", label: "8. Studio Hygiene & Standards" },
    { id: "website-disclaimer", label: "9. Website & Chatbot Disclaimer" },
    { id: "governing-law", label: "10. Governing Law & Contact" },
  ];

  return (
    <MainLayout>
      <SEO
        title="Terms & Conditions"
        description="Review the website terms, consultation process, booking guidelines, and studio disclaimers for Samava Tattoo Studio."
        url="https://www.samavatattoostudio.com/terms-and-conditions"
      />

      <PageTransition>
        {/* Hero Section */}
        <section className="section-padding pt-36 pb-16 border-b border-border bg-surface/50">
          <div className="container-width">
            <span className="eyebrow mb-6 inline-block">Studio Guidelines & Terms</span>
            <h1 className="page-title max-w-4xl">Terms & Conditions</h1>
            <p className="subtitle mt-6 max-w-2xl">
              Please review these terms regarding your use of our website, digital assistant, and
              tattoo consultation guidelines with Samava Tattoo Studio in Hyderabad.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-border/80 text-xs font-body text-text-muted uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-text-primary" />
                Last Updated: {lastUpdated}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-text-primary" />
                Samava Tattoo Studio · Hyderabad, India
              </span>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="section-padding py-16 md:py-24">
          <div className="container-width grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sticky Table of Contents (Desktop) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-32 card-base p-6">
              <p className="font-body text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
                Policy Sections
              </p>
              <nav className="flex flex-col gap-2.5">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="text-xs font-body text-text-secondary hover:text-text-primary hover:translate-x-1 transition-all duration-200"
                  >
                    {sec.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-text-muted font-body mb-3">Questions about privacy?</p>
                <Link
                  to="/privacy-policy"
                  className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-text-primary underline hover:opacity-80 transition-opacity"
                >
                  View Privacy Policy →
                </Link>
              </div>
            </aside>

            {/* Main Policy Content */}
            <article className="lg:col-span-8 flex flex-col gap-14">
              {/* 1. Agreement to Terms */}
              <motion.section
                id="agreement"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 scroll-mt-32"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-background text-xs font-display flex items-center justify-center">
                    01
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    Agreement to Terms
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    These Terms & Conditions (&ldquo;Terms&rdquo;) apply to your access to and use
                    of the <strong>Samava Tattoo Studio</strong> website (
                    <a
                      href="https://www.samavatattoostudio.com"
                      className="text-text-primary underline"
                    >
                      samavatattoostudio.com
                    </a>
                    ), digital assistant, and consultation links.
                  </p>
                  <p>
                    By browsing this website, interacting with our assistant, or contacting us to
                    inquire about tattoo services, you acknowledge and agree to these terms.
                  </p>
                </div>
              </motion.section>

              {/* 2. Studio Services & Consultations */}
              <motion.section
                id="studio-services"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 scroll-mt-32 border-t border-border pt-10"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-background text-xs font-display flex items-center justify-center">
                    02
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    Services & Consultations
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    Samava Tattoo Studio showcases custom tattoo artistry, including portrait,
                    realism, colour, minimal, fine line, big-scale, medium-scale, arm band, and
                    cover-up tattoo work.
                  </p>
                  <p>
                    Tattoo designs are custom artistic creations. While artists collaborate closely
                    with clients to shape ideas and references, final design details, sizing, and
                    placement feasibility are subject to professional artist evaluation and skin
                    characteristics.
                  </p>
                </div>
              </motion.section>

              {/* 3. Age & Identification */}
              <motion.section
                id="age-requirement"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 scroll-mt-32 border-t border-border pt-10"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-background text-xs font-display flex items-center justify-center">
                    03
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    Age & Identification
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <div className="card-base p-5 bg-surface border-l-2 border-l-primary flex items-start gap-4">
                    <AlertTriangle size={20} className="text-text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-base text-text-primary mb-1">
                        Age Verification
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        In-studio tattoo services are subject to applicable legal age requirements.
                        Clients may be requested to present valid government-issued photo
                        identification (such as an Aadhaar Card, Passport, Driver&rsquo;s License,
                        or Voter ID) prior to receiving a tattoo.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 4. Health & Session Readiness */}
              <motion.section
                id="health-sobriety"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 scroll-mt-32 border-t border-border pt-10"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-background text-xs font-display flex items-center justify-center">
                    04
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    Health & Session Readiness
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    For your comfort and safety during tattooing sessions, the studio recommends:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card-base p-5">
                      <div className="flex items-center gap-2 mb-2 text-text-primary">
                        <HeartPulse size={16} />
                        <h3 className="font-display text-base">Health Disclosures</h3>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        Clients are advised to inform their artist during consultation of any
                        relevant skin conditions, allergies, or medical factors that may affect the
                        tattoo procedure or healing.
                      </p>
                    </div>

                    <div className="card-base p-5">
                      <div className="flex items-center gap-2 mb-2 text-text-primary">
                        <Ban size={16} />
                        <h3 className="font-display text-base">Sobriety Policy</h3>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        Clients must not arrive under the influence of alcohol or drugs. The studio
                        reserves the right to decline or postpone sessions if a client is impaired.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-text-secondary pt-2">
                    Clients are encouraged to be well-rested, eat beforehand, stay hydrated, and
                    wear comfortable clothing that allows easy access to the tattoo placement area.
                  </p>
                </div>
              </motion.section>

              {/* 5. Pricing, Bookings & Scheduling */}
              <motion.section
                id="booking-pricing"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 scroll-mt-32 border-t border-border pt-10"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-background text-xs font-display flex items-center justify-center">
                    05
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    Pricing, Bookings & Scheduling
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <div className="space-y-3">
                    <div className="card-base p-4">
                      <h4 className="font-display text-base text-text-primary mb-1">
                        Pricing Estimates Are Informational
                      </h4>
                      <p className="text-xs text-text-secondary">
                        Tattoo pricing depends on factors such as size, placement, level of detail,
                        and style complexity. Any estimates provided via the website, chatbot, or
                        preliminary WhatsApp messages are general estimates. Final pricing is
                        determined during direct consultation with the artist.
                      </p>
                    </div>

                    <div className="card-base p-4">
                      <h4 className="font-display text-base text-text-primary mb-1">
                        Studio Hours & Availability
                      </h4>
                      <p className="text-xs text-text-secondary">
                        Displayed studio operating hours ({CONTACT.hours}) are subject to artist
                        schedules. Booking or contacting in advance via WhatsApp or phone is
                        strongly recommended to confirm artist availability.
                      </p>
                    </div>

                    <div className="card-base p-4">
                      <h4 className="font-display text-base text-text-primary mb-1">
                        Rescheduling & Cancellations
                      </h4>
                      <p className="text-xs text-text-secondary">
                        Because artists reserve dedicated session time for appointments, please
                        notify the studio as early as possible via WhatsApp or phone if you need to
                        reschedule or cancel your session.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 6. Custom Artwork & Photography */}
              <motion.section
                id="intellectual-property"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 scroll-mt-32 border-t border-border pt-10"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-background text-xs font-display flex items-center justify-center">
                    06
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    Custom Artwork & Portfolio Photography
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    <strong>Artistic Rights:</strong> Original artwork, flash designs, and portfolio
                    imagery displayed on this website remain the intellectual property of Samava
                    Tattoo Studio and its artists.
                  </p>
                  <div className="card-base p-4 flex items-start gap-3">
                    <Camera size={18} className="text-text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-base text-text-primary mb-1">
                        Portfolio Photography
                      </h4>
                      <p className="text-xs text-text-secondary">
                        Tattoos completed at the studio may be photographed for studio portfolio
                        documentation and social media showcase with client consent.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 7. Aftercare & Healing Guidance */}
              <motion.section
                id="aftercare-healing"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 scroll-mt-32 border-t border-border pt-10"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-background text-xs font-display flex items-center justify-center">
                    07
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    Aftercare & Healing Guidance
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    Your artist will provide aftercare instructions specific to your tattoo.
                    Following these instructions is essential for proper healing.
                  </p>
                  <div className="card-base p-5 bg-surface/80">
                    <p className="text-xs text-text-secondary leading-relaxed">
                      <strong>Healing Disclaimer:</strong> Once you leave the studio, healing
                      depends entirely on individual aftercare adherence, skin physiology, and
                      environmental factors. Samava Tattoo Studio is not responsible for adverse
                      healing outcomes resulting from failure to follow aftercare guidance.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* 8. Studio Hygiene & Standards */}
              <motion.section
                id="hygiene-standards"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 scroll-mt-32 border-t border-border pt-10"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-background text-xs font-display flex items-center justify-center">
                    08
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    Studio Hygiene & Standards
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    Tattooing services at Samava Tattoo Studio are performed by professional artists
                    utilizing studio hygiene and equipment sanitization practices. Clients are
                    welcome to discuss any questions regarding setup or hygiene procedures directly
                    with their artist during consultation.
                  </p>
                </div>
              </motion.section>

              {/* 9. Website & Chatbot Disclaimer */}
              <motion.section
                id="website-disclaimer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 scroll-mt-32 border-t border-border pt-10"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-background text-xs font-display flex items-center justify-center">
                    09
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    Website & Chatbot Disclaimer
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <div className="card-base p-4 flex items-start gap-3">
                    <HelpCircle size={18} className="text-text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-base text-text-primary mb-1">
                        Informational Assistant
                      </h4>
                      <p className="text-xs text-text-secondary">
                        The digital assistant (&ldquo;Samava&rdquo;) is an automated client-side
                        guide intended solely for general exploratory information. All actual
                        commitments, appointments, design feasibility, and pricing quotes must be
                        confirmed directly with the studio.
                      </p>
                    </div>
                  </div>
                  <p>
                    Website content, artist details, and gallery items are provided for reference.
                    While we strive for accuracy, content is provided on an &ldquo;as is&rdquo;
                    basis.
                  </p>
                </div>
              </motion.section>

              {/* 10. Governing Law & Contact */}
              <motion.section
                id="governing-law"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6 scroll-mt-32 border-t border-border pt-10"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-background text-xs font-display flex items-center justify-center">
                    10
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    Governing Law & Studio Inquiries
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    These Terms are governed by the laws of India, and any disputes shall be
                    subject to the jurisdiction of the courts in Hyderabad, Telangana, India.
                  </p>
                </div>

                <div className="card-base p-6 md:p-8 bg-surface mt-2">
                  <h3 className="font-display text-xl mb-4">Samava Tattoo Studio</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-text-secondary">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary uppercase tracking-wider mb-1">
                          Location
                        </p>
                        <p>{CONTACT.address.name}</p>
                        <p>{CONTACT.address.street}, {CONTACT.address.city}</p>
                        <p>{CONTACT.address.state}, {CONTACT.address.country}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail size={16} className="text-text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary uppercase tracking-wider mb-1">
                          Email
                        </p>
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="text-text-primary hover:underline"
                        >
                          {CONTACT.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone size={16} className="text-text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary uppercase tracking-wider mb-1">
                          Phone & WhatsApp
                        </p>
                        <a
                          href={`tel:${CONTACT.phoneFormatted}`}
                          className="text-text-primary hover:underline"
                        >
                          {CONTACT.phone}
                        </a>
                        <p className="text-text-muted mt-1">Daily: {CONTACT.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            </article>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
