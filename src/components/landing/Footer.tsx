import {
  Shield,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Apple,
  Smartphone,
} from "lucide-react";

const footerLinks = {
  produto: [
    { label: "Funcionalidades", href: "#features" },
    { label: "Performance", href: "#performance" },
    { label: "Preços", href: "#pricing" },
    { label: "Download", href: "#download" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#about" },
    { label: "Carreiras", href: "#careers" },
    { label: "Blog", href: "#blog" },
    { label: "Imprensa", href: "#press" },
  ],
  suporte: [
    { label: "Centro de Ajuda", href: "#help" },
    { label: "Contacto", href: "#contact" },
    { label: "Política de Privacidade", href: "#privacy" },
    { label: "Termos de Serviço", href: "#terms" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative pt-24 pb-8 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb orb-blue w-[500px] h-[500px] -bottom-64 -left-32 opacity-30" />
        <div className="gradient-orb orb-cyan w-[400px] h-[400px] -bottom-48 -right-32 opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* CTA Section */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center mb-16 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass-subtle rounded-full px-3 py-1.5 mb-4">
              <Smartphone className="h-3.5 w-3.5 text-blue-500" />
              <span className="text-xs font-medium text-neutral-600">
                Disponível para iOS e Android
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 mb-4 tracking-tight">
              Pronto para te sentires
              <br />
              <span className="gradient-text">mais seguro</span>?
            </h2>
            <p className="text-neutral-600 text-lg mb-8 max-w-xl mx-auto text-balance">
              Faz download da app e junta-te a milhares de atletas que já
              confiam no SafeSurf.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#"
                className="glass-subtle rounded-xl px-5 py-3 flex items-center gap-3 hover:bg-white/70 transition-colors"
              >
                <Apple className="h-6 w-6 text-neutral-800" />
                <div className="text-left">
                  <div className="text-[10px] text-neutral-500 leading-none">
                    Disponível na
                  </div>
                  <div className="text-sm font-semibold text-neutral-800 leading-tight">
                    App Store
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="glass-subtle rounded-xl px-5 py-3 flex items-center gap-3 hover:bg-white/70 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-neutral-500 leading-none">
                    Disponível no
                  </div>
                  <div className="text-sm font-semibold text-neutral-800 leading-tight">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-2">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-neutral-800">
                Safe<span className="text-blue-600">Surf</span>
              </span>
            </a>
            <p className="text-neutral-600 mb-6 text-sm leading-relaxed max-w-xs">
              Segurança ao milésimo segundo. Proteção inteligente para atletas
              em todo o mundo.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@safesurf.pt"
                className="flex items-center gap-2.5 text-neutral-600 hover:text-blue-600 transition-colors text-sm"
              >
                <div className="p-1.5 rounded-lg bg-neutral-100">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span>info@safesurf.pt</span>
              </a>
              <a
                href="tel:+351912345678"
                className="flex items-center gap-2.5 text-neutral-600 hover:text-blue-600 transition-colors text-sm"
              >
                <div className="p-1.5 rounded-lg bg-neutral-100">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span>+351 912 345 678</span>
              </a>
              <div className="flex items-center gap-2.5 text-neutral-600 text-sm">
                <div className="p-1.5 rounded-lg bg-neutral-100">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span>Lisboa, Portugal</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-neutral-800 mb-4 text-sm">
              Produto
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.produto.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-800 mb-4 text-sm">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-800 mb-4 text-sm">
              Suporte
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.suporte.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; 2026 SafeSurf. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="
                  glass-subtle p-2.5 rounded-xl
                  hover:bg-white/80 hover:shadow-md
                  transition-all duration-200
                "
              >
                <social.icon className="h-4 w-4 text-neutral-600" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
