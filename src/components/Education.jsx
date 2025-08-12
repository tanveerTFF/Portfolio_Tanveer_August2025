// src/components/Education.jsx
import React from "react";

import sjs2 from "../img/sjs2.jpg";
import ndc2 from "../img/ndc2.jpg";
import iut0 from "../img/iut0.png";

export default function Education() {
  const milestones = [
    { year: "SSC, passing year 2017", label: "...", place: "St.Joseph Higher Secondary School", pos: "bottom", img: sjs2, textPos: "top", extraTextGap: 120 },
    { year: "HSC, passing year 2019", label: "...", place: "Notre Dame College", pos: "top", img: ndc2, extraGap: 80, textPos: "bottom" },
    { year: "B.Sc in EEE, passing year 2024", label: "...", place: "Islamic University of Technology", pos: "bottom", img: iut0, textPos: "top", extraTextGap: 120 },
  ];

  const DOT_RADIUS = 28; // 56px circle / 2
  const GAP = 22;        // default image gap
  const IMG_SIZE = 200;  // image height used in calc
  const TEXT_GAP = 20;   // base distance between circle and captions

  return (
    <section
      id="education"
      className="min-h-screen text-white px-6 pt-24 flex flex-col relative"
    >
      {/* Title stays at the top */}
      <h2 className="text-center font-gscode text-5xl font-bold mb-6">
        &lt;Education&gt;
      </h2>

      {/* This centers ONLY the timeline in the remaining viewport space */}
      <div className="flex-1 grid place-items-center">
        <div className="relative w-full max-w-6xl h-[560px] isolation-isolate">
          {/* Track */}
          <div className="absolute top-1/2 left-8 right-8 h-2 bg-white/90 rounded-full shadow-[0_0_22px_rgba(255,255,255,0.8)] z-0" />

          {/* Dots */}
          {milestones.map((m, i) => {
            const pct = (i / (milestones.length - 1)) * 100;
            return (
              <div
                key={m.year}
                className="absolute z-10"
                style={{ left: `${pct}%`, top: "50%", transform: "translate(-50%, -50%)" }}
              >
                <div className="w-14 h-14 rounded-full bg-white ring-4 ring-white/70 shadow-[0_0_26px_rgba(255,255,255,0.95)]" />
              </div>
            );
          })}

          {/* Images (unchanged positioning) */}
          {milestones.map((m, i) => {
            const pct = (i / (milestones.length - 1)) * 100;
            const gapToUse = m.extraGap ?? GAP;

            const topValue =
              m.pos === "top"
                ? `calc(50% - ${DOT_RADIUS + gapToUse + IMG_SIZE}px)`
                : `calc(50% + ${DOT_RADIUS + gapToUse}px)`;

            return (
              <div
                key={`${m.year}-image`}
                className="absolute flex flex-col items-center"
                style={{ left: `${pct}%`, transform: "translateX(-50%)", top: topValue }}
              >
                <div className="w-[400px] h-[250px] rounded-xl overflow-hidden ring-2 ring-white/70 shadow-lg mb-3 bg-black">
                  <img
                    src={m.img}
                    alt={m.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}

          {/* Captions anchored to the circle */}
          {milestones.map((m, i) => {
            const pct = (i / (milestones.length - 1)) * 100;
            const extraTextGap = m.extraTextGap ?? 0;

            const textTop =
              m.textPos === "top"
                ? `calc(50% - ${DOT_RADIUS + TEXT_GAP + extraTextGap}px)`
                : `calc(50% + ${DOT_RADIUS + TEXT_GAP + extraTextGap}px)`;

            return (
              <div
                key={`${m.year}-text`}
                className="absolute flex flex-col items-center z-20 select-none focus:outline-none"
                style={{ left: `${pct}%`, transform: "translateX(-50%)", top: textTop }}
              >
                <span className="text-2xl font-gscode">{m.year}</span>
                <div className="text-center">
                  <div className="text-2xl font-gscode">{m.label}</div>
                  <div className="text-2xl font-gscode whitespace-nowrap">{m.place}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
