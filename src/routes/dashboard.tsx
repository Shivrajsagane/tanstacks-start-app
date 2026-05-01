import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Loader2, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { useAuth } from "@/contexts/AuthContext";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Builder — Customizr" },
      { name: "description", content: "Customize your website with live preview." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth" });
  }, [user, loading, navigate]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-12 text-center shadow-elevated">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-hero shadow-glow">
            <Hammer className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold">Builder coming next</h1>
          <p className="mt-3 text-muted-foreground">
            Welcome, <span className="text-foreground">{user.email}</span>! The split-screen builder
            with all customization panels and live preview ships in the next iteration.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild variant="outline"><Link to="/templates">Browse templates</Link></Button>
            <Button asChild className="bg-gradient-hero shadow-glow hover:opacity-90">
              <Link to="/">Back home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}