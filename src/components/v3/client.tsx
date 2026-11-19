"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/** Fades/slides children in when they enter the viewport. Content is visible without JS. */
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} data-reveal="" className={`${shown ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/** Counts up to a number when visible. The final value is in the HTML from the start. */
export function CountUp({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1400);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      setVal(0);
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);
  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

/** Tracks the pointer and feeds --x/--y to every `.v3-spot` card inside, for the glow effect. */
export function SpotlightGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={(e) => {
        ref.current?.querySelectorAll<HTMLElement>(".v3-spot").forEach((card) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--x", `${e.clientX - r.left}px`);
          card.style.setProperty("--y", `${e.clientY - r.top}px`);
        });
      }}
    >
      {children}
    </div>
  );
}

/** Soft brand-coloured light that follows the pointer inside the hero. */
export function PointerGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    const move = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      el.style.transform = `translate(${e.clientX - r.left - 300}px, ${e.clientY - r.top - 300}px)`;
    };
    parent.addEventListener("pointermove", move);
    return () => parent.removeEventListener("pointermove", move);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-0 top-0 hidden h-[600px] w-[600px] rounded-full opacity-40 blur-3xl transition-transform duration-300 ease-out md:block"
      style={{ background: "radial-gradient(circle, #1772e6 0%, #f98a28 45%, transparent 70%)", transform: "translate(40vw, 10vh)" }}
      aria-hidden="true"
    />
  );
}

export type ExplorerItem = {
  key: string;
  label: string;
  title: string;
  text: string;
  tags: string[];
  href: string;
  color: string;
};

/** Tabbed service explorer. Every panel is in the HTML; inactive ones are hidden. */
export function ServiceExplorer({ items }: { items: ExplorerItem[] }) {
  const [active, setActive] = useState(items[0].key);
  return (
    <div className="grid gap-6 lg:grid-cols-[22rem_1fr]">
      <div role="tablist" aria-label="Our services" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {items.map((it, i) => {
          const on = it.key === active;
          return (
            <button
              key={it.key}
              role="tab"
              id={`tab-${it.key}`}
              aria-selected={on}
              aria-controls={`panel-${it.key}`}
              onClick={() => setActive(it.key)}
              className={`group flex shrink-0 items-center gap-4 rounded-2xl border px-5 py-4 text-left transition ${
                on ? "border-white/20 bg-white/10 text-white" : "border-transparent text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full transition" style={{ background: on ? it.color : "rgb(255 255 255 / 0.25)" }} />
              <span className="font-display text-sm font-semibold text-white/40">{String(i + 1).padStart(2, "0")}</span>
              <span className="whitespace-nowrap font-semibold lg:whitespace-normal">{it.label}</span>
            </button>
          );
        })}
      </div>
      {items.map((it) => (
        <div
          key={it.key}
          role="tabpanel"
          id={`panel-${it.key}`}
          aria-labelledby={`tab-${it.key}`}
          hidden={it.key !== active}
          className="v3-panel relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-3xl" style={{ background: it.color }} aria-hidden="true" />
          <h3 className="relative text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-5xl">{it.title}</h3>
          <p className="relative mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{it.text}</p>
          <ul className="relative mt-8 flex flex-wrap gap-2">
            {it.tags.map((t) => (
              <li key={t} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85">{t}</li>
            ))}
          </ul>
          <Link
            href={it.href}
            className="group relative mt-10 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 font-semibold text-ink transition hover:shadow-[0_0_40px_rgba(249,138,40,0.45)]"
          >
            Explore {it.label}
            <span className="flex h-9 w-9 items-center justify-center rounded-full text-white transition group-hover:rotate-45" style={{ background: it.color }}>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
