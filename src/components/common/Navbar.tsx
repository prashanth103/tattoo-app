import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const links = [
  { label: "Home", to: "/" },
  { label: "Artists", to: "/artists" },
  { label: "Gallery", to: "/gallery" },
  { label: "Styles", to: "/styles" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-width section-padding flex items-center justify-between h-20 md:h-24">
        <NavLink to="/" className="font-display text-2xl tracking-tight text-text-primary">
          <span className="italic">Samava </span>Tattoo Studio
        </NavLink>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `font-body text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 ${
                  isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary" className="!px-6 !py-3 !text-[12px]">
            Book a Session
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-text-primary"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-3xl py-3 border-b border-border ${
                      isActive ? "text-text-primary" : "text-text-secondary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-6">
                <Button
                  to="/artists"
                  variant="primary"
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  Book a Session
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
