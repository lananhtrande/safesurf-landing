import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
} from "@/components/ui/map";
import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const analyticsData = [
  {
    lng: -9.41580370558162,
    lat: 38.95872213683914,
    city: "Praia da Baleia",
    users: 847,
    size: 14,
  },
  {
    lng: -9.418518112791523,
    lat: 38.964126117725506,
    city: "Praia dos Pescadores",
    users: 645,
    size: 12,
  },
];

export default function LiveMap() {
  return (
    <div className="w-full flex items-center justify-center relative">
      <Card className="w-full h-96 p-0 overflow-hidden aspect-square sm:col-span-2 sm:aspect-video lg:aspect-auto">
        <div className="absolute top-3 left-3 z-10 bg-background/95 backdrop-blur-md rounded-lg p-3 border border-border/50 shadow-lg">
          <div className="tracking-wider text-[10px] text-muted-foreground uppercase mb-1">
            Active Users
          </div>
          <div className="text-2xl font-semibold leading-tight">2,847</div>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="size-3 text-blue-500" />
            <span className="text-xs text-blue-500">+12.5%</span>
            <span className="text-xs text-muted-foreground">vs last hour</span>
          </div>
        </div>

        <div className="absolute bottom-3 left-3 z-10 bg-background/95 backdrop-blur-md rounded-lg px-3 py-2 border border-border/50 shadow-lg">
          <div className="flex items-center gap-4 text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="size-3 rounded-full bg-blue-500" />
              <span className="text-muted-foreground">High</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-blue-500" />
              <span className="text-muted-foreground">Medium</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-1.5 rounded-full bg-blue-500" />
              <span className="text-muted-foreground">Low</span>
            </div>
          </div>
        </div>

        <Map
          center={[-9.423012928732883, 38.963803642252174]}
          zoom={13}
          theme="light"
        >
          <MapControls />
          {analyticsData.map((loc) => (
            <MapMarker key={loc.city} longitude={loc.lng} latitude={loc.lat}>
              <MarkerContent>
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute rounded-full bg-blue-500/20"
                    style={{
                      width: loc.size * 2.5,
                      height: loc.size * 2.5,
                    }}
                  />
                  <div
                    className="absolute rounded-full bg-blue-500/40 animate-ping"
                    style={{
                      width: loc.size * 1.5,
                      height: loc.size * 1.5,
                      animationDuration: "2s",
                    }}
                  />
                  <div
                    className="relative rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"
                    style={{ width: loc.size, height: loc.size }}
                  />
                </div>
              </MarkerContent>
              <MarkerTooltip>
                <div className="text-center">
                  <div className="font-medium">{loc.city}</div>
                  <div className="text-blue-500 font-semibold">{loc.users}</div>
                  <div className="text-[10px] text-muted-foreground">
                    active users
                  </div>
                </div>
              </MarkerTooltip>
            </MapMarker>
          ))}
        </Map>
      </Card>
    </div>
  );
}
