"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  href?: string;
  navigateLabel?: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  onEnergyChange?: (id: number, delta: number) => void;
}

export default function RadialOrbitalTimeline({
  timelineData,
  onEnergyChange,
}: RadialOrbitalTimelineProps) {
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [r, setR] = useState(200);
  const containerRef = useRef<HTMLDivElement>(null);

  const closeCard = () => {
    setActiveNodeId(null);
    setPulseEffect({});
    setAutoRotate(true);
  };

  const openCard = (id: number) => {
    if (activeNodeId === id) {
      closeCard();
      return;
    }
    setActiveNodeId(id);
    setAutoRotate(false);

    const related = timelineData.find((i) => i.id === id)?.relatedIds ?? [];
    const pulse: Record<number, boolean> = {};
    related.forEach((rid) => (pulse[rid] = true));
    setPulseEffect(pulse);

    const nodeIndex = timelineData.findIndex((i) => i.id === id);
    const targetAngle = (nodeIndex / timelineData.length) * 360;
    setRotationAngle(270 - targetAngle);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const { width, height } = el.getBoundingClientRect();
      if (width && height) {
        setR(Math.min(200, Math.floor((width - 60) / 2), Math.floor((height - 120) / 2)));
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const calcPosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const rad = (angle * Math.PI) / 180;
    return {
      x: r * Math.cos(rad),
      y: r * Math.sin(rad),
      zIndex: Math.round(100 + 50 * Math.cos(rad)),
      depthOpacity: Math.max(0.35, Math.min(1, 0.35 + 0.65 * ((1 + Math.sin(rad)) / 2))),
    };
  };

  const getStatusStyles = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":   return "text-white bg-black border-white";
      case "in-progress": return "text-black bg-white border-black";
      default:            return "text-white bg-black/40 border-white/50";
    }
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const activeItem = timelineData.find((i) => i.id === activeNodeId) ?? null;

  return (
    <div className="relative">
      {/* ── Orbital canvas ── */}
      <div
        className="w-full h-screen flex items-center justify-center bg-black overflow-hidden"
        ref={containerRef}
        onClick={(e) => { if (e.target === containerRef.current) closeCard(); }}
      >
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
          <div
            className="absolute w-full h-full flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            {/* Centre orb */}
            <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
              <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70" />
              <div
                className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
                style={{ animationDelay: "0.5s" }}
              />
              <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md" />
            </div>

            {/* Orbit ring */}
            <div
              className="absolute rounded-full border border-white/10"
              style={{ width: r * 2, height: r * 2 }}
            />

            {/* Nodes */}
            {timelineData.map((item, index) => {
              const pos = calcPosition(index, timelineData.length);
              const isActive  = activeNodeId === item.id;
              const isRelated = activeNodeId !== null &&
                (timelineData.find((i) => i.id === activeNodeId)?.relatedIds ?? []).includes(item.id);
              const isPulsing = pulseEffect[item.id];
              const ef        = item.energy / 100; // 0–1 energy factor
              const Icon      = item.icon;

              return (
                <div
                  key={item.id}
                  className="absolute transition-all duration-700 cursor-pointer"
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                    zIndex:    isActive ? 200 : pos.zIndex,
                    opacity:   isActive ? 1 : pos.depthOpacity,
                  }}
                  onClick={(e) => { e.stopPropagation(); openCard(item.id); }}
                >
                  {/* Energy glow halo */}
                  <div
                    className={`absolute rounded-full pointer-events-none ${isPulsing ? "animate-pulse" : ""}`}
                    style={{
                      background: `radial-gradient(circle, rgba(56,189,248,${ef * 0.35}) 0%, transparent 70%)`,
                      width:  `${ef * 48 + 28}px`,
                      height: `${ef * 48 + 28}px`,
                      left:   `-${(ef * 48 + 28 - 40) / 2}px`,
                      top:    `-${(ef * 48 + 28 - 40) / 2}px`,
                    }}
                  />

                  {/* Node circle — border brightness driven by energy */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                      ${isActive
                        ? "bg-white text-black border-white shadow-lg scale-150"
                        : isRelated
                        ? "bg-white/50 text-black border-white animate-pulse"
                        : "bg-black text-white"
                      }`}
                    style={
                      !isActive && !isRelated
                        ? {
                            borderColor: `rgba(56,189,248,${0.15 + ef * 0.65})`,
                            boxShadow:   `0 0 ${ef * 14}px rgba(56,189,248,${ef * 0.55})`,
                          }
                        : undefined
                    }
                  >
                    <Icon size={16} />
                  </div>

                  {/* Label — hidden when any card is open; brightness by energy */}
                  {activeNodeId === null && (
                    <div
                      className="absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300"
                      style={{
                        opacity: 0.25 + ef * 0.75,
                        color:   `rgba(255,255,255,${0.25 + ef * 0.75})`,
                        textShadow: ef > 0.6
                          ? `0 0 ${ef * 8}px rgba(56,189,248,${ef * 0.6})`
                          : "none",
                      }}
                    >
                      {item.title}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Centered card overlay ── */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center"
          onClick={closeCard}
        >
          <Card
            className="w-72 bg-black/95 backdrop-blur-xl border-white/25 shadow-2xl shadow-black/80"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <Badge className={`px-2 text-xs ${getStatusStyles(activeItem.status)}`}>
                  {activeItem.status === "completed"
                    ? "COMPLETE"
                    : activeItem.status === "in-progress"
                    ? "IN PROGRESS"
                    : "PENDING"}
                </Badge>
                <span className="text-xs font-mono text-white/50">{activeItem.date}</span>
              </div>
              <CardTitle className="text-sm mt-2 text-white">{activeItem.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-xs text-white/80 space-y-0">
              <p>{activeItem.content}</p>

              {/* Energy bar with +/− controls */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="flex items-center gap-1">
                    <Zap size={10} />
                    Energy Level
                  </span>
                  <span className="font-mono text-white">{activeItem.energy}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="w-6 h-6 rounded border border-white/30 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold leading-none transition-colors select-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEnergyChange?.(activeItem.id, -10);
                    }}
                  >
                    −
                  </button>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                      style={{ width: `${activeItem.energy}%` }}
                    />
                  </div>
                  <button
                    className="w-6 h-6 rounded border border-white/30 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold leading-none transition-colors select-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEnergyChange?.(activeItem.id, 10);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Navigate to section */}
              {activeItem.href && (
                <div className="mt-3">
                  <Button
                    size="sm"
                    className="w-full h-7 text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollTo(activeItem.href!);
                      closeCard();
                    }}
                  >
                    {activeItem.navigateLabel ?? "Detayları Gör →"}
                  </Button>
                </div>
              )}

              {/* Connected nodes */}
              {activeItem.relatedIds.length > 0 && (
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="flex items-center mb-2">
                    <Link size={10} className="text-white/70 mr-1" />
                    <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                      Connected Nodes
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {activeItem.relatedIds.map((rid) => {
                      const rel = timelineData.find((i) => i.id === rid);
                      return (
                        <Button
                          key={rid}
                          variant="outline"
                          size="sm"
                          className="h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            openCard(rid);
                          }}
                        >
                          {rel?.title}
                          <ArrowRight size={8} className="ml-1 text-white/60" />
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
