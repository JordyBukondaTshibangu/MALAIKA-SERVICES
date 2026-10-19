"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

// The logo's network globe, redrawn as the hero's opening moment:
// links draw in, nodes light up, then the rising chevrons (growth) and the
// service labels arrive. Plays once on load; reduced-motion users see it static.

const nodes = [
  [240, 52], [96, 112], [392, 104], [44, 262], [436, 248],
  [108, 404], [374, 394], [244, 446], [168, 178], [322, 196], [300, 312],
] as const;

const edges: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 7],
  [0, 8], [1, 8], [8, 9], [0, 9], [9, 4], [3, 8], [9, 10], [10, 6], [2, 9], [10, 7],
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function NetworkArt() {
  const t = useTranslations("HomePage.hero");

  const chips = [
    { label: t("chips.recruitment"), x: "4%", y: "16%", delay: 1.7, tone: "sky" },
    { label: t("chips.placement"), x: "70%", y: "10%", delay: 1.85, tone: "leaf" },
    { label: t("chips.payroll"), x: "80%", y: "56%", delay: 2.0, tone: "sky" },
    { label: t("chips.contracts"), x: "0%", y: "78%", delay: 2.15, tone: "leaf" },
  ] as const;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" role="img" aria-label={t("art_label")}>
      {/* soft halo */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease }}
        className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(37,152,212,0.16),rgba(107,178,56,0.10)_55%,transparent_72%)]"
      />

      <svg viewBox="0 0 480 480" className="relative h-full w-full overflow-visible" aria-hidden>
        <g strokeWidth={2.5} strokeLinecap="round" fill="none">
          {edges.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
              stroke={i % 3 === 0 ? "var(--color-leaf)" : "var(--color-sky)"}
              strokeOpacity={0.75}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.045, ease }}
            />
          ))}
        </g>

        {nodes.map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx} cy={cy}
            r={i < 8 ? 13 : 9}
            fill={i % 2 === 0 ? "var(--color-sky)" : "var(--color-leaf)"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 380, damping: 16, delay: 0.35 + i * 0.06 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}

        {/* rising chevrons, as in the logo */}
        <motion.path
          d="M96 372 L196 262 L244 318 L384 150"
          stroke="var(--color-sky)" strokeWidth={20} strokeLinejoin="miter" strokeLinecap="butt" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 1.05, ease }}
        />
        <motion.path
          d="M100 410 L196 304 L244 360 L396 182"
          stroke="var(--color-ink)" strokeWidth={16} strokeLinejoin="miter" strokeLinecap="butt" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 1.2, ease }}
        />
        <motion.path
          d="M156 424 L210 366 L250 404 L410 222"
          stroke="var(--color-leaf)" strokeWidth={14} strokeLinejoin="miter" strokeLinecap="butt" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 1.35, ease }}
        />
        <motion.path
          d="M366 135 L405 124 L401 165 Z"
          fill="var(--color-sky)"
          initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.85, ease }}
          style={{ transformOrigin: "384px 150px" }}
        />
      </svg>

      {chips.map((c) => (
        <motion.span
          key={c.label}
          aria-hidden
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.5, delay: c.delay },
            scale: { duration: 0.5, delay: c.delay, ease },
            y: { duration: 5, delay: c.delay + 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ left: c.x, top: c.y }}
          className="absolute flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-ink shadow-[0_10px_30px_-12px_rgba(15,27,61,0.35)] ring-1 ring-line"
        >
          <span className={`size-2 rounded-full ${c.tone === "sky" ? "bg-sky" : "bg-leaf"}`} />
          {c.label}
        </motion.span>
      ))}
    </div>
  );
}
