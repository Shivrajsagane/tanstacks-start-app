import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Layout,
  Palette,
  Sparkles,
  Type,
  Layers,
  Zap,
  MousePointerClick,
  Code2,
  Monitor,
  Tablet,
  Smartphone,
  Check,
  Plus,
  GripVertical,
  X,
  Star,
  HelpCircle,
  Mail,
  DollarSign,
  MessageSquare,
  Image as ImageIcon,
  Rocket,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import heroImg from "@/assets/hero-glass.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Customizr — Design Your Website Your Way" },
      { name: "description", content: "Visual website builder. Pick layouts, themes, fonts and sections — see your design update live." },
      { property: "og:title", content: "Customizr — Design Your Website Your Way" },
      { property: "og:description", content: "Visual website builder with live preview and templates." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Landing,
});

type SectionKey =
  | "layout"
  | "theme"
  | "fonts"
  | "sections"
  | "animations"
  | "preview"
  | "templates";

type SectionItem = {
  key: SectionKey;
  icon: typeof Layout;
  title: string;
  desc: string;
};

const sections: SectionItem[] = [
  { key: "layout", icon: Layout, title: "Layout presets", desc: "Single-page, multi-page, landing or dashboard." },
  { key: "theme", icon: Palette, title: "Theme & colors", desc: "Light, dark, minimal or colorful palettes." },
  { key: "fonts", icon: Type, title: "Google Fonts", desc: "Pair display and body fonts from a curated library." },
  { key: "sections", icon: Layers, title: "Sections", desc: "Hero, features, testimonials, pricing, FAQ." },
  { key: "animations", icon: Zap, title: "Animations", desc: "Hover effects, scroll reveals and transitions." },
  { key: "preview", icon: MousePointerClick, title: "Live preview", desc: "Mirrored instantly on every breakpoint." },
  { key: "templates", icon: Sparkles, title: "Templates", desc: "Portfolio, business, e-commerce or blog." },
];

type SectionBlockKey =
  | "hero"
  | "features"
  | "testimonials"
  | "pricing"
  | "faq"
  | "contact"
  | "footer"
  | "gallery"
  | "cta";

type SectionBlock = {
  key: SectionBlockKey;
  name: string;
  icon: typeof Layout;
  blurb: string;
};

const sectionBlocks: SectionBlock[] = [
  { key: "hero", name: "Hero", icon: Rocket, blurb: "Headline, subhead, CTA." },
  { key: "features", name: "Features", icon: Sparkles, blurb: "3-column highlight grid." },
  { key: "testimonials", name: "Testimonials", icon: Star, blurb: "Social proof quotes." },
  { key: "pricing", name: "Pricing", icon: DollarSign, blurb: "Tiered plan comparison." },
  { key: "faq", name: "FAQ", icon: HelpCircle, blurb: "Expandable Q&A list." },
  { key: "contact", name: "Contact", icon: Mail, blurb: "Form + info block." },
  { key: "footer", name: "Footer", icon: Layers, blurb: "Links, legal, socials." },
  { key: "gallery", name: "Gallery", icon: ImageIcon, blurb: "Masonry image grid." },
  { key: "cta", name: "CTA", icon: MessageSquare, blurb: "Final call to action." },
];

function BlockPreview({ block }: { block: SectionBlock }) {
  switch (block.key) {
    case "hero":
      return (
        <div className="space-y-2 p-3">
          <div className="mx-auto h-2 w-2/3 rounded bg-primary/60" />
          <div className="mx-auto h-1.5 w-1/2 rounded bg-muted-foreground/40" />
          <div className="mx-auto mt-2 h-3 w-16 rounded bg-gradient-hero" />
        </div>
      );
    case "features":
      return (
        <div className="grid grid-cols-3 gap-1.5 p-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1 rounded bg-surface-elevated p-1.5">
              <div className="h-2 w-2 rounded bg-primary/70" />
              <div className="h-1 w-full rounded bg-muted-foreground/40" />
              <div className="h-1 w-2/3 rounded bg-muted-foreground/30" />
            </div>
          ))}
        </div>
      );
    case "testimonials":
      return (
        <div className="grid grid-cols-2 gap-1.5 p-3">
          {[0, 1].map((i) => (
            <div key={i} className="rounded bg-surface-elevated p-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-2 w-2 fill-primary text-primary" />
                ))}
              </div>
              <div className="mt-1 h-1 w-full rounded bg-muted-foreground/40" />
              <div className="mt-0.5 h-1 w-2/3 rounded bg-muted-foreground/30" />
            </div>
          ))}
        </div>
      );
    case "pricing":
      return (
        <div className="grid grid-cols-3 gap-1.5 p-3">
          {["Free", "Pro", "Team"].map((t, i) => (
            <div key={t} className={`rounded p-1.5 text-center ${i === 1 ? "bg-gradient-hero/30 ring-1 ring-primary" : "bg-surface-elevated"}`}>
              <div className="text-[8px] text-muted-foreground">{t}</div>
              <div className="mt-1 h-2 w-full rounded bg-muted-foreground/40" />
            </div>
          ))}
        </div>
      );
    case "faq":
      return (
        <div className="space-y-1 p-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between rounded bg-surface-elevated px-2 py-1">
              <div className="h-1 w-2/3 rounded bg-muted-foreground/40" />
              <Plus className="h-2 w-2 text-primary" />
            </div>
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="grid grid-cols-2 gap-1.5 p-3">
          <div className="space-y-1">
            <div className="h-2 rounded bg-surface-elevated" />
            <div className="h-2 rounded bg-surface-elevated" />
            <div className="h-4 rounded bg-surface-elevated" />
          </div>
          <div className="space-y-1">
            <div className="h-1 w-2/3 rounded bg-muted-foreground/40" />
            <div className="h-1 w-1/2 rounded bg-muted-foreground/30" />
            <div className="mt-2 h-3 w-12 rounded bg-gradient-hero" />
          </div>
        </div>
      );
    case "footer":
      return (
        <div className="grid grid-cols-4 gap-1.5 p-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="space-y-0.5">
              <div className="h-1.5 w-2/3 rounded bg-primary/60" />
              <div className="h-1 w-full rounded bg-muted-foreground/30" />
              <div className="h-1 w-3/4 rounded bg-muted-foreground/30" />
            </div>
          ))}
        </div>
      );
    case "gallery":
      return (
        <div className="grid grid-cols-4 gap-1 p-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`rounded bg-gradient-hero/40 ${i % 3 === 0 ? "h-6" : "h-4"}`} />
          ))}
        </div>
      );
    case "cta":
      return (
        <div className="flex flex-col items-center gap-1 p-3">
          <div className="h-2 w-2/3 rounded bg-primary/60" />
          <div className="h-1 w-1/2 rounded bg-muted-foreground/40" />
          <div className="mt-1 h-3 w-16 rounded bg-gradient-hero" />
        </div>
      );
  }
}

function SectionsBuilder({ design, setDesign }: PanelProps) {
  const layout = design.blocks;
  const setLayout = (updater: (prev: SectionBlockKey[]) => SectionBlockKey[]) =>
    setDesign((d) => ({ ...d, blocks: updater(d.blocks) }));
  const [selected, setSelected] = useState<SectionBlockKey>("hero");
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  const selectedBlock = sectionBlocks.find((b) => b.key === selected)!;

  const insert = (key: SectionBlockKey) => setLayout((prev) => [...prev, key]);
  const remove = (i: number) => setLayout((prev) => prev.filter((_, idx) => idx !== i));

  const onDragStart = (i: number) => setDragIndex(i);
  const onDragOver = (e: React.DragEvent, i: number) => {
    e.preventDefault();
    setOverIndex(i);
  };
  const onDrop = (i: number) => {
    if (dragIndex === null || dragIndex === i) {
      setDragIndex(null);
      setOverIndex(null);
      return;
    }
    setLayout((prev) => {
      const next = [...prev];
      const [moved] = next.splice(dragIndex, 1);
      next.splice(i, 0, moved);
      return next;
    });
    setDragIndex(null);
    setOverIndex(null);
  };

  return (
    <div>
      <h3 className="font-display text-2xl font-semibold">Sections</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Click a block to preview it, then insert into your layout. Drag to reorder.
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr]">
        {/* Library */}
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Library
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {sectionBlocks.map((b) => {
              const isActive = b.key === selected;
              return (
                <button
                  key={b.key}
                  type="button"
                  onClick={() => setSelected(b.key)}
                  className={`group flex flex-col items-start gap-1 rounded-lg border p-2.5 text-left transition-all ${
                    isActive
                      ? "border-primary bg-gradient-hero/15 shadow-glow"
                      : "border-border bg-surface-elevated hover:border-primary/50"
                  }`}
                >
                  <span className="flex items-center gap-1.5 text-xs font-semibold">
                    <b.icon className="h-3.5 w-3.5 text-primary" />
                    {b.name}
                  </span>
                  <span className="text-[10px] leading-tight text-muted-foreground">{b.blurb}</span>
                </button>
              );
            })}
          </div>

          {/* Selected preview */}
          <div className="mt-4 overflow-hidden rounded-lg border border-primary/30 bg-background animate-fade-in" key={selected}>
            <div className="flex items-center justify-between border-b border-border bg-surface-elevated/60 px-3 py-1.5">
              <span className="flex items-center gap-1.5 text-xs font-medium">
                <selectedBlock.icon className="h-3 w-3 text-primary" />
                {selectedBlock.name} preview
              </span>
              <button
                type="button"
                onClick={() => insert(selected)}
                className="inline-flex items-center gap-1 rounded-md bg-gradient-hero px-2 py-1 text-[10px] font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
              >
                <Plus className="h-3 w-3" /> Insert
              </button>
            </div>
            <BlockPreview block={selectedBlock} />
          </div>
        </div>

        {/* Layout canvas */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Your layout
            </span>
            <span className="text-[10px] text-muted-foreground">{layout.length} sections</span>
          </div>
          <div className="min-h-[280px] space-y-2 rounded-lg border border-dashed border-border bg-background/50 p-2">
            {layout.length === 0 && (
              <div className="flex h-64 items-center justify-center text-center text-xs text-muted-foreground">
                Drag or insert blocks from the library to start building.
              </div>
            )}
            {layout.map((key, i) => {
              const block = sectionBlocks.find((b) => b.key === key)!;
              const isOver = overIndex === i && dragIndex !== null && dragIndex !== i;
              const isDragging = dragIndex === i;
              return (
                <div
                  key={`${key}-${i}`}
                  draggable
                  onDragStart={() => onDragStart(i)}
                  onDragOver={(e) => onDragOver(e, i)}
                  onDrop={() => onDrop(i)}
                  onDragEnd={() => {
                    setDragIndex(null);
                    setOverIndex(null);
                  }}
                  className={`group overflow-hidden rounded-md border bg-surface-elevated transition-all animate-fade-in ${
                    isDragging ? "opacity-40" : ""
                  } ${isOver ? "border-primary shadow-glow" : "border-border"}`}
                >
                  <div className="flex items-center justify-between border-b border-border/60 bg-surface px-2 py-1">
                    <span className="flex items-center gap-1.5 text-[11px] font-medium">
                      <GripVertical className="h-3 w-3 cursor-grab text-muted-foreground" />
                      <block.icon className="h-3 w-3 text-primary" />
                      {block.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => remove(i)}
                      aria-label={`Remove ${block.name}`}
                      className="rounded p-0.5 text-muted-foreground transition hover:bg-destructive/20 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                  <BlockPreview block={block} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

type LayoutPreset = "landing" | "multipage" | "dashboard" | "bento";
type Device = "desktop" | "laptop" | "tablet" | "mobile" | "watch";
type AnimationKey = "scale" | "glow" | "lift" | "tilt" | "fade" | "slide" | "blur" | "bounce";
type ExportFormat = "html" | "react" | "next" | "vue" | "svelte" | "astro" | "zip" | "figma";

type Palette = {
  id: string;
  name: string;
  colors: [string, string, string, string]; // bg, surface, accent2, primary
};

type FontPair = {
  id: string;
  heading: string;
  body: string;
  headingFamily: string;
  bodyFamily: string;
};

type Template = {
  id: string;
  name: string;
  tag: string;
  layout: LayoutPreset;
  paletteId: string;
  fontId: string;
  blocks: SectionBlockKey[];
  headline: string;
};

const palettes: Palette[] = [
  { id: "indigo", name: "Midnight Indigo", colors: ["#0a0a1a", "#141432", "#4f46e5", "#a78bfa"] },
  { id: "cloud", name: "Cloud White", colors: ["#fafbfc", "#e8ecf1", "#3b82f6", "#1e3a8a"] },
  { id: "noir", name: "Noir & Gold", colors: ["#0d0d0d", "#1a1a1a", "#c9a84c", "#f0d78c"] },
  { id: "emerald", name: "Emerald Prestige", colors: ["#064e3b", "#0d7a5f", "#c9a84c", "#f5f0e0"] },
  { id: "coral", name: "Electric Coral", colors: ["#1a0f1a", "#2d1830", "#ff6b6b", "#ee5a70"] },
  { id: "mint", name: "Neon Mint", colors: ["#0d1b2a", "#1b4332", "#2dd4a8", "#73ffb8"] },
  { id: "sand", name: "Warm Sand", colors: ["#faf8f5", "#f0ebe3", "#c9b99a", "#8b7355"] },
  { id: "ocean", name: "Ocean Deep", colors: ["#0c2340", "#1a4a6e", "#2d8a9e", "#5cbdb9"] },
  { id: "sunset", name: "Sunset Blaze", colors: ["#1a0a0a", "#3d1a1a", "#ff6b35", "#e84393"] },
  { id: "forest", name: "Forest & Moss", colors: ["#1a3c2a", "#2d5a3d", "#5a8a5c", "#a0c49d"] },
  { id: "blush", name: "Blush & Lavender", colors: ["#f8e8ee", "#e8c5d0", "#c9a0dc", "#9b72cf"] },
  { id: "slate", name: "Slate & Steel", colors: ["#2d3748", "#4a5568", "#718096", "#a0aec0"] },
];

function resolvePalette(design: DesignState): Palette {
  if (design.paletteId === "custom") {
    const c = design.customPalette;
    return { id: "custom", name: "Custom", colors: [c[0], c[1], c[2], c[3]] };
  }
  return palettes.find((p) => p.id === design.paletteId) ?? palettes[0];
}

const fontPairs: FontPair[] = [
  { id: "grotesk", heading: "Space Grotesk", body: "DM Sans", headingFamily: "'Space Grotesk', sans-serif", bodyFamily: "'DM Sans', sans-serif" },
  { id: "playfair", heading: "Playfair Display", body: "Inter", headingFamily: "'Playfair Display', serif", bodyFamily: "'Inter', sans-serif" },
  { id: "bebas", heading: "Bebas Neue", body: "Barlow", headingFamily: "'Bebas Neue', sans-serif", bodyFamily: "'Barlow', sans-serif" },
  { id: "mono", heading: "JetBrains Mono", body: "Work Sans", headingFamily: "'JetBrains Mono', monospace", bodyFamily: "'Work Sans', sans-serif" },
  { id: "syne", heading: "Syne", body: "Plus Jakarta Sans", headingFamily: "'Syne', sans-serif", bodyFamily: "'Plus Jakarta Sans', sans-serif" },
  { id: "cormorant", heading: "Cormorant Garamond", body: "Karla", headingFamily: "'Cormorant Garamond', serif", bodyFamily: "'Karla', sans-serif" },
  { id: "abril", heading: "Abril Fatface", body: "Cabin", headingFamily: "'Abril Fatface', serif", bodyFamily: "'Cabin', sans-serif" },
  { id: "outfit", heading: "Outfit", body: "Figtree", headingFamily: "'Outfit', sans-serif", bodyFamily: "'Figtree', sans-serif" },
  { id: "instrument", heading: "Instrument Serif", body: "Work Sans", headingFamily: "'Instrument Serif', serif", bodyFamily: "'Work Sans', sans-serif" },
  { id: "archivo", heading: "Archivo Black", body: "Hind", headingFamily: "'Archivo Black', sans-serif", bodyFamily: "'Hind', sans-serif" },
];

const templates: Template[] = [
  { id: "portfolio", name: "Portfolio", tag: "Creative", layout: "bento", paletteId: "noir", fontId: "playfair", blocks: ["hero", "gallery", "testimonials", "contact"], headline: "Selected works, 2026" },
  { id: "saas", name: "SaaS Landing", tag: "Business", layout: "landing", paletteId: "indigo", fontId: "grotesk", blocks: ["hero", "features", "pricing", "faq", "cta"], headline: "Ship your idea this week" },
  { id: "storefront", name: "Storefront", tag: "E-commerce", layout: "multipage", paletteId: "cloud", fontId: "grotesk", blocks: ["hero", "gallery", "features", "footer"], headline: "Designed for everyday" },
  { id: "editorial", name: "Editorial", tag: "Blog", layout: "multipage", paletteId: "emerald", fontId: "playfair", blocks: ["hero", "features", "footer"], headline: "Long-form, thoughtfully laid out" },
  { id: "agency", name: "Agency", tag: "Studio", layout: "bento", paletteId: "coral", fontId: "syne", blocks: ["hero", "gallery", "features", "testimonials", "contact"], headline: "We build bold brands" },
  { id: "startup", name: "Startup", tag: "Tech", layout: "landing", paletteId: "mint", fontId: "outfit", blocks: ["hero", "features", "testimonials", "pricing", "cta"], headline: "The future, now shipping" },
  { id: "wellness", name: "Wellness", tag: "Lifestyle", layout: "multipage", paletteId: "sand", fontId: "cormorant", blocks: ["hero", "features", "gallery", "contact"], headline: "Slow down. Breathe in." },
  { id: "magazine", name: "Magazine", tag: "Editorial", layout: "multipage", paletteId: "blush", fontId: "abril", blocks: ["hero", "gallery", "features", "footer"], headline: "Stories worth your time" },
  { id: "consultancy", name: "Consultancy", tag: "Services", layout: "landing", paletteId: "ocean", fontId: "instrument", blocks: ["hero", "features", "testimonials", "contact"], headline: "Strategy that ships" },
  { id: "event", name: "Event", tag: "Conference", layout: "landing", paletteId: "sunset", fontId: "bebas", blocks: ["hero", "features", "pricing", "cta"], headline: "Two days. One city. Infinite ideas." },
];

export type DesignState = {
  layout: LayoutPreset;
  paletteId: string;
  fontId: string;
  blocks: SectionBlockKey[];
  animation: AnimationKey;
  device: Device;
  exportFormat: ExportFormat;
  headline: string;
  radius: number;
  density: number;
  shadow: number;
  darkMode: boolean;
  customPalette: string[];
};

const defaultDesign: DesignState = {
  layout: "landing",
  paletteId: "indigo",
  fontId: "grotesk",
  blocks: ["hero", "features", "testimonials", "cta"],
  animation: "lift",
  device: "desktop",
  exportFormat: "react",
  headline: "Your Website, Your Way",
  radius: 16,
  density: 50,
  shadow: 50,
  darkMode: true,
  customPalette: ["#0a0a1a", "#141432", "#f54927", "#ffb199"],
};

type PanelProps = {
  design: DesignState;
  setDesign: React.Dispatch<React.SetStateAction<DesignState>>;
};

function PanelHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function LayoutPanel({ design, setDesign }: PanelProps) {
  const presets: { key: LayoutPreset; name: string; lines: string[] }[] = [
    { key: "landing", name: "Landing", lines: ["h-16", "h-24", "h-6 w-2/3", "h-6 w-1/2"] },
    { key: "multipage", name: "Multi-page", lines: ["h-6", "h-20", "h-20", "h-6"] },
    { key: "dashboard", name: "Dashboard", lines: ["h-4", "h-32", "h-4", "h-4"] },
    { key: "bento", name: "Bento", lines: ["h-12", "h-12", "h-20", "h-8"] },
  ];
  return (
    <div className="space-y-5">
      <PanelHeader title="Layout presets" desc="Pick the blueprint — every other panel adapts to it." />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {presets.map((l) => {
          const active = design.layout === l.key;
          return (
            <button
              key={l.key}
              type="button"
              onClick={() => setDesign((d) => ({ ...d, layout: l.key }))}
              className={`group relative rounded-xl border p-3 text-left transition-all duration-300 ${
                active
                  ? "border-primary bg-gradient-hero/15 shadow-glow scale-[1.03]"
                  : "border-border bg-surface-elevated hover:border-primary/50 hover:-translate-y-0.5"
              }`}
            >
              <div className="space-y-1.5">
                {l.lines.map((c, i) => (
                  <div key={i} className={`rounded ${active ? "bg-primary/60" : "bg-primary/30"} ${c}`} />
                ))}
              </div>
              <p className="mt-3 text-center text-xs font-medium">{l.name}</p>
              {active && <Check className="absolute right-2 top-2 h-3.5 w-3.5 text-primary" />}
            </button>
          );
        })}
      </div>
      <LivePreview design={design} label="Layout preview" />
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-2 block text-xs font-medium text-muted-foreground">
            Corner radius — {design.radius}px
          </label>
          <input
            type="range"
            min={0}
            max={32}
            value={design.radius}
            onChange={(e) => setDesign((d) => ({ ...d, radius: Number(e.target.value) }))}
            className="w-full accent-primary"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-medium text-muted-foreground">
            Density — {design.density}%
          </label>
          <input
            type="range"
            min={0}
            max={100}
            value={design.density}
            onChange={(e) => setDesign((d) => ({ ...d, density: Number(e.target.value) }))}
            className="w-full accent-primary"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-medium text-muted-foreground">
            Shadow depth — {design.shadow}%
          </label>
          <input
            type="range"
            min={0}
            max={100}
            value={design.shadow}
            onChange={(e) => setDesign((d) => ({ ...d, shadow: Number(e.target.value) }))}
            className="w-full accent-primary"
          />
        </div>
      </div>
    </div>
  );
}

function ThemePanel({ design, setDesign }: PanelProps) {
  const isCustom = design.paletteId === "custom";
  const palette = resolvePalette(design);
  const tokenLabels = ["Background", "Surface", "Accent", "Highlight"] as const;

  const updateCustomColor = (idx: number, value: string) => {
    setDesign((d) => {
      const next = [...d.customPalette];
      next[idx] = value;
      return { ...d, customPalette: next, paletteId: "custom" };
    });
  };

  const randomizeCustom = () => {
    const rand = () =>
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
    setDesign((d) => ({ ...d, customPalette: [rand(), rand(), rand(), rand()], paletteId: "custom" }));
  };

  return (
    <div className="space-y-5">
      <PanelHeader title="Theme & colors" desc="Pick a palette — the live preview swaps instantly." />
      <div className="flex items-center justify-between rounded-xl border border-border bg-surface-elevated p-3">
        <div>
          <div className="text-sm font-medium">Dark mode</div>
          <div className="text-xs text-muted-foreground">Invert canvas tones for the preview chrome.</div>
        </div>
        <button
          type="button"
          onClick={() => setDesign((d) => ({ ...d, darkMode: !d.darkMode }))}
          aria-pressed={design.darkMode}
          className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
            design.darkMode ? "bg-gradient-hero" : "bg-border"
          }`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-background shadow transition-transform ${
              design.darkMode ? "translate-x-5" : "translate-x-0.5"
            }`}
          />
        </button>
      </div>
      {/* Custom color picker */}
      <div
        className={`rounded-xl border p-4 transition-all duration-300 ${
          isCustom ? "border-primary shadow-glow" : "border-border bg-surface-elevated"
        }`}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-medium">Custom palette</div>
            <div className="text-xs text-muted-foreground">Pick any 4 colors — applied instantly.</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={randomizeCustom}
              className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium hover:border-primary/60 transition-colors"
            >
              Random
            </button>
            <button
              type="button"
              onClick={() => setDesign((d) => ({ ...d, paletteId: "custom" }))}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                isCustom ? "bg-primary text-primary-foreground" : "border border-border bg-background hover:border-primary/60"
              }`}
            >
              {isCustom ? "Active" : "Use"}
            </button>
          </div>
        </div>
        <div className="flex h-12 overflow-hidden rounded-md mb-3">
          {design.customPalette.map((c, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {design.customPalette.map((c, i) => (
            <label key={i} className="flex items-center gap-2 rounded-md border border-border/60 bg-background p-2">
              <input
                type="color"
                value={c}
                onChange={(e) => updateCustomColor(i, e.target.value)}
                className="h-7 w-7 cursor-pointer rounded border border-border bg-transparent"
                aria-label={`${tokenLabels[i]} color`}
              />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{tokenLabels[i]}</div>
                <input
                  type="text"
                  value={c}
                  onChange={(e) => {
                    const v = e.target.value;
                    if (/^#[0-9a-fA-F]{0,6}$/.test(v)) updateCustomColor(i, v);
                  }}
                  className="w-full bg-transparent text-xs font-mono outline-none"
                />
              </div>
            </label>
          ))}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {palettes.map((p) => {
          const active = design.paletteId === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setDesign((d) => ({ ...d, paletteId: p.id }))}
              className={`rounded-xl border p-3 text-left transition-all duration-300 ${
                active
                  ? "border-primary shadow-glow scale-[1.02]"
                  : "border-border bg-surface-elevated hover:border-primary/50 hover:-translate-y-0.5"
              }`}
            >
              <div className="flex h-12 overflow-hidden rounded-md">
                {p.colors.map((c) => (
                  <div key={c} className="flex-1 transition-transform duration-300 hover:scale-y-110" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-medium">{p.name}</span>
                {active && <Check className="h-4 w-4 text-primary" />}
              </div>
            </button>
          );
        })}
      </div>
      <div className="rounded-xl border border-border bg-surface-elevated p-4">
        <div className="mb-2 text-xs font-medium text-muted-foreground">Tokens</div>
        <div className="grid grid-cols-4 gap-2 text-[10px]">
          {(["bg", "surface", "accent", "primary"] as const).map((label, i) => (
            <div key={label} className="rounded-md border border-border/50 p-2">
              <div className="h-6 w-full rounded" style={{ backgroundColor: palette.colors[i] }} />
              <div className="mt-1 font-medium">{label}</div>
              <div className="text-muted-foreground">{palette.colors[i]}</div>
            </div>
          ))}
        </div>
      </div>
      <LivePreview design={design} label="Theme preview" />
    </div>
  );
}

function FontsPanel({ design, setDesign }: PanelProps) {
  return (
    <div className="space-y-5">
      <PanelHeader title="Google Fonts" desc="Pair a heading + body. Live across the preview." />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {fontPairs.map((p) => {
          const active = design.fontId === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setDesign((d) => ({ ...d, fontId: p.id }))}
              className={`rounded-xl border p-4 text-left transition-all duration-300 ${
                active
                  ? "border-primary shadow-glow scale-[1.02] bg-gradient-hero/10"
                  : "border-border bg-surface-elevated hover:border-primary/50 hover:-translate-y-0.5"
              }`}
            >
              <div className="text-2xl" style={{ fontFamily: p.headingFamily }}>{p.heading}</div>
              <div className="mt-1 text-sm" style={{ fontFamily: p.bodyFamily }}>
                The quick brown fox — {p.body}
              </div>
            </button>
          );
        })}
      </div>
      <LivePreview design={design} label="Typography preview" />
    </div>
  );
}

function AnimationsPanel({ design, setDesign }: PanelProps) {
  const opts: { key: AnimationKey; label: string; cls: string }[] = [
    { key: "scale", label: "Scale", cls: "hover:scale-110" },
    { key: "glow", label: "Glow", cls: "hover:shadow-glow" },
    { key: "lift", label: "Lift", cls: "hover:-translate-y-2" },
    { key: "tilt", label: "Tilt", cls: "hover:rotate-6" },
    { key: "fade", label: "Fade", cls: "hover:opacity-70" },
    { key: "slide", label: "Slide", cls: "hover:translate-x-2" },
    { key: "blur", label: "Blur", cls: "hover:blur-[2px]" },
    { key: "bounce", label: "Bounce", cls: "hover:animate-bounce" },
  ];
  return (
    <div className="space-y-5">
      <PanelHeader title="Animations" desc="Pick the motion personality of your site." />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {opts.map((o) => {
          const active = design.animation === o.key;
          return (
            <button
              key={o.key}
              type="button"
              onClick={() => setDesign((d) => ({ ...d, animation: o.key }))}
              className={`rounded-xl border p-6 text-center text-sm transition-all duration-500 ${o.cls} ${
                active
                  ? "border-primary bg-gradient-hero/15 shadow-glow"
                  : "border-border bg-surface-elevated hover:border-primary/50"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      <LivePreview design={design} label="Animation preview — hover the card" />
    </div>
  );
}

function PreviewPanel({ design, setDesign }: PanelProps) {
  const devices: { key: Device; label: string; icon: typeof Monitor; w: string; h: string }[] = [
    { key: "desktop", label: "Desktop", icon: Monitor, w: "w-full max-w-xl", h: "h-72" },
    { key: "laptop", label: "Laptop", icon: Monitor, w: "w-full max-w-md", h: "h-72" },
    { key: "tablet", label: "Tablet", icon: Tablet, w: "w-72", h: "h-96" },
    { key: "mobile", label: "Mobile", icon: Smartphone, w: "w-56", h: "h-96" },
    { key: "watch", label: "Watch", icon: Smartphone, w: "w-32", h: "h-32" },
  ];
  return (
    <div className="space-y-5">
      <PanelHeader title="Live preview" desc="Switch devices — the preview reframes instantly." />
      <div className="flex flex-wrap gap-2">
        {devices.map((d) => {
          const active = design.device === d.key;
          return (
            <button
              key={d.key}
              type="button"
              onClick={() => setDesign((s) => ({ ...s, device: d.key }))}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
                active ? "border-primary bg-gradient-hero text-primary-foreground shadow-glow" : "border-border bg-surface-elevated hover:border-primary/50"
              }`}
            >
              <d.icon className="h-3.5 w-3.5" />
              {d.label}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center">
        <div key={design.device} className={`animate-fade-in ${devices.find((x) => x.key === design.device)!.w} ${devices.find((x) => x.key === design.device)!.h}`}>
          <LivePreview design={design} label="" compact />
        </div>
      </div>
    </div>
  );
}

function CodePanel({ design, setDesign }: PanelProps) {
  const palette = resolvePalette(design);
  const font = fontPairs.find((f) => f.id === design.fontId)!;
  const formats: { key: ExportFormat; label: string }[] = [
    { key: "html", label: "HTML + Tailwind" },
    { key: "react", label: "React + TS" },
    { key: "next", label: "Next.js" },
    { key: "vue", label: "Vue 3" },
    { key: "svelte", label: "Svelte" },
    { key: "astro", label: "Astro" },
    { key: "zip", label: "Zip download" },
    { key: "figma", label: "Figma file" },
  ];
  const code = `// Generated · ${design.layout} · ${palette.name} · ${font.heading}
export function Hero() {
  return (
    <section
      className="py-24"
      style={{ background: "${palette.colors[3]}", borderRadius: ${design.radius} }}
    >
      <h1
        className="text-6xl font-bold"
        style={{ fontFamily: "${font.headingFamily}" }}
      >
        ${design.headline}
      </h1>
    </section>
  );
}`;
  return (
    <div className="space-y-5">
      <PanelHeader title="Code export" desc="Live-generated from your current design." />
      <div className="flex flex-wrap gap-2 text-xs">
        {formats.map((f) => {
          const active = design.exportFormat === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setDesign((d) => ({ ...d, exportFormat: f.key }))}
              className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 transition-all duration-300 ${
                active ? "border-primary bg-gradient-hero text-primary-foreground shadow-glow" : "border-border bg-surface-elevated hover:border-primary/50"
              }`}
            >
              {active && <Check className="h-3 w-3" />} {f.label}
            </button>
          );
        })}
      </div>
      <pre key={`${design.paletteId}-${design.fontId}-${design.headline}-${design.radius}`} className="overflow-x-auto rounded-xl border border-border bg-background p-4 text-xs leading-relaxed text-muted-foreground animate-fade-in">
        {code}
      </pre>
      <div>
        <label className="mb-2 block text-xs font-medium text-muted-foreground">Headline copy</label>
        <input
          value={design.headline}
          onChange={(e) => setDesign((d) => ({ ...d, headline: e.target.value }))}
          className="w-full rounded-lg border border-border bg-surface-elevated px-3 py-2 text-sm outline-none transition focus:border-primary focus:shadow-glow"
        />
      </div>
    </div>
  );
}

function TemplatesPanel({ design, setDesign }: PanelProps) {
  return (
    <div className="space-y-5">
      <PanelHeader title="Templates" desc="One click applies layout, palette, fonts and sections." />
      <div className="grid gap-3 sm:grid-cols-2">
        {templates.map((t) => {
          const palette = palettes.find((p) => p.id === t.paletteId)!;
          const active =
            design.layout === t.layout &&
            design.paletteId === t.paletteId &&
            design.fontId === t.fontId;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() =>
                setDesign((d) => ({
                  ...d,
                  layout: t.layout,
                  paletteId: t.paletteId,
                  fontId: t.fontId,
                  blocks: t.blocks,
                  headline: t.headline,
                }))
              }
              className={`group overflow-hidden rounded-xl border text-left transition-all duration-300 ${
                active
                  ? "border-primary shadow-glow scale-[1.02]"
                  : "border-border bg-surface-elevated hover:border-primary/50 hover:-translate-y-0.5"
              }`}
            >
              <div
                className="flex h-24 items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${palette.colors[1]}, ${palette.colors[2]})` }}
              >
                <Sparkles className="h-6 w-6 text-white/90" />
              </div>
              <div className="flex items-center justify-between p-3">
                <span className="text-sm font-medium">{t.name}</span>
                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] text-primary">{t.tag}</span>
              </div>
            </button>
          );
        })}
      </div>
      <LivePreview design={design} label="Applied template preview" />
    </div>
  );
}

function LivePreview({
  design,
  label,
  compact = false,
}: {
  design: DesignState;
  label: string;
  compact?: boolean;
}) {
  const palette = resolvePalette(design);
  const font = fontPairs.find((f) => f.id === design.fontId)!;
  const animCls =
    design.animation === "scale"
      ? "hover:scale-[1.03]"
      : design.animation === "glow"
      ? "hover:shadow-glow"
      : design.animation === "lift"
      ? "hover:-translate-y-1"
      : "hover:rotate-1";
  return (
    <div className={compact ? "h-full" : ""}>
      {label && <div className="mb-2 text-xs font-medium text-muted-foreground">{label}</div>}
      <div
        className={`group h-full overflow-hidden border transition-all duration-500 ${animCls}`}
        style={{
          background: palette.colors[0],
          borderColor: palette.colors[1],
          borderRadius: design.radius,
        }}
      >
        <div
          className="flex items-center gap-2 border-b px-4 py-2"
          style={{ borderColor: palette.colors[1], background: palette.colors[1] }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: palette.colors[2] }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: palette.colors[3] }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: palette.colors[2] }} />
          <span className="ml-2 text-[10px]" style={{ color: palette.colors[3] }}>
            yoursite.com / {design.layout}
          </span>
        </div>
        <div className="p-5">
          <div
            className="text-xl font-semibold leading-tight md:text-2xl"
            style={{ fontFamily: font.headingFamily, color: palette.colors[3] }}
          >
            {design.headline}
          </div>
          <div
            className="mt-1 text-xs"
            style={{ fontFamily: font.bodyFamily, color: palette.colors[2] }}
          >
            Built live in Customizr · {font.heading} + {font.body}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {design.blocks.slice(0, 5).map((b) => (
              <span
                key={b}
                className="rounded-full px-2 py-0.5 text-[10px] capitalize"
                style={{ background: palette.colors[2], color: palette.colors[0] }}
              >
                {b}
              </span>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-10"
                style={{
                  background: palette.colors[i % 4 === 0 ? 1 : 2],
                  borderRadius: Math.max(2, design.radius / 2),
                  opacity: 0.7,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionPreview({ section, design, setDesign }: { section: SectionKey } & PanelProps) {
  switch (section) {
    case "layout":
      return <LayoutPanel design={design} setDesign={setDesign} />;
    case "theme":
      return <ThemePanel design={design} setDesign={setDesign} />;
    case "fonts":
      return <FontsPanel design={design} setDesign={setDesign} />;
    case "sections":
      return <SectionsBuilder design={design} setDesign={setDesign} />;
    case "animations":
      return <AnimationsPanel design={design} setDesign={setDesign} />;
    case "preview":
      return <PreviewPanel design={design} setDesign={setDesign} />;
    case "templates":
      return <TemplatesPanel design={design} setDesign={setDesign} />;
  }
}

function Landing() {
  const [active, setActive] = useState<SectionKey>("layout");
  const [design, setDesign] = useState<DesignState>(defaultDesign);
  const activeSection = sections.find((s) => s.key === active)!;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-70" aria-hidden />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" aria-hidden />

        <div className="container relative mx-auto flex flex-col items-center px-4 py-24 text-center md:py-36">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs text-muted-foreground glass animate-fade-in">
            <Sparkles className="h-3 w-3 text-primary" />
            Visual website builder · Live preview
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl animate-fade-in">
            Design Your Website
            <br />
            <span className="text-gradient">Your Way</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Pick a layout, theme, fonts and sections — Customizr builds it in real time.
          </p>
        </div>
      </section>

      {/* Interactive explorer */}
      <section className="container relative mx-auto px-4 py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 mx-auto h-96 max-w-4xl rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-surface/40 px-3 py-1 text-[11px] font-medium text-primary glass">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Interactive dashboard
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Explore the <span className="text-gradient">builder</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tap any panel — content slides in with a glowing focus state.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Section nav — animated panels */}
          <nav className="flex flex-col gap-2.5" aria-label="Feature sections">
            {sections.map((s, i) => {
              const isActive = s.key === active;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setActive(s.key)}
                  aria-pressed={isActive}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className={`group relative flex items-center gap-3 overflow-hidden rounded-2xl border p-3.5 text-left animate-fade-in transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary will-change-transform ${
                    isActive
                      ? "glow-border-active animated-bg-active border-transparent shadow-glow scale-[1.02]"
                      : "border-border/60 glass hover:border-primary/40 hover:shadow-glow hover:-translate-y-0.5 hover:scale-[1.015]"
                  }`}
                >
                  {/* Hover sheen */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-10 -top-10 h-24 rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span
                    className={`relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-hero shadow-glow scale-110"
                        : "bg-surface-elevated group-hover:bg-gradient-hero/30 group-hover:scale-105"
                    }`}
                  >
                    <s.icon
                      className={`h-4 w-4 transition-colors ${
                        isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                      }`}
                    />
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span
                      className={`block text-sm font-semibold transition-colors ${
                        isActive ? "text-foreground" : "text-foreground/90 group-hover:text-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">{s.desc}</span>
                  </span>
                  {isActive && (
                    <span className="relative ml-auto h-2 w-2 shrink-0 rounded-full bg-primary shadow-glow">
                      <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" />
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Preview area — glass panel with animated content */}
          <div className="glow-border-active relative min-h-[540px] overflow-hidden rounded-3xl glass-strong shadow-glow">
            {/* Ambient gradient orb */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-hero)" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-hero)" }}
              aria-hidden
            />

            <div className="relative flex items-center justify-between border-b border-border/40 bg-surface-elevated/40 px-5 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70 transition-transform hover:scale-125" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4/80 transition-transform hover:scale-125" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-2/80 transition-transform hover:scale-125" />
              </div>
              <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                customizr / {activeSection.title.toLowerCase()}
              </span>
              <activeSection.icon className="h-4 w-4 text-primary" />
            </div>
            <div key={active} className="relative animate-slide-in-up p-6 md:p-8">
              <SectionPreview section={active} design={design} setDesign={setDesign} />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 text-center text-xs text-muted-foreground">
        <div className="container mx-auto px-4">
          www.vsdevelopers.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
