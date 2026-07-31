import { Link } from "react-router-dom";

const socials = [
  {
    label: "Instagram",
    href: "#",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm5.75-.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
  },
  {
    label: "X",
    href: "#",
    path: "M4 4l16 16M20 4L4 20",
  },
  {
    label: "Pinterest",
    href: "#",
    path: "M12 2a10 10 0 0 0-3.64 19.32c-.05-.82-.09-2.08.02-2.98.1-.8.65-5.13.65-5.13s-.17-.33-.17-.82c0-.77.45-1.35 1-1.35.47 0 .7.35.7.78 0 .47-.3 1.18-.46 1.84-.13.55.28 1 .82 1 .98 0 1.74-1.03 1.74-2.53 0-1.32-.95-2.25-2.3-2.25-1.57 0-2.49 1.18-2.49 2.4 0 .47.18.98.41 1.26a.16.16 0 0 1 .04.16c-.04.18-.14.55-.16.63-.03.1-.1.13-.22.08-.83-.39-1.35-1.6-1.35-2.58 0-2.1 1.53-4.03 4.4-4.03 2.3 0 4.1 1.64 4.1 3.84 0 2.3-1.45 4.14-3.45 4.14-.67 0-1.31-.35-1.52-.76l-.42 1.58c-.15.58-.55 1.3-.82 1.74A10 10 0 1 0 12 2Z",
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
            A curated marketplace connecting collectors with the world's most
            considered tattoo artists — by studio, by style, by hand.
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
          <Link to="/styles" className="text-sm text-white/70 hover:text-white transition-colors">Categories</Link>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="eyebrow text-white/40">Studio</span>
          <Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">About</Link>
          <Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</Link>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Careers</a>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="eyebrow text-white/40">Studio Hours</span>
          <p className="text-sm text-white/70 leading-relaxed">
            Monday – Saturday<br />10:00 — 19:00
          </p>
          <p className="text-sm text-white/70">samavatattoostudio@gmail.com</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-width section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 font-body">
            © {new Date().getFullYear()} Samava Tattoo Studio. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-body">Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
}
