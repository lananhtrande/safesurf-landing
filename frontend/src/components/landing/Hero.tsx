import { Button } from "@/components/ui/button";
import { Shield, Play, Sparkles, Zap, Clock, Smartphone, Apple } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="gradient-orb orb-blue w-[600px] h-[600px] -top-40 -left-40 animate-float-slow"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="gradient-orb orb-cyan w-[500px] h-[500px] top-1/4 -right-32 animate-float-slow"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="gradient-orb orb-indigo w-[400px] h-[400px] bottom-0 left-1/3 animate-float-slow"
          style={{ animationDelay: "-10s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <div className="text-center lg:text-left">
            {/* Announcement badge */}
            <div className="inline-flex items-center gap-2 glass-subtle rounded-full px-4 py-2 mb-6 animate-fade-in-up opacity-0">
              <Smartphone className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-neutral-700">
                App Disponível para iOS e Android
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight animate-fade-in-up opacity-0 stagger-1">
              <span className="text-neutral-800">Segurança ao</span>
              <br />
              <span className="gradient-text-animated">Milésimo Segundo</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-neutral-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up opacity-0 stagger-2 text-balance">
              A app que te protege em tempo real. Localização precisa, emergência instantânea e resgate inteligente com IA.
              <span className="font-semibold text-blue-600"> SafeSurf</span> — porque cada segundo conta.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 animate-fade-in-up opacity-0 stagger-3">
              <Button
                className="
                  glass-button text-white px-6 sm:px-8 py-6 text-base rounded-2xl
                  flex items-center gap-2 shadow-lg
                "
              >
                <Shield className="h-5 w-5" />
                <span>Download Gratuito</span>
              </Button>
              <Button
                className="
                  glass-button-secondary px-6 sm:px-8 py-6 text-base rounded-2xl
                  flex items-center gap-2 text-neutral-700
                "
              >
                <Play className="h-4 w-4" />
                <span>Ver Demo</span>
              </Button>
            </div>

            {/* App store badges */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0 stagger-4">
              <a href="#" className="glass-subtle rounded-xl px-4 py-2.5 flex items-center gap-2 hover:bg-white/70 transition-colors">
                <Apple className="h-5 w-5 text-neutral-800" />
                <div className="text-left">
                  <div className="text-[10px] text-neutral-500 leading-none">Disponível na</div>
                  <div className="text-sm font-semibold text-neutral-800 leading-tight">App Store</div>
                </div>
              </a>
              <a href="#" className="glass-subtle rounded-xl px-4 py-2.5 flex items-center gap-2 hover:bg-white/70 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-neutral-500 leading-none">Disponível no</div>
                  <div className="text-sm font-semibold text-neutral-800 leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up opacity-0 stagger-3">
            {/* Phone frame */}
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl scale-150" />

              {/* Phone mockup */}
              <div className="relative glass-card rounded-[3rem] p-3 shadow-2xl shadow-blue-500/10">
                <div className="bg-neutral-900 rounded-[2.5rem] p-2 w-[280px] sm:w-[300px]">
                  {/* Screen */}
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-[2rem] h-[500px] sm:h-[560px] relative overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-6 pt-4 text-white/90 text-xs">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-white/90 rounded-sm">
                          <div className="w-3 h-1.5 bg-white/90 rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* App content preview */}
                    <div className="p-6 pt-8">
                      {/* Logo */}
                      <div className="flex items-center gap-2 mb-8">
                        <div className="bg-white/20 backdrop-blur rounded-xl p-2">
                          <Shield className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-white font-semibold">SafeSurf</span>
                      </div>

                      {/* Status card */}
                      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white/80 text-sm">Estado</span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-green-300 text-sm font-medium">Protegido</span>
                          </span>
                        </div>
                        <div className="text-white text-2xl font-bold">24/7 Ativo</div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-3">
                          <div className="text-white/70 text-xs mb-1">BPM</div>
                          <div className="text-white text-xl font-bold">142</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-3">
                          <div className="text-white/70 text-xs mb-1">Velocidade</div>
                          <div className="text-white text-xl font-bold">24.5 <span className="text-sm">km/h</span></div>
                        </div>
                      </div>

                      {/* Emergency button */}
                      <div className="mt-6">
                        <div className="bg-red-500/80 backdrop-blur rounded-2xl p-4 text-center">
                          <span className="text-white font-semibold">SOS Emergência</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic island */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-16 animate-fade-in-up opacity-0 stagger-5">
          <StatCard
            icon={<Zap className="h-5 w-5 text-blue-500" />}
            value="0.001s"
            label="Precisão de Localização"
          />
          <StatCard
            icon={<Sparkles className="h-5 w-5 text-cyan-500" />}
            value="24/7"
            label="Monitorização Contínua"
          />
          <StatCard
            icon={<Clock className="h-5 w-5 text-indigo-500" />}
            value="50K+"
            label="Atletas Protegidos"
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafaf9] to-transparent pointer-events-none" />
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="glass-card rounded-2xl p-5 group cursor-default">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="p-2 rounded-xl bg-black/[0.03] group-hover:bg-black/[0.05] transition-colors">
          {icon}
        </div>
        <span className="text-2xl sm:text-3xl font-bold text-neutral-800">{value}</span>
      </div>
      <p className="text-neutral-600 text-sm text-center">{label}</p>
    </div>
  );
}
