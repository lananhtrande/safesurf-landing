import { MapPin, Phone, Bot, Activity, Clock, Users, ArrowRight, Smartphone } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Localização Ultra-Precisa",
    description: "A app emite sinal em intervalos de milissegundos para rastreamento em tempo real com precisão extrema.",
    color: "blue",
    size: "large",
  },
  {
    icon: Phone,
    title: "Emergência Instantânea",
    description: "Botão SOS na app que aciona imediatamente o sistema de resgate com um toque.",
    color: "red",
    size: "small",
  },
  {
    icon: Bot,
    title: "IA para Resgate",
    description: "Inteligência artificial que identifica e contacta as entidades de resgate mais próximas.",
    color: "cyan",
    size: "small",
  },
  {
    icon: Users,
    title: "Alerta Comunitário",
    description: "A comunidade próxima é alertada primeiro, permitindo resposta imediata enquanto o resgate profissional é acionado.",
    color: "green",
    size: "medium",
  },
  {
    icon: Activity,
    title: "Performance em Tempo Real",
    description: "Monitorização completa de métricas do atleta: batimentos, velocidade, altitude e muito mais.",
    color: "purple",
    size: "medium",
  },
  {
    icon: Clock,
    title: "Histórico Completo",
    description: "Registo detalhado de todas as sessões com análise de performance.",
    color: "orange",
    size: "small",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  blue: {
    bg: "bg-blue-500/8",
    text: "text-blue-600",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
  },
  red: {
    bg: "bg-red-500/8",
    text: "text-red-500",
    border: "border-red-500/20",
    glow: "group-hover:shadow-red-500/10",
  },
  cyan: {
    bg: "bg-cyan-500/8",
    text: "text-cyan-600",
    border: "border-cyan-500/20",
    glow: "group-hover:shadow-cyan-500/10",
  },
  green: {
    bg: "bg-green-500/8",
    text: "text-green-600",
    border: "border-green-500/20",
    glow: "group-hover:shadow-green-500/10",
  },
  purple: {
    bg: "bg-purple-500/8",
    text: "text-purple-600",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/10",
  },
  orange: {
    bg: "bg-orange-500/8",
    text: "text-orange-500",
    border: "border-orange-500/20",
    glow: "group-hover:shadow-orange-500/10",
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 relative">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb orb-blue w-[500px] h-[500px] top-0 right-0 opacity-40" />
        <div className="gradient-orb orb-cyan w-[400px] h-[400px] bottom-0 left-0 opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="badge badge-accent mb-4">
            <Smartphone className="h-3.5 w-3.5" />
            Funcionalidades da App
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 mb-4 tracking-tight">
            Tudo o que precisas para te
            <br />
            <span className="gradient-text">sentires seguro</span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto text-balance">
            Uma app poderosa com tecnologia de ponta, desenhada para garantir a tua segurança em qualquer situação.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            const isLarge = feature.size === "large";
            const isMedium = feature.size === "medium";

            return (
              <div
                key={index}
                className={`
                  group glass-card rounded-3xl p-6 sm:p-8 cursor-pointer
                  transition-all duration-300
                  hover:shadow-xl ${colors.glow}
                  ${isLarge ? "lg:col-span-2 lg:row-span-1" : ""}
                  ${isMedium ? "md:col-span-1" : ""}
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    inline-flex p-3 rounded-2xl ${colors.bg} ${colors.border} border
                    mb-5 group-hover:scale-110 transition-transform duration-300
                  `}
                >
                  <feature.icon className={`h-6 w-6 ${colors.text}`} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Learn more link */}
                <div className={`
                  inline-flex items-center gap-1.5 text-sm font-medium ${colors.text}
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `}>
                  <span>Saber mais</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-neutral-300" />
            <span className="text-sm text-neutral-400">E muito mais por vir</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-neutral-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
