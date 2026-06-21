/* ============================================================================
   SYSTEMIC PIPELINE — Parallel Revenue Infrastructure for Recruitment Agencies
   Stack: React 19 + TS + Vite + Tailwind v4 + motion/react + lucide-react
   19 sections, Liquid Glass dark aesthetic, scroll-driven motion, interactive
   ROI engine + tier switcher, founder portrait, floating WhatsApp + Calendly.
   ========================================================================== */

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  type CSSProperties,
  type ReactNode,
} from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useInView,
  useReducedMotion,
  type MotionValue,
  type Variants,
} from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  Activity,
  ShieldCheck,
  Layers,
  Cpu,
  Users,
  Phone,
  MessageCircle,
  Linkedin,
  Calendar,
  Sparkles,
  Target,
  Clock,
  TrendingUp,
  Lock,
  Mail,
  Workflow,
  Webhook,
  Filter,
  GaugeCircle,
  Crown,
  Infinity as InfinityIcon,
  AlertTriangle,
  Award,
  Plus,
  Minus,
  Check,
  X,
  Menu,
  ChevronRight,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* CONSTANTS                                                                  */
/* -------------------------------------------------------------------------- */

const CALENDLY_URL = 'https://calendly.com/saadziasaadzia21/30min';
const WHATSAPP_URL = 'https://wa.me/3165160899';
const LINKEDIN_URL = 'https://www.linkedin.com/in/saadzia2199';
const FOUNDER_IMG = 'https://i.ibb.co/ZR8VYm1X/saad-blue-3piece-pic.png';
const VSL_VIDEO_ID = '1203194052'; // Vimeo video ID

/* -------------------------------------------------------------------------- */
/* BRAND STYLES (fonts, keyframes, helper classes)                            */
/* -------------------------------------------------------------------------- */

function BrandStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&family=JetBrains+Mono:wght@400;500;600&display=swap');

      .font-display { font-family: 'Playfair Display', ui-serif, Georgia, serif; }
      .font-sans    { font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; }
      .font-mono    { font-family: 'JetBrains Mono', ui-monospace, "SF Mono", Menlo, monospace; }

      /* Mesh / aurora background */
      @keyframes auroraDrift {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg) scale(1); }
        33%      { transform: translate3d(4%, -3%, 0) rotate(8deg) scale(1.08); }
        66%      { transform: translate3d(-3%, 4%, 0) rotate(-6deg) scale(1.05); }
      }
      .aurora { animation: auroraDrift 26s ease-in-out infinite; }

      @keyframes shimmerLine {
        0%   { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .shimmer-line::after {
        content: ''; position: absolute; inset: 0;
        background: linear-gradient(90deg, transparent, rgba(56,189,248,.5), transparent);
        animation: shimmerLine 2.4s ease-in-out infinite;
      }

      @keyframes pulseGlow {
        0%,100% { box-shadow: 0 0 0 0 rgba(56,189,248,.55), 0 0 30px 0 rgba(56,189,248,.35); }
        50%     { box-shadow: 0 0 0 14px rgba(56,189,248,0),  0 0 60px 8px rgba(56,189,248,.55); }
      }
      .pulse-glow { animation: pulseGlow 2.6s ease-in-out infinite; }

      @keyframes textPulse {
        0%,100% { text-shadow: 0 0 0 rgba(244,207,106,0); }
        50%     { text-shadow: 0 0 28px rgba(244,207,106,.55), 0 0 4px rgba(244,207,106,.4); }
      }
      .pulse-glow-text { animation: textPulse 2.4s ease-in-out infinite; }

      @keyframes pulseRing {
        0%   { transform: scale(0.85); opacity: .9; }
        100% { transform: scale(2.2);  opacity: 0; }
      }
      .pulse-ring { animation: pulseRing 2.2s cubic-bezier(.2,.6,.2,1) infinite; }

      @keyframes marquee {
        0%   { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .marquee-track { animation: marquee 38s linear infinite; }

      @keyframes typeCaret { 0%,100% { opacity: 0; } 50% { opacity: 1; } }
      .type-caret { animation: typeCaret 1s steps(2) infinite; }

      @keyframes gradientShift {
        0%,100% { background-position: 0% 50%; }
        50%     { background-position: 100% 50%; }
      }
      .gradient-text {
        background: linear-gradient(120deg, #f3f5fb 0%, #cfe9ff 35%, #38bdf8 55%, #a5b4fc 75%, #f3f5fb 100%);
        background-size: 220% 220%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: gradientShift 9s ease infinite;
      }
      .gradient-text-gold {
        background: linear-gradient(120deg, #f4cf6a 0%, #fff3c2 50%, #e2b341 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .grain::before {
        content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 1;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>");
        opacity: .06; mix-blend-mode: overlay;
      }

      .glass {
        background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.015));
        backdrop-filter: blur(18px) saturate(1.1);
        -webkit-backdrop-filter: blur(18px) saturate(1.1);
        border: 1px solid rgba(255,255,255,.07);
        box-shadow: inset 0 1px 0 rgba(255,255,255,.05), 0 30px 60px -30px rgba(0,0,0,.6);
      }
      .glass-strong {
        background: linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.025));
        backdrop-filter: blur(28px) saturate(1.2);
        -webkit-backdrop-filter: blur(28px) saturate(1.2);
        border: 1px solid rgba(255,255,255,.1);
      }

      .ring-azure { box-shadow: 0 0 0 1px rgba(56,189,248,.35), 0 0 50px -10px rgba(56,189,248,.45); }

      .btn-primary {
        position: relative; isolation: isolate; overflow: hidden;
        background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #6366f1 100%);
        color: #03050b; font-weight: 600; letter-spacing: -.01em;
        box-shadow: 0 12px 40px -10px rgba(56,189,248,.55), inset 0 1px 0 rgba(255,255,255,.45);
        transition: transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s ease;
      }
      .btn-primary::before {
        content:''; position:absolute; inset:0;
        background: linear-gradient(110deg, transparent 0%, rgba(255,255,255,.45) 50%, transparent 100%);
        transform: translateX(-100%);
        transition: transform .9s cubic-bezier(.2,.7,.2,1);
      }
      .btn-primary:hover::before { transform: translateX(100%); }
      .btn-primary:hover { box-shadow: 0 18px 60px -8px rgba(56,189,248,.7), inset 0 1px 0 rgba(255,255,255,.55); }

      .btn-ghost {
        background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.12);
        color: #f3f5fb;
        backdrop-filter: blur(10px);
        transition: background .25s ease, border-color .25s ease, transform .25s ease;
      }
      .btn-ghost:hover { background: rgba(255,255,255,.08); border-color: rgba(56,189,248,.45); }

      .underline-azure {
        background-image: linear-gradient(120deg, #38bdf8, #6366f1);
        background-repeat: no-repeat;
        background-size: 0% 2px;
        background-position: 0 100%;
        transition: background-size .35s ease;
      }
      .underline-azure:hover { background-size: 100% 2px; }

      .glow-linkedin {
        background: radial-gradient(120% 120% at 0% 0%, #0a66c2 0%, #1e3a8a 100%);
        box-shadow: 0 0 0 0 rgba(10,102,194,.6), 0 12px 40px -8px rgba(10,102,194,.7);
        animation: pulseLinkedin 2.4s ease-in-out infinite;
      }
      @keyframes pulseLinkedin {
        0%,100% { box-shadow: 0 0 0 0 rgba(56,189,248,.6), 0 12px 40px -8px rgba(10,102,194,.7); }
        50%     { box-shadow: 0 0 0 18px rgba(56,189,248,0), 0 22px 60px -6px rgba(56,189,248,.55); }
      }

      .glow-whatsapp {
        background: radial-gradient(120% 120% at 30% 30%, #25D366 0%, #128C7E 100%);
        box-shadow: 0 0 0 0 rgba(37,211,102,.55), 0 18px 50px -10px rgba(37,211,102,.65);
        animation: pulseWhats 2.6s ease-in-out infinite;
      }
      @keyframes pulseWhats {
        0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,.55), 0 18px 50px -10px rgba(37,211,102,.65); }
        50%     { box-shadow: 0 0 0 18px rgba(37,211,102,0),  0 28px 70px -6px rgba(37,211,102,.55); }
      }

      .tilt-on-hover { transition: transform .5s cubic-bezier(.2,.7,.2,1); transform-style: preserve-3d; }
      .tilt-on-hover:hover { transform: translateY(-4px); }

      .ticker-divider {
        background: linear-gradient(180deg, transparent, rgba(56,189,248,.5), transparent);
      }

      @media (prefers-reduced-motion: reduce) {
        .aurora, .marquee-track, .pulse-glow, .pulse-ring,
        .shimmer-line::after, .gradient-text, .glow-linkedin, .glow-whatsapp {
          animation: none !important;
        }
      }
    `}</style>
  );
}

/* -------------------------------------------------------------------------- */
/* HOOKS                                                                      */
/* -------------------------------------------------------------------------- */

function useCountUp(target: number, durationMs = 1600, start = false) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!start) return;
    if (reduce) {
      setValue(target);
      return;
    }
    let raf = 0;
    const begin = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - begin) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start, reduce]);
  return value;
}

function useMagnetic<T extends HTMLElement>(strength = 18) {
  const ref = useRef<T | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      mx.set((x / r.width) * strength);
      my.set((y / r.height) * strength);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [mx, my, strength, reduce]);
  return { ref, mx, my };
}

/* -------------------------------------------------------------------------- */
/* ICONS — custom WhatsApp glyph                                              */
/* -------------------------------------------------------------------------- */

function WhatsAppIcon({ className = '', filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? 'currentColor' : 'none'}
      aria-hidden="true"
      className={className}
    >
      <path d="M16.003 2.667c-7.364 0-13.336 5.972-13.336 13.336 0 2.351.616 4.643 1.789 6.671L2.667 29.333l6.829-1.789a13.298 13.298 0 0 0 6.507 1.688h.005c7.36 0 13.328-5.972 13.328-13.336 0-3.563-1.385-6.911-3.901-9.428-2.517-2.516-5.865-3.901-9.432-3.901zm0 24.45h-.004a11.07 11.07 0 0 1-5.643-1.547l-.405-.24-4.211 1.104 1.124-4.107-.264-.421a11.072 11.072 0 0 1-1.696-5.904c.002-6.115 4.98-11.093 11.103-11.093 2.965 0 5.752 1.156 7.847 3.253a11.027 11.027 0 0 1 3.249 7.852c-.002 6.116-4.98 11.103-11.1 11.103zm6.084-8.305c-.333-.167-1.971-.973-2.276-1.084-.305-.111-.527-.167-.749.167-.222.333-.86 1.084-1.055 1.306-.194.222-.388.25-.721.083-.333-.167-1.407-.519-2.679-1.654-.99-.883-1.659-1.974-1.853-2.307-.194-.333-.021-.514.146-.68.15-.149.333-.388.5-.583.167-.194.222-.333.333-.555.111-.222.056-.417-.028-.583-.083-.167-.749-1.806-1.026-2.472-.27-.649-.544-.561-.749-.571-.194-.011-.416-.011-.638-.011a1.225 1.225 0 0 0-.888.417c-.305.333-1.166 1.139-1.166 2.778s1.193 3.222 1.36 3.444c.167.222 2.348 3.585 5.689 5.026.795.343 1.415.548 1.899.701.798.254 1.524.218 2.097.132.64-.096 1.971-.806 2.249-1.584.278-.778.278-1.444.194-1.584-.083-.139-.305-.222-.638-.388z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* SHARED COMPONENTS                                                          */
/* -------------------------------------------------------------------------- */

type CTAProps = {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
  icon?: ReactNode;
  size?: 'md' | 'lg';
  ariaLabel?: string;
  href?: string;
};

function CTA({
  children,
  variant = 'primary',
  className = '',
  icon = <ArrowRight className="h-4 w-4" />,
  size = 'md',
  ariaLabel,
  href = CALENDLY_URL,
}: CTAProps) {
  const { ref, mx, my } = useMagnetic<HTMLAnchorElement>(10);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.5 });
  const sm = size === 'lg' ? 'px-7 py-4 text-base' : 'px-5 py-3 text-sm';
  const base = variant === 'primary' ? 'btn-primary' : 'btn-ghost';
  const isHash = typeof href === 'string' && href.startsWith('#');
  return (
    <motion.a
      ref={ref}
      href={href}
      {...(isHash ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
      aria-label={ariaLabel || (typeof children === 'string' ? children : 'Book a call')}
      style={{ x: sx, y: sy }}
      className={`group relative inline-flex cursor-pointer items-center gap-2 rounded-full ${sm} ${base} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
        {icon}
      </span>
    </motion.a>
  );
}

function SectionLabel({ children, accent = 'azure' }: { children: ReactNode; accent?: 'azure' | 'gold' }) {
  const color = accent === 'gold' ? 'text-[#f4cf6a]' : 'text-[#38bdf8]';
  return (
    <div className="mb-5 inline-flex items-center gap-2">
      <span className={`h-px w-8 ${accent === 'gold' ? 'bg-[#f4cf6a]/60' : 'bg-[#38bdf8]/60'}`} />
      <span className={`font-mono text-[11px] uppercase tracking-[0.22em] ${color}`}>{children}</span>
    </div>
  );
}

function Heading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl ${className}`}>
      {children}
    </h2>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  shown:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

function Reveal({
  children,
  delay = 0,
  className = '',
  as: As = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'shown' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      <As>{children}</As>
    </motion.div>
  );
}

function GlassCard({
  children,
  className = '',
  hoverGlow = true,
}: {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverGlow) return;
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };
  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => setPos(null)}
      className={`glass tilt-on-hover relative overflow-hidden rounded-3xl ${className}`}
    >
      {pos && hoverGlow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity"
          style={{
            background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(56,189,248,0.18), transparent 45%)`,
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* BACKGROUND                                                                 */
/* -------------------------------------------------------------------------- */

function MeshBackground({ progress }: { progress: MotionValue<number> }) {
  const y1 = useTransform(progress, [0, 1], [0, -120]);
  const y2 = useTransform(progress, [0, 1], [0, 80]);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#03050b]" />
      <motion.div
        style={{ y: y1 }}
        className="aurora absolute -left-1/4 -top-1/4 h-[80vh] w-[80vh] rounded-full bg-[radial-gradient(closest-side,#1d4ed8,transparent)] opacity-30 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="aurora absolute right-[-15%] top-[20%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(closest-side,#6366f1,transparent)] opacity-25 blur-3xl"
      />
      <div className="aurora absolute bottom-[-20%] left-[10%] h-[60vh] w-[80vh] rounded-full bg-[radial-gradient(closest-side,#0ea5e9,transparent)] opacity-20 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
        }}
      />
      <div className="grain" />
    </div>
  );
}

function ScrollProgress({ progress }: { progress: MotionValue<number> }) {
  const scaleX = useSpring(progress, { stiffness: 120, damping: 22, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0 50%' }}
      className="fixed left-0 top-0 z-50 h-[2px] w-full bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#a855f7]"
    />
  );
}

/* -------------------------------------------------------------------------- */
/* FLOATING — WhatsApp + scroll hint                                          */
/* -------------------------------------------------------------------------- */

function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="glass-strong w-[280px] rounded-2xl p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366]" />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#94a3b8]">
                Replying in ≤ 3 minutes
              </p>
            </div>
            <p className="text-sm text-[#f3f5fb]">
              Hey — Saad here. Send a message and I'll route it to the right specialist instantly.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2 text-sm font-semibold text-[#03050b] hover:brightness-110"
            >
              Open WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        aria-label="Open WhatsApp chat"
        onClick={() => setOpen((v) => !v)}
        className="glow-whatsapp relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-white md:h-16 md:w-16"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 pulse-ring" />
        <WhatsAppIcon className="relative h-7 w-7 md:h-8 md:w-8" />
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 1 — NAV                                                            */
/* -------------------------------------------------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  const links = [
    { href: '#problem', label: 'Problem' },
    { href: '#mechanism', label: 'Mechanism' },
    { href: '#roi', label: 'ROI' },
    { href: '#tiers', label: 'Tiers' },
    { href: '#founder', label: 'Founder' },
    { href: '#faq', label: 'FAQ' },
  ];
  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="fixed left-0 right-0 top-3 z-50 mx-auto flex max-w-6xl items-center px-3 md:top-4 md:px-6"
      >
        <div
          className={`flex w-full items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 md:px-4 ${
            scrolled
              ? 'border-white/10 bg-[#06080f]/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]'
              : 'border-white/5 bg-white/[0.02] backdrop-blur-md'
          }`}
        >
          <a href="#top" className="flex items-center gap-2 px-1.5 sm:px-2">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] text-[#03050b]">
              <Workflow className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <span className="font-display text-[15px] tracking-tight sm:text-base">
              Systemetic <span className="text-[#94a3b8]">Pipeline</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="underline-azure text-sm text-[#cbd5e1] hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <CTA size="md" icon={<Calendar className="h-4 w-4" />} className="hidden md:inline-flex">
              Book a Call
            </CTA>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur transition-colors hover:border-white/25 md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'x' : 'm'}
                  initial={{ rotate: -60, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 60, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[45] bg-[#03050b]/70 backdrop-blur-md md:hidden"
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
              className="fixed left-3 right-3 top-[68px] z-[45] md:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="glass-strong overflow-hidden rounded-3xl p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#94a3b8]">
                  Navigate
                </div>
                <nav className="mt-4 flex flex-col divide-y divide-white/5">
                  {links.map((l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.25 }}
                      className="group flex items-center justify-between py-3.5 text-[15px] text-[#e6ebf5]"
                    >
                      <span>{l.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-[#38bdf8] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </motion.a>
                  ))}
                </nav>
                <div className="mt-4 grid grid-cols-1 gap-2">
                  <CTA
                    size="md"
                    icon={<Calendar className="h-4 w-4" />}
                    className="w-full justify-center"
                  >
                    Book a Call
                  </CTA>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-[#cbd5e1] hover:border-white/25 hover:text-white"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> WhatsApp · +31 65160899
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 2 — HERO                                                           */
/* -------------------------------------------------------------------------- */

function Hero() {
  const rotators = useMemo(
    () => ['leaked placement fees', 'the founder bottleneck', 'the idle-bench threat', 'a cold inbox'],
    []
  );
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % rotators.length), 2600);
    return () => clearInterval(t);
  }, [rotators.length]);

  return (
    <section
      id="top"
      className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col items-center justify-center px-5 pt-32 pb-20 md:px-8"
    >
      <Reveal>
        <div className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38bdf8] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38bdf8]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#cbd5e1]">
            Parallel Revenue Infrastructure · Closed cohort · 3 slots / mo
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-7 text-center">
        <h1 className="font-display text-[36px] leading-[1.02] tracking-[-0.025em] sm:text-[52px] md:text-[88px]">
          <span className="block gradient-text">The Speed-to-Lead</span>
          <span className="block">
            Recapture <span className="italic text-[#cfe9ff]">Engine</span>
            <sup className="text-lg text-[#38bdf8] md:text-2xl">™</sup>
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.2} className="mt-6 max-w-3xl text-center">
        <p className="text-balance text-[15px] leading-relaxed text-[#cbd5e1] md:text-lg">
          We engineer the parallel revenue infrastructure that ends{' '}
          <span className="relative inline-block h-[1.3em] min-w-[14ch] align-bottom md:min-w-[18ch]">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotators[idx]}
                initial={{ y: 20, opacity: 0, filter: 'blur(6px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -20, opacity: 0, filter: 'blur(6px)' }}
                transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                className="absolute left-0 top-0 whitespace-nowrap font-display italic text-white"
              >
                {rotators[idx]}
                <span className="type-caret ml-1 inline-block h-[0.85em] w-[2px] translate-y-[2px] bg-[#38bdf8] align-middle" />
              </motion.span>
            </AnimatePresence>
          </span>{' '}
          — and delivers exclusive retained mandates to your calendar in 30 days.
          Zero operational disruption. Zero learning curve.
        </p>
      </Reveal>

      <Reveal delay={0.3} className="mt-10 flex w-full flex-col items-center justify-center gap-8 sm:w-auto sm:flex-row sm:gap-14 md:gap-24">
        <CTA size="lg" icon={<Calendar className="h-5 w-5" />}>
          Book the Technical Review
        </CTA>
        <CTA variant="ghost" size="lg" icon={<ArrowUpRight className="h-5 w-5" />} href="#roi">
          See The Math
        </CTA>
      </Reveal>

      <Reveal delay={0.45} className="mt-14 w-full max-w-5xl">
        <VSLFacade />
      </Reveal>

      <Reveal delay={0.55} className="mt-10 w-full max-w-5xl">
        <HeroPipelineDiagram />
      </Reveal>
    </section>
  );
}

function VSLFacade() {
  const [playing, setPlaying] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="glass relative mx-auto overflow-hidden rounded-3xl p-2 md:p-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#06080f]">
        {!playing ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label="Play the Systemetic Pipeline walkthrough video"
            className="group absolute inset-0 cursor-pointer"
          >
            {/* Animated mesh poster */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(60% 80% at 30% 20%, rgba(56,189,248,0.32), transparent 60%), radial-gradient(50% 70% at 80% 60%, rgba(99,102,241,0.32), transparent 60%), linear-gradient(180deg, #050912 0%, #03050b 100%)',
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage:
                  'radial-gradient(ellipse at center, black 35%, transparent 80%)',
              }}
            />

            {/* Top-left brand */}
            <div className="absolute left-5 top-5 flex items-center gap-2 md:left-7 md:top-7">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] text-[#03050b]">
                <Workflow className="h-4 w-4" strokeWidth={2.4} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#cbd5e1]">
                Systemetic Pipeline · Walkthrough
              </span>
            </div>

            {/* Duration chip */}
            <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#06080f]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#cbd5e1] backdrop-blur md:right-7 md:top-7">
              <Clock className="h-3 w-3 text-[#38bdf8]" /> 3:42
            </div>

            {/* Centered play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {!reduce && (
                  <>
                    <span className="absolute inset-0 rounded-full bg-[#38bdf8]/25 pulse-ring" />
                    <span
                      className="absolute inset-0 rounded-full bg-[#38bdf8]/15 pulse-ring"
                      style={{ animationDelay: '0.6s' }}
                    />
                  </>
                )}
                <motion.span
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#cfe9ff] text-[#03050b] shadow-[0_18px_60px_-10px_rgba(56,189,248,0.6)] md:h-24 md:w-24"
                >
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 md:h-8 md:w-8" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.span>
              </div>
            </div>

            {/* Caption */}
            <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-3 md:inset-x-7 md:bottom-7">
              <div className="max-w-md">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#38bdf8]">
                  Watch · 3-minute walkthrough
                </div>
                <div className="mt-1 font-display text-xl leading-tight text-white md:text-2xl">
                  How we route a warm lead in &lt; 3 seconds.
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[#cbd5e1] backdrop-blur">
                <Sparkles className="h-3 w-3 text-[#f4cf6a]" /> No pitch · Pure mechanism
              </div>
            </div>

            {/* Hover lift overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03050b]/40 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-0" />
          </button>
        ) : (
          <iframe
            title="Systemetic Pipeline VSL"
            src={`https://player.vimeo.com/video/${VSL_VIDEO_ID}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        )}
      </div>
    </div>
  );
}

function HeroPipelineDiagram() {
  const reduce = useReducedMotion();
  const steps = [
    { icon: Mail, label: 'Inbound Intent', sub: 'Email · Link · Open' },
    { icon: Webhook, label: 'CRM Webhook', sub: '< 3s alert' },
    { icon: Users, label: 'Setter Intercept', sub: 'Human bridge' },
    { icon: Filter, label: 'BANT Filter', sub: 'Qualified only' },
    { icon: Calendar, label: 'Booked', sub: 'On your calendar' },
  ];
  return (
    <div className="glass relative rounded-3xl p-4 md:p-7">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/60 to-transparent" />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-strong relative flex h-full flex-col items-start gap-2 rounded-2xl p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0ea5e9]/30 to-[#6366f1]/30 ring-1 ring-white/10">
                <s.icon className="h-5 w-5 text-[#38bdf8]" />
              </div>
              <div className="font-display text-lg">{s.label}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#94a3b8]">{s.sub}</div>
              {!reduce && (
                <motion.div
                  className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-[#38bdf8]"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.4, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
                />
              )}
            </motion.div>
            {i < steps.length - 1 && (
              <div className="absolute right-[-10px] top-1/2 hidden -translate-y-1/2 md:block">
                <ChevronRight className="h-5 w-5 text-[#38bdf8]/70" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 3 — TRUST MARQUEE                                                  */
/* -------------------------------------------------------------------------- */

function TrustMarquee() {
  const stats = [
    { v: '< 3 min', l: 'Speed-to-lead' },
    { v: '+30%', l: 'Chat-to-call lift' },
    { v: '20 hrs', l: 'Reclaimed weekly' },
    { v: '0', l: 'Dropped leads' },
    { v: '566%', l: '90-day ROI floor' },
    { v: '$25K', l: 'Avg saved placement' },
  ];
  const row = [...stats, ...stats];
  return (
    <section className="relative z-10 border-y border-white/5 bg-gradient-to-b from-transparent via-[#06080f]/60 to-transparent py-6 md:py-8">
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap px-6">
          {row.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-display text-2xl text-white md:text-3xl">{s.v}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#94a3b8]">
                {s.l}
              </span>
              <span className="ticker-divider mx-2 h-6 w-px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 4 — PROBLEM STACK (4 pains)                                        */
/* -------------------------------------------------------------------------- */

function ProblemStack() {
  const pains = [
    {
      tag: 'Surface',
      icon: Clock,
      title: 'You are running the agency from your phone.',
      body: 'Twelve-hour days. Active inbound replies handled from the car, between candidate interviews, after dinner. The work is competent. The cadence is unsustainable.',
    },
    {
      tag: 'Hidden',
      icon: TrendingUp,
      title: 'Warm prospects sign with the next firm.',
      body: 'A reply that lands a day late is a competitor signature. Placement fees leak out silently — you feel it in the bank account before you see it in the inbox. The trend compounds quarterly.',
    },
    {
      tag: 'Systemic',
      icon: Cpu,
      title: 'Your pipeline runs on personal willpower.',
      body: 'No instant-alert webhook. No routing logic. No human bridge to intercept. The agency depends entirely on your follow-up reflex — which means the agency depends on you not being human.',
    },
    {
      tag: 'Existential',
      icon: AlertTriangle,
      title: 'The idle bench is one hiring freeze away.',
      body: 'Slow follow-up starves recruiters of job orders. Payroll keeps ticking. When the next downturn arrives, you do not get to renegotiate cash burn. Cure the bottleneck now, or the spreadsheet does it for you.',
    },
  ];
  return (
    <section id="problem" className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionLabel>01 · Problem Stack</SectionLabel>
        <Heading>
          You are not <span className="italic text-[#94a3b8]">undermarketed</span>.
          <br />
          You are <span className="gradient-text">unrouted</span>.
        </Heading>
        <p className="mt-6 max-w-2xl text-[#cbd5e1]">
          Four layers of pain compound on top of each other. Solve only the surface and the rest still
          bleeds you out by Q3. This is the diagnostic, in order of severity.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {pains.map((p, i) => (
          <Reveal key={p.tag} delay={i * 0.08}>
            <GlassCard className="h-full p-7 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0ea5e9]/25 to-[#6366f1]/25 ring-1 ring-white/10">
                  <p.icon className="h-5 w-5 text-[#38bdf8]" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#94a3b8]">
                  {p.tag} pain
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl leading-tight md:text-3xl">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#cbd5e1]">{p.body}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 5 — BOTTLENECK CRISIS (15 cards horizontal)                        */
/* -------------------------------------------------------------------------- */

function BottleneckCrisis() {
  const groups = [
    {
      label: 'The Founder Bottleneck',
      items: [
        ['Context-Switching Penalty', 'Source by morning, miss prospect emails by afternoon.'],
        ['The 12-Hour Grind', 'Extreme hours just to keep the pipeline barely alive.'],
        ['Operational Firefighting', 'Time burned on team morale instead of closing deals.'],
        ['Manual Inbox Checking', 'Hours refreshing email to find a warm reply.'],
        ['Dropped Conversations', 'Friendly LinkedIn chats dying because you forgot to reply.'],
      ],
    },
    {
      label: 'The Speed & Nurture Crisis',
      items: [
        ['Slow Speed-to-Lead', 'Prospects sign with another agency because you replied a day late.'],
        ['The Nurture Gap', 'B2B buyers who need 3–6 months silently get abandoned.'],
        ['Missed Intent Signals', 'A prospect opens your email three times — you never see it.'],
        ['Leaking Referrals', 'Warm inbound goes cold via lazy follow-up.'],
        ['Unqualified Calls', 'Your hours wasted on HR assistants with no budget.'],
      ],
    },
    {
      label: 'Infrastructure & Visibility Deficits',
      items: [
        ['Technical Paralysis', 'No skill to wire CRM webhooks into Slack alerts.'],
        ['Fragmented Data', 'Messy spreadsheets instead of a unified sales dashboard.'],
        ['Invisible Authority', 'Weak LinkedIn kills trust before they reply.'],
        ['The Idle Bench Threat', 'Slow follow-up starves recruiters of job orders.'],
        ['Domain Reputation Ruin', 'Cheap mass-email blasts torch your sender score.'],
      ],
    },
  ];
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionLabel>02 · 15 Bleeding Points</SectionLabel>
        <Heading>
          The complete inventory of <span className="gradient-text">revenue leakage</span>.
        </Heading>
        <p className="mt-6 max-w-3xl text-[#cbd5e1]">
          Almost every recruitment agency at $1–3M has all fifteen leaks running at once. Individually
          they look like minor friction. Stacked, they extract a six-figure tax from your year — every year.
          Read the list. Count how many describe last Tuesday.
        </p>
      </Reveal>
      <div className="mt-12 space-y-10">
        {groups.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 0.08}>
            <div className="mb-4 flex items-baseline justify-between">
              <h3 className="font-display text-2xl md:text-3xl">{g.label}</h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#94a3b8]">
                {g.items.length} leaks
              </span>
            </div>
            <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:gap-5 md:overflow-visible">
              {g.items.map(([title, body], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="glass min-w-[260px] flex-1 snap-start rounded-2xl p-5"
                >
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-[#38bdf8]">
                    {String(gi * 5 + i + 1).padStart(2, '0')}
                  </div>
                  <div className="font-display text-lg leading-snug">{title}</div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#cbd5e1]">{body}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 6 — UNIQUE MECHANISM                                               */
/* -------------------------------------------------------------------------- */

function UniqueMechanism() {
  return (
    <section id="mechanism" className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <SectionLabel>03 · Unique Mechanism</SectionLabel>
            <Heading>
              We don't sell <span className="italic text-[#94a3b8]">leads</span>.
              <br />
              We install <span className="gradient-text">infrastructure</span>.
            </Heading>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <p className="text-[16px] leading-relaxed text-[#cbd5e1] md:text-[17px]">
              The Speed-to-Lead Recapture Engine™ is the only proprietary pipeline infrastructure
              engineered specifically to cure the recruitment founder bottleneck. Generic lead-gen vendors
              hand over a spreadsheet and disappear — ignoring the operational reality that you physically
              cannot reply fast enough while running an agency.
            </p>
            <p className="mt-5 text-[16px] leading-relaxed text-[#cbd5e1] md:text-[17px]">
              The mechanism removes you from the follow-up loop entirely. API-driven routing fuses with
              human interception to salvage profit the instant intent fires. Real-time signal tracking, a
              dedicated specialist on the other end, no executive ever left waiting. Domain reputation,
              brand voice, calendar — all protected. The agency converts from a reactive hustle into a
              proactive, zero-leakage enterprise asset.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-4">
              {[
                { v: '< 3s', l: 'Alert latency' },
                { v: '1-to-1', l: 'Human bridge' },
                { v: '100%', l: 'BANT filtered' },
              ].map((m) => (
                <div key={m.l} className="glass rounded-xl p-4">
                  <div className="font-display text-2xl text-white">{m.v}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#94a3b8]">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 7 — HOW IT WORKS (interactive stepper)                             */
/* -------------------------------------------------------------------------- */

const HOW_STEPS = [
  {
    n: '01',
    icon: Webhook,
    title: 'Technical Foundation',
    blurb:
      'Advanced CRM webhooks wire directly into your existing digital assets — a data-capture net that monitors every inbound signal, email open, and calendar click in real time.',
    metric: 'Latency · sub-second',
  },
  {
    n: '02',
    icon: Activity,
    title: 'Lead Routing Protocol',
    blurb:
      'The exact second a prospect shows intent, the system bypasses standard email notifications and fires an instant alert directly to your internal team chat — Slack, Teams, your choice.',
    metric: 'Routing · < 3 seconds',
  },
  {
    n: '03',
    icon: Users,
    title: 'The Human Bridge',
    blurb:
      'A highly trained, dedicated Appointment Setter intercepts the hiring manager in under three seconds using proprietary conversational playbooks — transitioning the chat into business dialogue.',
    metric: 'Intercept · always-on',
  },
  {
    n: '04',
    icon: Filter,
    title: 'BANT Qualification Filter',
    blurb:
      'The setter executes a rigorous Budget, Authority, Need, Timeline checklist. HR time-wasters are disqualified before they ever see your calendar. Only decision-makers reach you.',
    metric: 'Filter · 100% pre-call',
  },
  {
    n: '05',
    icon: GaugeCircle,
    title: 'Command Center',
    blurb:
      'All interactions log into a single-screen dashboard. Absolute financial visibility — track which campaigns generate cash without ever opening the inbox yourself.',
    metric: 'Visibility · single pane',
  },
];

function HowItWorks() {
  const [active, setActive] = useState(0);
  const Active = HOW_STEPS[active].icon;
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionLabel>04 · How It Works</SectionLabel>
        <Heading>
          Five stages. <span className="gradient-text">One uninterruptible pipeline.</span>
        </Heading>
        <p className="mt-6 max-w-2xl text-[#cbd5e1]">
          A cohesive, multi-stage architecture that integrates across your business in 30 days flat.
          Click any stage to expand the technical brief — every component is documented, owned, and managed.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <div className="space-y-2">
            {HOW_STEPS.map((s, i) => {
              const open = i === active;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`group w-full cursor-pointer rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                    open
                      ? 'border-[#38bdf8]/40 bg-white/[0.05] ring-azure'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] tracking-widest text-[#38bdf8]">{s.n}</span>
                      <span className="font-display text-lg md:text-xl">{s.title}</span>
                    </div>
                    <s.icon
                      className={`h-5 w-5 ${open ? 'text-[#38bdf8]' : 'text-[#94a3b8] group-hover:text-white'}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="glass-strong relative h-full overflow-hidden rounded-3xl p-7 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#6366f1]">
                  <Active className="h-7 w-7 text-[#03050b]" />
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
                  {HOW_STEPS[active].title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#cbd5e1] md:text-base">
                  {HOW_STEPS[active].blurb}
                </p>
                <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-[#38bdf8]">
                  <Sparkles className="h-3.5 w-3.5" />
                  {HOW_STEPS[active].metric}
                </div>
              </motion.div>
            </AnimatePresence>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#38bdf8]/20 blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 8 — DIFFERENTIATION                                                */
/* -------------------------------------------------------------------------- */

function Differentiation() {
  const rows = [
    ['Lead source', 'Generic scraped lists', 'Verified, intent-tracked targets'],
    ['Speed-to-lead', '24 to 72 hours', 'Under 3 seconds, end-to-end'],
    ['Execution', 'Handed to you to chase', 'Dedicated setter inside your CRM'],
    ['Qualification', 'You filter on the call', 'BANT-filtered before calendar invite'],
    ['Brand control', 'Cheap mass email blasts', 'Domain protection + playbooks'],
    ['Reporting', 'Spreadsheets, manual export', 'Single-pane financial dashboard'],
    ['Outcome', 'More noise, no margin', 'Retained mandates, predictable cash'],
  ];
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionLabel>05 · The Difference</SectionLabel>
        <Heading>
          Holistic infrastructure vs.{' '}
          <span className="italic text-[#94a3b8]">"send-us-the-leads"</span> vendors.
        </Heading>
        <p className="mt-6 max-w-2xl text-[#cbd5e1]">
          Traditional vendors stop at the spreadsheet hand-off — execution becomes your problem. We wire
          the CRM, supply the trained talent, manage the setter, and report against your P&L. Your daily
          routine doesn't change. The pipeline does.
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mt-12">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="hidden grid-cols-12 border-b border-white/10 bg-white/[0.03] px-6 py-4 font-mono text-[11px] uppercase tracking-widest text-[#94a3b8] md:grid">
            <div className="col-span-4">Dimension</div>
            <div className="col-span-4 flex items-center gap-2">
              <X className="h-3.5 w-3.5 text-[#fb7185]" /> Traditional vendor
            </div>
            <div className="col-span-4 flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-[#5eead4]" /> Systemetic Pipeline
            </div>
          </div>
          {rows.map(([k, a, b], i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="border-b border-white/5 px-5 py-5 last:border-b-0 hover:bg-white/[0.03] md:grid md:grid-cols-12 md:gap-4 md:px-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#38bdf8] md:hidden">
                {k}
              </div>
              <div className="hidden text-sm text-[#cbd5e1] md:col-span-4 md:block">{k}</div>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:col-span-8 md:mt-0 md:grid-cols-2 md:gap-4">
                <div className="flex items-start gap-2 text-sm text-[#94a3b8]">
                  <X className="mt-0.5 h-3.5 w-3.5 flex-none text-[#fb7185]" />
                  <span className="line-through decoration-[#fb7185]/40">{a}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-white">
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-[#5eead4]" />
                  <span>{b}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 9 — KEY OUTCOMES (animated metrics)                                */
/* -------------------------------------------------------------------------- */

function KeyOutcomes() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const cards = [
    { v: 3, suffix: ' min', l: 'Speed-to-lead, top to bottom of funnel' },
    { v: 30, suffix: '%', l: 'Lift in chat-to-call conversion' },
    { v: 20, suffix: ' hrs', l: 'Reclaimed every week for fulfilment' },
    { v: 0, suffix: '', l: 'Dropped leads, by guarantee' },
  ];
  return (
    <section ref={ref} className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionLabel>06 · Key Outcomes</SectionLabel>
        <Heading>
          What changes in <span className="gradient-text">ninety days</span>.
        </Heading>
        <p className="mt-6 max-w-2xl text-[#cbd5e1]">
          Hard, measurable transformations across the agency. You decouple personal time from business
          development, retire the anxiety of missing inbound, and recapture the placement fees that
          would have walked. Mathematical, not aspirational — and every number is tracked in the dashboard.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {cards.map((c, i) => (
          <OutcomeStat key={i} delay={i * 0.1} start={inView} {...c} />
        ))}
      </div>
    </section>
  );
}

function OutcomeStat({
  v,
  suffix,
  l,
  start,
  delay,
}: {
  v: number;
  suffix: string;
  l: string;
  start: boolean;
  delay: number;
}) {
  const val = useCountUp(v, 1500, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-6 md:p-7"
    >
      <div className="font-display text-4xl text-white md:text-5xl">
        {Math.round(val).toLocaleString()}
        <span className="text-[#38bdf8]">{suffix}</span>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-[#cbd5e1]">{l}</div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 10 — ROI CALCULATOR                                                */
/* -------------------------------------------------------------------------- */

function AnimatedNumber({
  value,
  format,
}: {
  value: number;
  format: (n: number) => string;
}) {
  const spring = useSpring(value, { stiffness: 110, damping: 22, mass: 0.55 });
  const [display, setDisplay] = useState(format(value));
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) {
      setDisplay(format(value));
      spring.jump(value);
      return;
    }
    spring.set(value);
  }, [value, spring, format, reduce]);
  useEffect(() => {
    const unsub = spring.on('change', (latest) => setDisplay(format(latest)));
    return () => unsub();
  }, [spring, format]);
  return <span>{display}</span>;
}

function ROICalculator() {
  const [fee, setFee] = useState(25000);
  const [salvaged, setSalvaged] = useState(2);
  const [investment, setInvestment] = useState(7500);
  const gross = fee * salvaged;
  const net = gross - investment;
  const roi = investment > 0 ? Math.round((net / investment) * 100) : 0;
  const multiplier = investment > 0 ? gross / investment : 0;
  const maxScale = Math.max(gross, investment) || 1;
  const investmentW = (investment / maxScale) * 100;
  const grossW = (gross / maxScale) * 100;

  const fmtUSD = useCallback((v: number) => `$${Math.round(v).toLocaleString()}`, []);
  const fmtPct = useCallback((v: number) => `${Math.round(v).toLocaleString()}%`, []);
  const fmtMult = useCallback((v: number) => `${v.toFixed(1)}× multiplier`, []);

  return (
    <section id="roi" className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionLabel>07 · ROI Math, Live</SectionLabel>
        <Heading>
          Move the sliders. <span className="gradient-text">Watch the arbitrage.</span>
        </Heading>
        <p className="mt-6 max-w-2xl text-[#cbd5e1]">
          We don't sell abstract marketing concepts. We sell mathematical certainty. Set your average
          placement fee, the number of deals you'd salvage in 90 days, and your investment level. The
          numbers recalculate in real time.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <GlassCard className="p-7 md:p-8">
            <Slider
              label="Average placement fee"
              value={fee}
              min={10000}
              max={75000}
              step={1000}
              onChange={setFee}
              format={(v) => `$${(v / 1000).toFixed(0)}K`}
            />
            <div className="my-7 h-px bg-white/10" />
            <Slider
              label="Deals salvaged in 90 days"
              value={salvaged}
              min={1}
              max={10}
              step={1}
              onChange={setSalvaged}
              format={(v) => `${v}`}
            />
            <div className="my-7 h-px bg-white/10" />
            <Slider
              label="Total 90-day investment"
              value={investment}
              min={2500}
              max={30000}
              step={500}
              onChange={setInvestment}
              format={(v) => `$${(v / 1000).toFixed(1)}K`}
            />
          </GlassCard>
        </div>
        <div className="md:col-span-7">
          <div className="glass-strong relative h-full overflow-hidden rounded-3xl p-7 md:p-10">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#0ea5e9]/30 blur-3xl"
              animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.85, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-[#a855f7]/25 blur-3xl"
              animate={{ scale: [1.15, 1, 1.15], opacity: [0.45, 0.75, 0.45] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#5eead4]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5eead4] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5eead4]" />
              </span>
              Live · recalculating
            </div>

            <div className="relative mt-5 grid grid-cols-2 gap-6">
              <AnimatedMetric label="Gross revenue recaptured" valueNum={gross} format={fmtUSD} />
              <AnimatedMetric label="Your investment" valueNum={investment} format={fmtUSD} sub />
              <AnimatedMetric label="Net profit" valueNum={net} format={fmtUSD} />
              <AnimatedMetric
                label="90-day cash ROI"
                valueNum={roi}
                format={fmtPct}
                gold
                pulsing
              />
            </div>

            <div className="relative mt-7 space-y-4 border-t border-white/10 pt-6">
              <div>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-mono uppercase tracking-widest text-[#94a3b8]">Investment</span>
                  <span className="font-mono text-[#cbd5e1]">${investment.toLocaleString()}</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#fb7185] to-[#fb7185]/70"
                    animate={{ width: `${investmentW}%` }}
                    transition={{ type: 'spring', stiffness: 110, damping: 22 }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-mono uppercase tracking-widest text-[#94a3b8]">Gross recaptured</span>
                  <span className="font-mono text-[#cbd5e1]">${gross.toLocaleString()}</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
                  <motion.div
                    className="relative h-full bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#a855f7]"
                    animate={{ width: `${grossW}%` }}
                    transition={{ type: 'spring', stiffness: 110, damping: 22 }}
                  >
                    <div className="shimmer-line absolute inset-0 overflow-hidden rounded-full" />
                  </motion.div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f4cf6a]/30 bg-[#f4cf6a]/[0.06] px-3 py-1 font-mono text-[11px] tracking-tight text-[#f4cf6a]">
                <Sparkles className="h-3 w-3" />
                <AnimatedNumber value={multiplier} format={fmtMult} />
              </div>
            </div>

            <div className="relative mt-7 border-t border-white/10 pt-6">
              <p className="text-sm text-[#cbd5e1]">
                Conservative case. Catching{' '}
                <span className="font-mono text-white">{salvaged}</span> warm lead{salvaged > 1 ? 's' : ''} at{' '}
                <span className="font-mono text-white">${(fee / 1000).toFixed(0)}K</span> covers the
                full infrastructure and prints{' '}
                <span className="font-mono text-[#5eead4]">{roi.toLocaleString()}%</span> ROI inside
                90 days.
              </p>
              <div className="mt-5">
                <CTA size="lg" icon={<Calendar className="h-5 w-5" />}>
                  Pressure-test these numbers with us
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedMetric({
  label,
  valueNum,
  format,
  sub,
  gold,
  pulsing,
}: {
  label: string;
  valueNum: number;
  format: (n: number) => string;
  sub?: boolean;
  gold?: boolean;
  pulsing?: boolean;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#94a3b8]">{label}</div>
      <div
        className={`mt-2 break-words font-display text-[26px] leading-none sm:text-3xl md:text-4xl ${
          gold ? 'gradient-text-gold' : sub ? 'text-[#cbd5e1]' : 'text-white'
        } ${pulsing ? 'pulse-glow-text' : ''}`}
      >
        <AnimatedNumber value={valueNum} format={format} />
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  format: (n: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#94a3b8]">{label}</label>
        <span className="font-display text-2xl text-white">{format(value)}</span>
      </div>
      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-y-1/2 left-0 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#6366f1]"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          className="relative h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_rgba(56,189,248,0.45),0_0_24px_rgba(56,189,248,0.6)]
            [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0"
        />
      </div>
    </div>
  );
}


/* -------------------------------------------------------------------------- */
/* SECTION 11 — TIER PLANS                                                    */
/* -------------------------------------------------------------------------- */

const TIERS = [
  {
    id: 't1',
    name: 'Speed-to-Lead Foundation',
    short: 'Foundation',
    for: '$500K – $1.5M agencies',
    price: 2500,
    value: 4500,
    save: 44,
    roi: 566,
    headline: 'Install the baseline instant-response infrastructure.',
    bullets: [
      'Advanced CRM Lead Routing & Webhooks',
      'B2B Cold Email Infrastructure',
      'LinkedIn Inbound Authority Makeover',
      'Internal Sales Dashboarding',
      'Cold Outreach Script Vault (bonus)',
    ],
    guarantee:
      'If CRM webhooks fail to route a captured lead to your team chat under 5 minutes, billing pauses until the routing is flawless.',
  },
  {
    id: 't2',
    name: 'Pipeline Recapture Optimization',
    short: 'Optimization',
    for: '$1.5M – $3M agencies',
    price: 4500,
    value: 10500,
    save: 57,
    roi: 455,
    headline: 'Add the human bridge. Sever your time from your pipeline.',
    badge: 'Most popular',
    bullets: [
      'Everything in Foundation, plus:',
      'Appointment Setter Sourcing & Placement',
      'Pre-Call BANT Qualification Filtering',
      'Omni-Channel Conversational Playbooks',
      'B2B Lifecycle Nurture Campaigns (3–6 mo)',
      'AI-Driven Proof Asset Generation',
      'ABM Retargeting Strategy + Objection Cheatsheet',
    ],
    guarantee:
      'If we do not deliver at least 10 BANT-qualified meetings in 30 days, we work for free until we do.',
  },
  {
    id: 't3',
    name: 'Enterprise Zero-Leakage Acceleration',
    short: 'Enterprise',
    for: '$3M+ scaling visionaries',
    price: 7500,
    value: 18500,
    save: 59,
    roi: 833,
    headline: 'Market monopolization. Engineered for an eight-figure exit.',
    bullets: [
      'Everything in Foundation + Optimization, plus:',
      'Account-Based Marketing (ABM) Ads Management',
      'Multi-Touch Intent Scoring',
      'Custom MERN-Stack Sales Analytics',
      'Retained Search Ascension Playbook',
      'Elite Network Content Calendar + Quarterly Scaling Call',
    ],
    guarantee:
      '15 BANT-qualified executive meetings per month — or we work for free. ABM ads generate measurable intent in 90 days, or we manage the ads at no cost.',
  },
];

function TierPlans() {
  const [active, setActive] = useState<'t1' | 't2' | 't3'>('t2');
  const t = TIERS.find((x) => x.id === active)!;
  return (
    <section id="tiers" className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionLabel>08 · The Architecture</SectionLabel>
        <Heading>
          Three tiers. <span className="gradient-text">One escalating moat.</span>
        </Heading>
        <p className="mt-6 max-w-2xl text-[#cbd5e1]">
          Foundation installs the plumbing. Optimization adds the human bridge. Acceleration
          monopolizes the market. Pick the floor your revenue dictates.
        </p>
      </Reveal>

      <div className="mt-10 inline-flex w-full max-w-md flex-wrap rounded-full border border-white/10 bg-white/[0.02] p-1 sm:w-auto sm:flex-nowrap">
        {TIERS.map((tier) => (
          <button
            key={tier.id}
            onClick={() => setActive(tier.id as any)}
            className={`relative flex-1 cursor-pointer whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium tracking-tight transition-colors sm:flex-none sm:px-4 md:text-sm ${
              active === tier.id ? 'text-[#03050b]' : 'text-[#cbd5e1] hover:text-white'
            }`}
          >
            {active === tier.id && (
              <motion.span
                layoutId="tier-bg"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#a5b4fc]"
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              />
            )}
            <span className="relative">{tier.short}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={t.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45 }}
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8"
        >
          <div className="md:col-span-5">
            <GlassCard className="h-full p-7 md:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#94a3b8]">
                  {t.for}
                </span>
                {t.badge && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#f4cf6a]/40 bg-[#f4cf6a]/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#f4cf6a]">
                    <Crown className="h-3 w-3" /> {t.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{t.name}</h3>
              <p className="mt-3 text-[15px] text-[#cbd5e1]">{t.headline}</p>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl text-white md:text-6xl">
                  ${t.price.toLocaleString()}
                </span>
                <span className="text-sm text-[#94a3b8]">/ month</span>
              </div>
              <div className="mt-2 text-sm text-[#cbd5e1]">
                Total value{' '}
                <span className="text-white">${t.value.toLocaleString()}</span> · You save{' '}
                <span className="text-[#5eead4]">{t.save}%</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 p-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#94a3b8]">
                    90-Day ROI
                  </div>
                  <div className="mt-1 font-display text-2xl gradient-text-gold">{t.roi}%</div>
                </div>
                <div className="rounded-xl border border-white/10 p-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#94a3b8]">
                    Onboarding
                  </div>
                  <div className="mt-1 font-display text-2xl text-white">30 days</div>
                </div>
              </div>
              <div className="mt-7">
                <CTA size="lg" icon={<Calendar className="h-5 w-5" />} className="w-full justify-center">
                  Apply for {t.short}
                </CTA>
              </div>
            </GlassCard>
          </div>
          <div className="md:col-span-7">
            <div className="glass-strong h-full rounded-3xl p-7 md:p-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#38bdf8]">
                <Layers className="h-3.5 w-3.5" /> Deliverables
              </div>
              <ul className="space-y-3">
                {t.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-start gap-3 text-[15px] text-[#cbd5e1]"
                  >
                    <Check className="mt-0.5 h-5 w-5 flex-none text-[#5eead4]" />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#5eead4]/25 bg-[#5eead4]/[0.05] p-4">
                <ShieldCheck className="h-5 w-5 flex-none text-[#5eead4]" />
                <p className="text-sm text-[#cbd5e1]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#5eead4]">
                    Guarantee
                  </span>
                  <br />
                  {t.guarantee}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 12 — GUARANTEES                                                    */
/* -------------------------------------------------------------------------- */

function Guarantees() {
  const gs = [
    {
      icon: ShieldCheck,
      title: 'Routing latency or we pause billing',
      body:
        'If CRM webhooks fail to route a captured lead to your team chat within 5 minutes, we pause your billing until the routing is flawless.',
    },
    {
      icon: Target,
      title: '10 BANT-qualified meetings or we work free',
      body:
        'On Tier 2, if fewer than 10 BANT-qualified meetings land in 30 days, we work without retainer until we deliver.',
    },
    {
      icon: TrendingUp,
      title: 'Salvaged pipeline covers setup',
      body:
        'A single recaptured placement fee mathematically covers the entire infrastructure build and multiple months of retainer.',
    },
    {
      icon: Award,
      title: 'Enterprise ABM intent in 90 days',
      body:
        'On Tier 3, if ABM ads do not generate measurable intent signals within 90 days, we manage the campaigns at no cost.',
    },
  ];
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionLabel accent="gold">09 · Guarantees</SectionLabel>
        <Heading>
          We absorb the <span className="italic text-[#f4cf6a]">downside risk</span>.
        </Heading>
        <p className="mt-6 max-w-2xl text-[#cbd5e1]">
          We are not asking for faith. The mechanism is mathematical. If it does not perform, we
          carry the cost — not you.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {gs.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <GlassCard className="h-full p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#f4cf6a]/30 to-[#e2b341]/20 ring-1 ring-[#f4cf6a]/30">
                <g.icon className="h-5 w-5 text-[#f4cf6a]" />
              </div>
              <h3 className="mt-5 font-display text-2xl leading-tight">{g.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[#cbd5e1]">{g.body}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 13 — COST OF INACTION                                              */
/* -------------------------------------------------------------------------- */

function CostOfInaction() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#fb7185]/20 blur-3xl"
        />
        <Reveal>
          <SectionLabel accent="gold">10 · The Math of Waiting</SectionLabel>
          <Heading>
            Inaction is the most <span className="italic text-[#fb7185]">expensive</span> decision you
            make this quarter.
          </Heading>
        </Reveal>
        <Reveal delay={0.1} className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-[15.5px] leading-relaxed text-[#cbd5e1] md:text-base">
              Every week you delay, manual inbox checking leaks another warm lead to a faster
              competitor. Losing just one warm lead per month is $25,000 walking out the door. Waiting
              30 days does not save you the infrastructure fee. It actively costs you $25,000 in lost
              placements. You are stepping over dollars to pick up pennies.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: '$25K', l: 'Avg leak per month' },
              { v: '$300K', l: 'Annualized at 1/mo' },
              { v: '3', l: 'Onboard slots / month' },
              { v: '60 days', l: 'Waitlist once full' },
            ].map((m) => (
              <div key={m.l} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="font-display text-3xl text-white">{m.v}</div>
                <div className="mt-1 text-xs text-[#94a3b8]">{m.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 14 — CAPACITY CONSTRAINT                                           */
/* -------------------------------------------------------------------------- */

function CapacityConstraint() {
  const reduce = useReducedMotion();
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <Reveal>
            <SectionLabel>11 · Capacity</SectionLabel>
            <Heading>
              We onboard <span className="gradient-text">three agencies</span> per month. Then we
              close.
            </Heading>
            <p className="mt-6 text-[#cbd5e1]">
              We do not operate a generic software factory. Building custom CRM webhooks, securing
              secondary domains, and embedding trained setters requires intense technical precision.
              We refuse to compromise delivery quality. Once the three slots are taken, you go on a
              60-day waitlist. A direct competitor in your niche will likely claim the final spot.
            </p>
            <div className="mt-7">
              <CTA size="lg" icon={<Calendar className="h-5 w-5" />}>
                Hold a slot · 30-min review
              </CTA>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-6">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#94a3b8]">
              Current cohort
            </div>
            <div className="mt-2 font-display text-5xl md:text-6xl">
              <span className="text-white">2</span>
              <span className="text-[#94a3b8]"> / 3</span>
              <span className="ml-3 text-base text-[#cbd5e1]">slots taken</span>
            </div>
            <div className="mt-7 h-2 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '66%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
                className="h-full bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#a855f7]"
              />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {['Niche locked', 'Slot held', 'Decision'].map((s, i) => (
                <div
                  key={s}
                  className={`rounded-xl border border-white/10 p-4 text-center ${
                    i < 2 ? 'bg-white/[0.03]' : 'bg-[#38bdf8]/[0.08]'
                  }`}
                >
                  <div className="font-mono text-[9px] uppercase tracking-widest text-[#94a3b8]">
                    Step {i + 1}
                  </div>
                  <div className="mt-1 text-sm text-white">{s}</div>
                </div>
              ))}
            </div>
            {!reduce && (
              <motion.div
                aria-hidden
                className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-[#38bdf8]/20 blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 15 — FOUNDER                                                       */
/* -------------------------------------------------------------------------- */

function Founder() {
  return (
    <section id="founder" className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[40px] bg-[conic-gradient(from_120deg_at_50%_50%,#38bdf8_0deg,#6366f1_120deg,#a855f7_240deg,#38bdf8_360deg)] opacity-40 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2">
                <img
                  src={FOUNDER_IMG}
                  alt="Saad Zia — Founder, Systemetic Pipeline"
                  className="w-full rounded-[24px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#06080f]/80 px-4 py-2 backdrop-blur-lg">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5eead4] opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5eead4]" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#cbd5e1]">
                    Available for review calls
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <SectionLabel>12 · Founder</SectionLabel>
            <Heading>
              <span className="gradient-text">Saad Zia</span>
            </Heading>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#94a3b8]">
              Founder · Pipeline Architect · Systemetic Pipeline
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-[#cbd5e1] md:text-[17px]">
              I built Systemetic Pipeline after watching too many sharp recruitment founders trade
              their evenings for an inbox they could not physically keep up with. The agencies were
              excellent. The fulfilment was elite. The leakage was silent — and lethal. This
              mechanism is the one I wish I'd had a decade earlier.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-[#cbd5e1] md:text-[17px]">
              We don't pitch. On the call we diagnose four numbers: speed-to-lead, qualification
              ratio, calendar utilization, and pipeline velocity. Then we map the missing layer and
              tell you on the spot whether the mechanism fits. If your numbers don't move inside 90
              days, the guarantees carry the cost — not you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-linkedin group inline-flex cursor-pointer items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold text-white"
              >
                <Linkedin className="h-5 w-5" strokeWidth={2.2} />
                Connect on LinkedIn
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <CTA size="md" icon={<Calendar className="h-4 w-4" />}>
                30-min technical review
              </CTA>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-[#cbd5e1] backdrop-blur hover:border-white/25 hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> Message on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 16 — FAQ                                                           */
/* -------------------------------------------------------------------------- */

const FAQS = [
  {
    q: 'How is this different from a lead-gen agency?',
    a: 'Lead-gen agencies sell you raw lists or unqualified meetings. We install proprietary pipeline infrastructure — webhooks, routing, a dedicated setter, BANT filtering, and a single-pane command center. The execution layer is built and managed for you. You change nothing about your daily routine.',
  },
  {
    q: 'How fast can we deploy?',
    a: 'Foundation lands in 30 days. The technical build runs in the background — no learning a new platform, no training requirements on your side. By day 30 your CRM is wired, your setter is embedded, and your routing is live.',
  },
  {
    q: 'What if my niche is small or specialized?',
    a: 'Specialized is preferred. We onboard three agencies per month and refuse to take on two competitors in the same niche. Tight niches respond better to ABM, intent scoring, and the retained-search ascension playbook.',
  },
  {
    q: 'How do you protect my brand and domain reputation?',
    a: 'Secondary domains and warming protocols isolate cold outreach from your primary inbox. The setter operates inside strict, proven conversational playbooks — they sound exactly like your best operator. You retain absolute brand control.',
  },
  {
    q: 'What does success look like in 90 days?',
    a: 'Tier 1: routing live, LinkedIn elevated, dashboard reporting, 2+ salvaged placements (566% ROI floor). Tier 2: 30 BANT-qualified meetings, 3+ retained mandates closed (455% ROI). Tier 3: 45 executive meetings, full ABM omnipresence, 7+ exclusive retained contracts (833% ROI).',
  },
  {
    q: 'What happens if you don\'t deliver?',
    a: 'On Tier 1, billing pauses until routing is flawless. On Tier 2, we work without retainer until 10 BANT meetings land. On Tier 3, we manage ABM at no cost if intent signals don\'t register in 90 days. The downside risk lives on our side.',
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative z-10 mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <SectionLabel>13 · FAQ</SectionLabel>
        <Heading>
          The honest <span className="gradient-text">objections</span>, answered.
        </Heading>
      </Reveal>
      <div className="mt-12 space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 0.05}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className={`group w-full cursor-pointer rounded-2xl border px-6 py-5 text-left transition-all duration-300 ${
                  isOpen
                    ? 'border-[#38bdf8]/40 bg-white/[0.04]'
                    : 'border-white/8 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-display text-lg leading-snug md:text-xl">{f.q}</span>
                  <span
                    className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? 'border-[#38bdf8]/50 bg-[#38bdf8]/20 text-[#38bdf8]'
                        : 'border-white/10 bg-white/[0.04] text-[#94a3b8] group-hover:text-white'
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-[15px] leading-relaxed text-[#cbd5e1]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 17 — FINAL CTA                                                     */
/* -------------------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-32">
      <div className="glass-strong relative overflow-hidden rounded-[40px] p-10 text-center md:p-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.25), transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(99,102,241,0.22), transparent 60%)',
          }}
        />
        <Reveal>
          <SectionLabel>14 · Decision</SectionLabel>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl">
            Stop losing placement fees to <span className="italic text-[#cfe9ff]">faster</span>{' '}
            <span className="gradient-text">competitors</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] text-[#cbd5e1] md:text-base">
            One 30-minute technical review. We benchmark your current routing latency, model your real
            quarterly leakage, and tell you — on the call — whether the mechanism actually fits. No pitch,
            no upsell ladder. If it's a no, we still send the diagnostic and the math, on us.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTA size="lg" icon={<Calendar className="h-5 w-5" />}>
              Book the Technical Review
            </CTA>
            <CTA variant="ghost" size="lg" icon={<WhatsAppIcon className="h-5 w-5" />} href={WHATSAPP_URL}>
              Or WhatsApp us first
            </CTA>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#94a3b8]">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3 w-3" /> Confidential intake
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3" /> No-pitch policy
            </span>
            <span className="inline-flex items-center gap-1.5">
              <InfinityIcon className="h-3 w-3" /> Performance-guaranteed
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION 18 — FOOTER                                                        */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#03050b]/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] text-[#03050b]">
              <Workflow className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg">Systemetic Pipeline</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-[#94a3b8]">
            Parallel Revenue Infrastructure for boutique and mid-market recruitment agencies.
            Engineered to cure the founder bottleneck and recapture leaked pipeline.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#94a3b8]">Mechanism</div>
          <ul className="mt-4 space-y-2 text-sm text-[#cbd5e1]">
            <li><a className="underline-azure" href="#problem">Problem Stack</a></li>
            <li><a className="underline-azure" href="#mechanism">Unique Mechanism</a></li>
            <li><a className="underline-azure" href="#tiers">Tier Plans</a></li>
            <li><a className="underline-azure" href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#94a3b8]">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-[#cbd5e1]">
            <li>
              <a className="inline-flex items-center gap-2 underline-azure" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Calendar className="h-4 w-4 text-[#38bdf8]" />
                Book a 30-min technical review
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 underline-azure" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                WhatsApp · +31 65160899
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 underline-azure" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 text-[#38bdf8]" />
                Saad Zia · LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-[#64748b] md:flex-row md:items-center md:px-8">
          <div>© {new Date().getFullYear()} Systemetic Pipeline. All rights reserved.</div>
          <div className="font-mono uppercase tracking-widest">
            Built with parallel revenue infrastructure · v2.0
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN COMPOSER                                                              */
/* -------------------------------------------------------------------------- */

export default function SystemicPipelineLanding() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-[#03050b] text-[#f3f5fb]">
      <BrandStyles />
      <MeshBackground progress={scrollYProgress} />
      <ScrollProgress progress={scrollYProgress} />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <TrustMarquee />
        <ProblemStack />
        <BottleneckCrisis />
        <UniqueMechanism />
        <HowItWorks />
        <Differentiation />
        <KeyOutcomes />
        <ROICalculator />
        <TierPlans />
        <Guarantees />
        <CostOfInaction />
        <CapacityConstraint />
        <Founder />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
