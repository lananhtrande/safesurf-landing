import { Heart, Flame, TrendingUp, Gauge, Activity } from "lucide-react";

const metrics = [
  { label: "BPM", value: "142", unit: "bpm", icon: Heart, color: "text-red-500", bgColor: "bg-red-500/8" },
  { label: "Calorias", value: "847", unit: "kcal", icon: Flame, color: "text-orange-500", bgColor: "bg-orange-500/8" },
  { label: "Velocidade", value: "24.5", unit: "km/h", icon: Gauge, color: "text-blue-500", bgColor: "bg-blue-500/8" },
  { label: "VO2 Max", value: "52", unit: "ml/kg", icon: TrendingUp, color: "text-green-500", bgColor: "bg-green-500/8" },
];

export default function LivePerformance() {
  return (
    <section id="performance" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb orb-blue w-[600px] h-[600px] -top-32 -left-32 opacity-30" />
        <div className="gradient-orb orb-purple w-[500px] h-[500px] bottom-0 right-0 opacity-20" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="badge badge-accent mb-4">
              <Activity className="h-3.5 w-3.5" />
              Performance
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 mb-6 tracking-tight">
              Métricas em
              <br />
              <span className="gradient-text">Tempo Real</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              Acompanha o desempenho do atleta ao vivo com dados detalhados.
              Batimentos cardíacos, velocidade, altitude, calorias — tudo sincronizado ao milissegundo.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-4 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-xl ${metric.bgColor}`}>
                      <metric.icon className={`h-4 w-4 ${metric.color}`} />
                    </div>
                    <span className="text-sm text-neutral-500 font-medium">{metric.label}</span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-bold text-neutral-800">{metric.value}</span>
                    <span className="text-xs text-neutral-400">{metric.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Live Chart Visualization */}
          <div className="relative">
            {/* Main chart card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-blue-500/5">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-1">Batimentos Cardíacos</h3>
                  <p className="text-sm text-neutral-500">Últimos 5 minutos</p>
                </div>
                <div className="flex items-center gap-2 glass-subtle rounded-full px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs text-neutral-600 font-medium">Live</span>
                </div>
              </div>

              {/* Chart */}
              <div className="relative">
                <svg className="w-full h-36 sm:h-44" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>

                  {/* Grid lines */}
                  <g className="text-neutral-200">
                    {[0, 30, 60, 90, 120].map((y) => (
                      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
                    ))}
                  </g>

                  {/* Area fill */}
                  <path
                    d="M0,60 Q20,45 40,55 T80,50 T120,60 T160,45 T200,55 T240,40 T280,50 T320,35 T360,50 T400,45 V120 H0 Z"
                    fill="url(#chartGradient2)"
                  />

                  {/* Line */}
                  <path
                    d="M0,60 Q20,45 40,55 T80,50 T120,60 T160,45 T200,55 T240,40 T280,50 T320,35 T360,50 T400,45"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Current point */}
                  <circle cx="400" cy="45" r="6" fill="#3b82f6" opacity="0.3" className="animate-pulse" />
                  <circle cx="400" cy="45" r="4" fill="#3b82f6" />
                  <circle cx="400" cy="45" r="2" fill="white" />
                </svg>

                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-neutral-400 py-2">
                  <span>180</span>
                  <span>120</span>
                  <span>60</span>
                </div>
              </div>

              {/* Time labels */}
              <div className="flex justify-between text-xs text-neutral-400 mt-4 px-4">
                <span>-5 min</span>
                <span>-4 min</span>
                <span>-3 min</span>
                <span>-2 min</span>
                <span>-1 min</span>
                <span className="font-medium text-neutral-600">Agora</span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 animate-float shadow-lg">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="font-bold text-neutral-800">142</span>
                <span className="text-xs text-neutral-500">bpm</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 animate-float shadow-lg" style={{ animationDelay: "-3s" }}>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="font-bold text-green-600">+12%</span>
                <span className="text-xs text-neutral-500">desde ontem</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
