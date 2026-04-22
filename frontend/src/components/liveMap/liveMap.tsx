import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
} from "@/components/ui/map";
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
        <Map
          center={[-9.423012928732883, 38.963803642252174]}
          zoom={13}
          theme="light"
        >
          <MapControls showFullscreen showCompass showZoom />
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
