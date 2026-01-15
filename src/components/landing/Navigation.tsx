import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Performance", href: "#performance" },
  { label: "Mapa Live", href: "#map" },
  { label: "Contacto", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
      <div className="max-w-5xl mx-auto">
        <div
          className={`
            rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between
            transition-all duration-500 ease-out
            ${
              scrolled
                ? "glass shadow-lg shadow-black/[0.03]"
                : "bg-transparent border border-transparent"
            }
          `}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              {/* Glow effect */}
              <div
                className={`
                  absolute inset-0 rounded-xl blur-xl transition-opacity duration-300
                  bg-gradient-to-br from-blue-400 to-blue-600
                  ${scrolled ? "opacity-30" : "opacity-20"}
                  group-hover:opacity-50
                `}
              />
              {/* Icon container */}
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-2 shadow-sm">
                <Shield className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-lg font-semibold tracking-tight text-neutral-800">
              Safe<span className="text-blue-600">Surf</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative px-4 py-2 text-sm font-medium text-neutral-600
                  rounded-xl transition-all duration-200
                  hover:text-neutral-900 hover:bg-black/[0.03]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {/* <Button
              variant="ghost"
              className="
                text-neutral-600 hover:text-neutral-900 hover:bg-black/[0.03]
                rounded-xl px-4 h-9 text-sm font-medium
              "
            >
              Entrar
            </Button> */}
            <Button
              className="
                glass-button text-white rounded-xl px-5 h-9 text-sm font-medium
                flex items-center gap-1.5
              "
            >
              Começar
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden p-2 rounded-xl transition-colors duration-200
              hover:bg-black/[0.03] focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-blue-500/30
            "
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-neutral-600" />
            ) : (
              <Menu className="h-5 w-5 text-neutral-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${isOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
          `}
        >
          <div className="glass rounded-2xl p-3 shadow-lg shadow-black/[0.03]">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    px-4 py-3 text-sm font-medium text-neutral-600
                    rounded-xl transition-colors duration-200
                    hover:text-neutral-900 hover:bg-black/[0.03]
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="h-px bg-black/[0.04] my-2" />
            <div className="flex flex-col gap-2 pt-1">
              <Button
                variant="ghost"
                className="
                  justify-start text-neutral-600 hover:text-neutral-900
                  hover:bg-black/[0.03] rounded-xl h-10
                "
              >
                Entrar
              </Button>
              <Button
                className="
                  glass-button text-white rounded-xl h-10
                  flex items-center justify-center gap-1.5
                "
              >
                Começar
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
