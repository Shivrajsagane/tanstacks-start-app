import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero shadow-glow">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-gradient">Customizr</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</Link>
          <Link to="/templates" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Templates</Link>
        </nav>

        <div />
      </div>
    </header>
  );
}