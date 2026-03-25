import { useState } from "react";

const shades = [
  { name: "Classic Red", color: "#c0392b" },
  { name: "Rosewood", color: "#b5495b" },
  { name: "Nude Pink", color: "#d4a5a5" },
  { name: "Berry", color: "#8e3a59" },
  { name: "Coral", color: "#e07c6e" },
];

const TryOnSection = () => {
  const [activeShade, setActiveShade] = useState<typeof shades[number] | null>(null);

  return (
    <section id="tryon" className="py-24 bg-rose-light">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-16 text-foreground">
          Virtual Try-On
        </h2>
        <div className="max-w-xl mx-auto text-center">
          {/* Swatch preview box */}
          <div
            className="w-44 h-44 mx-auto rounded-2xl shadow-lg border border-border transition-colors duration-500 flex items-center justify-center"
            style={{ backgroundColor: activeShade ? activeShade.color : "hsl(var(--muted))" }}
          >
            {!activeShade && (
              <span className="text-muted-foreground text-sm">Select a shade</span>
            )}
          </div>
          <p className="mt-4 font-display text-xl text-foreground min-h-[1.75rem]">
            {activeShade ? activeShade.name : ""}
          </p>

          {/* Shade buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {shades.map((s) => (
              <button
                key={s.name}
                title={s.name}
                onClick={() => setActiveShade(activeShade?.name === s.name ? null : s)}
                style={{ backgroundColor: s.color }}
                className={`w-12 h-12 rounded-full border-2 shadow hover:scale-125 hover:shadow-lg transition-all duration-300 ${
                  activeShade?.name === s.name
                    ? "border-foreground scale-110 ring-2 ring-foreground/30"
                    : "border-background"
                }`}
              />
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
    </section>
  );
};

export default TryOnSection;
