import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  MessageSquare,
  HardDrive,
  EyeOff,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Clock,
} from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import SEO from "@/components/common/SEO";
import { CONTACT } from "@/constants/contact";

export default function PrivacyPolicy() {
  const lastUpdated = "August 2026";

  const sections = [
    { id: "overview", label: "1. Overview & Scope" },
    { id: "data-collection", label: "2. Information You Provide" },
    { id: "chatbot-storage", label: "3. Chatbot & Local Storage" },
    { id: "what-we-dont-collect", label: "4. What We Do Not Collect" },
    { id: "how-we-use-info", label: "5. How Information Is Used" },
    { id: "third-party-services", label: "6. External Platforms" },
    { id: "data-security", label: "7. Security & Transport" },
    { id: "your-choices", label: "8. Your Rights & Choices" },
    { id: "contact-info", label: "9. Studio Contact Details" },
  ];

  return (
    <MainLayout>
      <SEO
        title="Privacy Policy"
        description="Learn how Samava Tattoo Studio handles your information, consultation inquiries, WhatsApp communications, and local chatbot data."
        url="https://samavatattoo.com/privacy-policy"
      />

      <PageTransition>
        {/* Hero Section */}
        <section className="section-padding pt-36 pb-16 border-b border-border bg-surface/50">
          <div className="container-width">
            <span className="eyebrow mb-6 inline-block">Legal & Transparency</span>
            <h1 className="page-title max-w-4xl">Privacy Policy</h1>
            <p className="subtitle mt-6 max-w-2xl">
              We value clarity and transparency. This policy outlines how information is handled
              when you browse our website, interact with our on-site assistant, or contact us to
              discuss a tattoo.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-border/80 text-xs font-body text-text-muted uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-text-primary" />
                Last Updated: {lastUpdated}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-text-primary" />
                Samava Tattoo Studio · Madhapur, Hyderabad
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
                Table of Contents
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
                <p className="text-xs text-text-muted font-body mb-3">Looking for terms?</p>
                <Link
                  to="/terms-and-conditions"
                  className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-text-primary underline hover:opacity-80 transition-opacity"
                >
                  View Terms & Conditions →
                </Link>
              </div>
            </aside>

            {/* Main Policy Content */}
            <article className="lg:col-span-8 flex flex-col gap-14">
              {/* 1. Overview & Scope */}
              <motion.section
                id="overview"
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
                    Overview & Scope
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    This Privacy Policy applies to <strong>Samava Tattoo Studio</strong> (&ldquo;we&rdquo;,
                    &ldquo;our&rdquo;, or &ldquo;us&rdquo;), located in Madhapur, Hyderabad, Telangana, India,
                    and describes the privacy practices relating to our website (
                    <a
                      href="https://samavatattoo.com"
                      className="text-text-primary underline"
                    >
                      samavatattoo.com
                    </a>
                    ), our client-side interactive assistant, and direct communication channels.
                  </p>
                  <p>
                    This website is designed as a client-side portfolio and informational showcase.
                    We do not operate backend user accounts, databases, or online payment gateways
                    on this site.
                  </p>
                </div>
              </motion.section>

              {/* 2. Information You Voluntarily Provide */}
              <motion.section
                id="data-collection"
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
                    Information You Voluntarily Provide
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    The website does not include functionality designed to automatically collect
                    sensitive personal information. Information you choose to provide through our
                    contact form or external communication channels may contain personal details:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                    <div className="card-base p-5">
                      <div className="flex items-center gap-2 mb-2 text-text-primary">
                        <MessageSquare size={16} />
                        <h3 className="font-display text-base">Contact Form</h3>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        When you use our website contact form, the fields you fill (name, email
                        address, and message) are formatted client-side into a pre-filled WhatsApp
                        chat message link to connect you directly with our studio team.
                      </p>
                    </div>

                    <div className="card-base p-5">
                      <div className="flex items-center gap-2 mb-2 text-text-primary">
                        <Lock size={16} />
                        <h3 className="font-display text-base">Direct Channels</h3>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        When contacting us via WhatsApp, phone, or direct email, you may choose to
                        share reference images, design ideas, placement details, or photos of
                        existing tattoos (for cover-up discussions).
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 3. Chatbot & Local Storage */}
              <motion.section
                id="chatbot-storage"
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
                    On-Site Chatbot & Local Browser Storage
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    Our website includes an automated client-side assistant (&ldquo;Samava&rdquo;)
                    to answer common questions about styles, studio hours, location, and consultation
                    steps.
                  </p>
                  <div className="card-base p-6 bg-surface/80 border-l-2 border-l-primary">
                    <div className="flex items-start gap-3">
                      <HardDrive size={18} className="text-text-primary shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <h4 className="font-display text-base text-text-primary">
                          How Chatbot History Works
                        </h4>
                        <ul className="space-y-1.5 text-xs text-text-secondary">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-text-primary shrink-0 mt-0.5" />
                            <span>
                              Chat history is saved <strong>strictly on your device</strong> in
                              your browser&rsquo;s local storage under the key{" "}
                              <code className="bg-background px-1.5 py-0.5 rounded border border-border text-text-primary font-mono text-[11px]">
                                samava-chatbot-history
                              </code>
                              .
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-text-primary shrink-0 mt-0.5" />
                            <span>
                              Conversations are <strong>not sent to an external AI server or remote database</strong>.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-text-primary shrink-0 mt-0.5" />
                            <span>
                              You can clear this history at any time by clicking &ldquo;Clear
                              Chat&rdquo; inside the chatbot window or by clearing your
                              browser&rsquo;s cache/storage.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 4. What We Do NOT Collect */}
              <motion.section
                id="what-we-dont-collect"
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
                    What This Application Does Not Do
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    Based on the actual implementation of this website, please note:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <li className="flex items-start gap-2.5 p-3 rounded-card border border-border bg-background">
                      <EyeOff size={15} className="text-text-primary shrink-0 mt-0.5" />
                      <span className="text-xs">
                        <strong>No Online Payment Processing:</strong> The application does not collect
                        credit card details, banking credentials, or process payments online.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 p-3 rounded-card border border-border bg-background">
                      <EyeOff size={15} className="text-text-primary shrink-0 mt-0.5" />
                      <span className="text-xs">
                        <strong>No User Accounts:</strong> The site does not require or feature user
                        registration, profiles, or login credentials.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 p-3 rounded-card border border-border bg-background">
                      <EyeOff size={15} className="text-text-primary shrink-0 mt-0.5" />
                      <span className="text-xs">
                        <strong>No Advertising Trackers:</strong> We do not deploy third-party
                        ad-tracking networks or behavioral profiling scripts on this website.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 p-3 rounded-card border border-border bg-background">
                      <EyeOff size={15} className="text-text-primary shrink-0 mt-0.5" />
                      <span className="text-xs">
                        <strong>Client-Side Gallery Filtering:</strong> Portfolio search and style
                        filters run locally in your browser without transmitting search terms to a
                        server.
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              {/* 5. How We Use Information */}
              <motion.section
                id="how-we-use-info"
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
                    How Information Is Used
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    Information shared when contacting the studio is used strictly for consultation
                    and customer service:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                    <li>
                      <strong>Consulting on Tattoo Concepts:</strong> Reviewing your ideas, style
                      preferences, scale, placement, and reference designs.
                    </li>
                    <li>
                      <strong>Estimates & Discussion:</strong> Providing custom pricing estimates
                      and answering questions about session planning.
                    </li>
                    <li>
                      <strong>Scheduling:</strong> Coordinating consultations and appointments at
                      our Madhapur studio.
                    </li>
                  </ul>
                </div>
              </motion.section>

              {/* 6. External Platforms */}
              <motion.section
                id="third-party-services"
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
                    External Platforms & Links
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    Our website links to external third-party services. When you click these links,
                    your interactions are governed by the respective platform&rsquo;s terms and
                    privacy policies:
                  </p>
                  <div className="space-y-3">
                    <div className="card-base p-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-display text-base text-text-primary">
                          WhatsApp (Meta Platforms)
                        </h4>
                        <ExternalLink size={14} className="text-text-muted" />
                      </div>
                      <p className="text-xs text-text-secondary">
                        Action buttons and the contact form link to WhatsApp (`wa.me`) to initiate
                        direct chats with the studio. Messages sent via WhatsApp are subject to
                        Meta/WhatsApp&rsquo;s privacy terms.
                      </p>
                    </div>

                    <div className="card-base p-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-display text-base text-text-primary">
                          Google Maps & Google Reviews
                        </h4>
                        <ExternalLink size={14} className="text-text-muted" />
                      </div>
                      <p className="text-xs text-text-secondary">
                        Links to view studio directions or read/submit reviews redirect to Google
                        services.
                      </p>
                    </div>

                    <div className="card-base p-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-display text-base text-text-primary">
                          Instagram (@samavatattoostudios)
                        </h4>
                        <ExternalLink size={14} className="text-text-muted" />
                      </div>
                      <p className="text-xs text-text-secondary">
                        Links to our social media showcase redirect to Instagram.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 7. Security & Transport */}
              <motion.section
                id="data-security"
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
                    Security & Transport Encryption
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <p>
                    When the website is accessed over HTTPS, information transmitted between your
                    browser and the website is protected using standard transport encryption
                    provided by the hosting environment.
                  </p>
                  <p>
                    We do not sell, rent, or trade personal contact details or design materials
                    shared with our studio to third-party commercial marketing brokers.
                  </p>
                </div>
              </motion.section>

              {/* 8. Your Rights & Choices */}
              <motion.section
                id="your-choices"
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
                    Your Rights & Choices
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-text-secondary font-body font-light leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                    <li>
                      <strong>Clear Local Chat History:</strong> You can clear chatbot conversation
                      data from your browser anytime using the &ldquo;Clear Chat&rdquo; feature in
                      the assistant window or by resetting your browser site data.
                    </li>
                    <li>
                      <strong>Direct Inquiries:</strong> If you have contacted the studio via email
                      or WhatsApp and have questions regarding your correspondence records, you may
                      reach out directly to{" "}
                      <a href={`mailto:${CONTACT.email}`} className="text-text-primary underline">
                        {CONTACT.email}
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </motion.section>

              {/* 9. Contact Information */}
              <motion.section
                id="contact-info"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6 scroll-mt-32 border-t border-border pt-10"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-background text-xs font-display flex items-center justify-center">
                    09
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary">
                    Studio Contact Details
                  </h2>
                </div>
                <div className="card-base p-6 md:p-8 bg-surface">
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
