import { ArrowRight, Sparkles, Building2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Partners() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Main Partnership CTA */}
        <div className="glass-card rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-500">
          <div className="relative p-8 sm:p-12 md:p-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <span className="badge badge-accent mb-4">
                  <Handshake className="h-3.5 w-3.5" />
                  Parcerias
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 mb-4 tracking-tight">
                  Junte-se aos nossos
                  <br />
                  <span className="gradient-text">Parceiros</span>
                </h2>
                <p className="text-neutral-600 mb-6 text-balance">
                  Alcança milhares de atletas e entusiastas de desportos
                  aquáticos. Faça parte da revolução na segurança desportiva.
                </p>
                <Button className="glass-button text-white rounded-xl px-6 py-5 flex items-center gap-2">
                  <span>Tornar-se Parceiro</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Partner cards */}
              <div className="grid grid-cols-2 gap-3">
                <PartnerCard
                  icon={<Building2 className="h-5 w-5 text-blue-500" />}
                  title="Marcas Premium"
                  description="Visibilidade exclusiva para marcas de desporto e lifestyle."
                />
                <PartnerCard
                  icon={<Sparkles className="h-5 w-5 text-cyan-500" />}
                  title="Inovadores"
                  description="Integração com tecnologias e produtos inovadores."
                />
                <PartnerCard
                  icon={<Handshake className="h-5 w-5 text-green-500" />}
                  title="Comunidades"
                  description="Parcerias com clubes e associações desportivas."
                />
                <PartnerCard
                  icon={<Building2 className="h-5 w-5 text-purple-500" />}
                  title="Instituições"
                  description="Colaboração com entidades de resgate e segurança."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-400 mb-6">
            Apoiado por organizações de confiança
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {/* Placeholder logos - these would be replaced with actual partner logos */}
            {["ISN", "Cruz Vermelha", "Capitanias", "IPMA", "INEM"].map(
              (name) => (
                <div
                  key={name}
                  className="px-4 py-2 text-neutral-400 font-semibold tracking-wider text-sm"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-subtle rounded-2xl p-4 hover:bg-white/60 transition-colors">
      <div className="mb-2">{icon}</div>
      <h4 className="font-semibold text-neutral-800 text-sm mb-1">{title}</h4>
      <p className="text-xs text-neutral-500 leading-relaxed">{description}</p>
    </div>
  );
}
