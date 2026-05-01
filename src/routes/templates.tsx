import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "Templates — Customizr" },
      { name: "description", content: "Quick-start templates: portfolio, business, e-commerce, blog and more." },
    ],
  }),
  component: TemplatesPage,
});

const placeholders = [
  { name: "Minimal Portfolio", category: "Portfolio" },
  { name: "Startup Landing", category: "Business" },
  { name: "E-commerce Storefront", category: "E-commerce" },
  { name: "Editorial Blog", category: "Blog" },
  { name: "Institute Site", category: "College" },
  { name: "Studio Showcase", category: "Portfolio" },
];

function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Template gallery</h1>
          <p className="mt-3 text-muted-foreground">Curated starting points. Live presets land in the next iteration.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((t) => (
            <div key={t.name} className="group overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-primary/50 hover:shadow-glow">
              <div className="aspect-video bg-gradient-hero opacity-60" />
              <div className="p-5">
                <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">{t.category}</div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">{t.name}</h3>
                  <Sparkles className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-gradient-hero shadow-glow hover:opacity-90">
            <Link to="/dashboard">Open the builder</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}