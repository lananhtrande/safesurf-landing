import LiveMap from "@/components/liveMap/liveMap";
import { MapPin, Radio, Wifi } from "lucide-react";

export default function LiveMapSection() {
  return (
    <section id="map" className="py-24 px-4 sm:px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 border border-dashed border-blue-200/40 rounded-full animate-pulse-soft" />
          <div className="absolute inset-12 border border-dashed border-blue-200/30 rounded-full animate-pulse-soft" style={{ animationDelay: "-1s" }} />
          <div className="absolute inset-24 border border-dashed border-blue-200/20 rounded-full animate-pulse-soft" style={{ animationDelay: "-2s" }} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="badge badge-accent mb-4">
            <Radio className="h-3.5 w-3.5" />
            Localização Live
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 mb-4 tracking-tight">
            Vê quem está
            <br />
            <span className="gradient-text">protegido agora</span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto text-balance">
            Mapa em tempo real com localização de todos os utilizadores ativos.
            Cada ponto representa um atleta protegido pelo SafeSurf.
          </p>
        </div>

        {/* Map container */}
        <div className="relative">
          {/* Map card */}
          <div className="glass-card rounded-3xl p-2 sm:p-3 overflow-hidden shadow-xl shadow-blue-500/5">
            {/* Live indicator */}
            <div className="absolute top-5 left-5 z-20 glass rounded-full px-3 py-1.5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-neutral-700">Live</span>
            </div>

            {/* Map component */}
            <div className="rounded-2xl overflow-hidden">
              <LiveMap />
            </div>
          </div>

          {/* Floating stats cards */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-lg px-4">
            <div className="grid grid-cols-3 gap-3">
              <StatBadge
                icon={<Wifi className="h-4 w-4 text-blue-500" />}
                value="2,847"
                label="Utilizadores Ativos"
              />
              <StatBadge
                icon={<MapPin className="h-4 w-4 text-cyan-500" />}
                value="15"
                label="Praias Monitorizadas"
              />
              <StatBadge
                icon={<Radio className="h-4 w-4 text-green-500" />}
                value="99.9%"
                label="Uptime"
              />
            </div>
          </div>
        </div>

        {/* Spacer for floating stats */}
        <div className="h-16" />
      </div>
    </section>
  );
}

function StatBadge({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="glass rounded-2xl p-3 sm:p-4 text-center shadow-lg shadow-black/5">
      <div className="flex items-center justify-center gap-2 mb-1">
        {icon}
        <span className="text-lg sm:text-xl font-bold text-neutral-800">{value}</span>
      </div>
      <div className="text-xs text-neutral-500 truncate">{label}</div>
    </div>
  );
}
