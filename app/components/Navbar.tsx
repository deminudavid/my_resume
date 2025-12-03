"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { ModeToggle } from "@/components/ui/themeToggle";

type Section = "home" | "about" | "services" | "contact" | "portfolio";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<Section>("home");

  const sections: Section[] = ["home", "about", "services", "portfolio", "contact"];

  // Desktop button refs for arrow-key navigation
  const desktopRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  // First mobile button ref for auto-focus
  const firstMobileButton = React.useRef<HTMLButtonElement | null>(null);

  // Smooth scroll
  const scrollToSection = (id: Section) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
    setActive(id);
  };

  // Intersection observer highlights active section
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as Section;
            setActive(id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Escape closes mobile menu
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Autofocus first mobile item when menu opens
  React.useEffect(() => {
    if (open && firstMobileButton.current) {
      firstMobileButton.current.focus();
    }
  }, [open]);

  // Desktop keyboard navigation
  const handleDesktopKey = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
    id: Section
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToSection(id);
    }

    if (e.key === "ArrowRight") {
      const next = index + 1;
      desktopRefs.current[next]?.focus();
    }

    if (e.key === "ArrowLeft") {
      const prev = index - 1;
      desktopRefs.current[prev]?.focus();
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo + Theme */}
        <div className="flex items-center gap-2">
          <Logo />
          <ModeToggle />
        </div>

        <h1 className="text-lg font-semibold">Deminu David</h1>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {sections.map((id, i) => (
            <Button
              key={id}
              ref={(el) => {
                desktopRefs.current[i] = el;
              }}
              variant={active === id ? "default" : "ghost"}
              onClick={() => { scrollToSection(id); setActive(id); }}
              onKeyDown={(e) => handleDesktopKey(e, i, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <Collapsible open={open} onOpenChange={setOpen} className="md:hidden">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" aria-expanded={open}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </div>

      {/* Mobile Menu */}
      <Collapsible open={open} onOpenChange={setOpen} className="md:hidden">
        <CollapsibleContent>
          <div className="flex flex-col gap-3 border-t p-4">
            {sections.map((id, i) => (
              <Button
                key={id}
                variant={active === id ? "default" : "ghost"}
                className="w-full"
                ref={(el) => {
                  if (i === 0) firstMobileButton.current = el;
                }}
                onClick={() => scrollToSection(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </nav>
  );
}
