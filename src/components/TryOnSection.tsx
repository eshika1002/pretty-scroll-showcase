import { useState } from "react";
import tryonImg from "@/assets/tryon-model.jpg";

const shades = [
  { name: "Classic Red", color: "#c0392b" },
  { name: "Rosewood", color: "#b5495b" },
  { name: "Nude Pink", color: "#d4a5a5" },
  { name: "Berry", color: "#8e3a59" },
  { name: "Coral", color: "#e07c6e" },
];

const TryOnSection = () => {
  const [activeShade, setActiveShade] = useState<string | null>(null);

  return (
    <section id="tryon" className="py-24 bg-rose-light">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground">
          Virtual Try-On
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image with lips overlay */}
          <div className="relative w-72 h-72 rounded-xl overflow-hidden shadow-md">
            <img
              src={tryonImg}
              alt="Try on lipstick shades"
              loading="lazy"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
            {/* Lips overlay — positioned over the lip area only */}
            {activeShade && (
              <div
                className="absolute pointer-events-none transition-colors duration-300"
                style={{
                  top: "62%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "22%",
                  height: "8%",
                  borderRadius: "50% 50% 45% 45%",
                  backgroundColor: activeShade,
                  opacity: 0.55,
                  filter: "blur(2px)",
                }}
              />
            )}
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-muted-foreground mb-6">
              Click a shade to preview the lipstick color.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {shades.map((s) => (
                <button
                  key={s.name}
                  title={s.name}
                  onClick={() => setActiveShade(activeShade === s.color ? null : s.color)}
                  style={{ backgroundColor: s.color }}
                  className={`w-12 h-12 rounded-full border-2 shadow hover:scale-125 hover:shadow-lg transition-all duration-300 ${
                    activeShade === s.color
                      ? "border-foreground scale-110 ring-2 ring-foreground/30"
                      : "border-background"
                  }`}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
              {shades.map((s) => (
                <span
                  key={s.name}
                  className={`text-xs cursor-pointer transition-colors ${
                    activeShade === s.color ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveShade(activeShade === s.color ? null : s.color)}
                >
                  {s.name}
                </span>
              ))}
            </div>
            {activeShade && (
              <button
                onClick={() => setActiveShade(null)}
                className="mt-6 text-xs uppercase tracking-widest text-primary hover:underline"
              >
                Clear Selection
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryOnSection;
