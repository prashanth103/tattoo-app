import { useState } from "react";
import { CONTACT } from "@/constants/contact";
import { Mail, MapPin, Phone } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import Button from "@/components/common/Button";
import SEO from "@/components/common/SEO";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (field: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hi Samava Tattoo Studio,

Name: ${form.name}
Email: ${form.email}

Message: ${form.message}`;

    const whatsappUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");

    setSent(true);
  };

  return (
    <MainLayout>
      <SEO
        title="Contact"
        description="Book your tattoo consultation or visit Samava Tattoo Studio in Hyderabad."
        url="https://samavatattoo.com/contact"
      />

      <PageTransition>
        <section className="section-padding pt-36 pb-16">
          <div className="container-width">
            <span className="eyebrow mb-6 inline-block">Get in Touch</span>
            <h1 className="page-title max-w-3xl">Let's start a conversation.</h1>
            <p className="subtitle mt-6">
              Have a tattoo idea or a question? Send us a message and we'll get back to you as soon
              as possible.
            </p>
          </div>
        </section>

        <section className="section-padding pb-24 md:pb-32">
          <div className="container-width grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="flex items-start gap-4">
                <Mail size={18} strokeWidth={1.5} className="mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-text-muted font-body uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p className="font-display text-xl">{CONTACT.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} strokeWidth={1.5} className="mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-text-muted font-body uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <p className="font-display text-xl">{CONTACT.phoneFormatted}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} strokeWidth={1.5} className="mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-text-muted font-body uppercase tracking-widest mb-1">
                    Studio
                  </p>
                  <p className="font-display text-xl">
                    {CONTACT.address.name}
                    <br />
                    {CONTACT.address.street}
                    <br />
                    {CONTACT.address.city}
                    <br />
                    {CONTACT.address.state}
                    <br />
                    {CONTACT.address.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {sent ? (
                <div className="card-base p-12 text-center">
                  <h2 className="font-display text-2xl mb-2">Message sent.</h2>
                  <p className="text-text-secondary font-body text-sm">
                    Thanks, {form.name || "friend"} — we'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-text-muted font-body uppercase tracking-widest">
                        Name
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="bg-transparent border-b border-border pb-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-text-muted font-body uppercase tracking-widest">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="bg-transparent border-b border-border pb-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-text-muted font-body uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-transparent border-b border-border pb-3 font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your tattoo idea, preferred style, placement, or any questions you have..."
                    />
                  </div>
                  <Button type="submit" variant="primary" className="self-start mt-2">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
