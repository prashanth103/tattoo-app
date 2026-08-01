import { Link } from "react-router-dom";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/samavatattoostudios",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm5.75-.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
  },
  {
    label: "X",
    href: "#",
    path: "M4 4l16 16M20 4L4 20",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-background">
      <div className="container-width section-padding py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 flex flex-col gap-6">
          <span className="font-display text-3xl tracking-tight">
            <span className="italic">Samava </span>Tattoo Studio
          </span>
          <p className="font-body text-sm font-light text-white/60 leading-relaxed max-w-sm">
            Custom tattoos and personal designs, created at Samava Tattoo Studio in Madhapur, Hyderabad.
          </p>
          <div className="flex items-center gap-4 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="eyebrow text-white/40">Explore</span>
          <Link to="/artists" className="text-sm text-white/70 hover:text-white transition-colors">Artists</Link>
          <Link to="/gallery" className="text-sm text-white/70 hover:text-white transition-colors">Gallery</Link>
          <Link to="/styles" className="text-sm text-white/70 hover:text-white transition-colors">Styles</Link>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="eyebrow text-white/40">Studio</span>
          <Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">About</Link>
          <Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</Link>
          <a href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Book a Tattoo</a>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="eyebrow text-white/40">VISIT US</span>
          <p className="text-sm text-white/70 leading-relaxed">
            Madhapur, Hyderabad
          </p>
          <span className="eyebrow text-white/40">OPEN DAILY</span>
          <p className="text-sm text-white/70 leading-relaxed">
            10:30 AM — 9:30 PM
          </p>
          <span className="eyebrow text-white/40">Contact</span>
          <p className="text-sm text-white/70">+91 93986 67751</p>
          <p className="text-sm text-white/70">samavatattoostudio@gmail.com</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-width section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 font-body">
            © {new Date().getFullYear()} Samava Tattoo Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
