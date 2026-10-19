"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = { title: string; lead: string; children?: React.ReactNode };

// Inner-page opener: large title on the cool mist panel, with a quiet
// node-and-link motif drawing in on the right.
export default function PageHeader({ title, lead, children }: Props) {
  return (
    <section className="px-3 md:px-5">
      <div className="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2.5rem] bg-mist">
        <svg
          aria-hidden
          viewBox="0 0 300 200"
          className="pointer-events-none absolute -right-8 bottom-0 hidden h-full md:block"
        >
          {[
            "M60 160 L140 60", "M140 60 L240 90", "M240 90 L200 180", "M140 60 L200 180", "M60 160 L200 180",
          ].map((d, i) => (
            <motion.path
              key={d}
              d={d}
              stroke={i % 2 ? "var(--color-leaf)" : "var(--color-sky)"}
              strokeOpacity={0.5}
              strokeWidth={2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease }}
            />
          ))}
          {[[60,160],[140,60],[240,90],[200,180]].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r={8}
              fill={i % 2 ? "var(--color-leaf)" : "var(--color-sky)"}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 380, damping: 16, delay: 0.5 + i * 0.08 }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
          ))}
        </svg>

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl text-[2.5rem] font-semibold leading-[1.06] md:text-[3.5rem]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 max-w-2xl text-lg text-slate md:text-xl"
          >
            {lead}
          </motion.p>
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
