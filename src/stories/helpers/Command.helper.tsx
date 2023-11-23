import React, { useEffect, useState } from "react";

import { Command } from "@/components";

export function CommandDialogDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && e.metaKey) {
        setOpen(open => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div>
      <p className="space-x-space-xxs text-sm text-neutral-default">
        <span>Press</span>
        <kbd className="pointer-events-none inline-flex select-none items-center gap-space-xxs rounded border border-neutral-default bg-neutral-default px-space-xxs font-mono font-medium">
          <span>⌘</span>
          <span className="text-xs">J</span>
        </kbd>
      </p>
      <Command open={open} onOpenChange={setOpen}>
        <Command.Input placeholder="Search for stories, authors etc. or even pages..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Recent Searches">
            <Command.Item>
              <span>Let&apos;s Talk About</span>
            </Command.Item>
            <Command.Item>
              <span>Mind Ki Baat</span>
            </Command.Item>
            <Command.Item>
              <span>Awful & Awesome</span>
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Pages">
            <Command.Item>
              <div className="flex w-full items-center justify-between">
                <span>Profile</span>
                <kbd className="pointer-events-none flex select-none items-center gap-space-xxs rounded border border-neutral-default bg-component-neutral-default px-space-xxs font-mono text-sm font-medium group-aria-selected:border-neutral-dark">
                  <span>⌘</span>
                  <span className="text-xs">P</span>
                </kbd>
              </div>
            </Command.Item>
            <Command.Item>
              <div className="flex w-full items-center justify-between">
                <span>Accessibility</span>
                <kbd className="pointer-events-none flex select-none items-center gap-space-xxs rounded border border-neutral-default bg-component-neutral-default px-space-xxs font-mono text-sm font-medium group-aria-selected:border-neutral-dark">
                  <span>⌘</span>
                  <span className="text-xs">A</span>
                </kbd>
              </div>
            </Command.Item>
            <Command.Item>
              <div className="flex w-full items-center justify-between">
                <span>Settings</span>
                <kbd className="pointer-events-none flex select-none items-center gap-space-xxs rounded border border-neutral-default bg-component-neutral-default px-space-xxs font-mono text-sm font-medium group-aria-selected:border-neutral-dark">
                  <span>⌘</span>
                  <span className="text-xs">S</span>
                </kbd>
              </div>
            </Command.Item>
            <Command.Item>
              <div className="flex w-full items-center justify-between">
                <span>Podcasts</span>
                <kbd className="pointer-events-none flex select-none items-center gap-space-xxs rounded border border-neutral-default bg-component-neutral-default px-space-xxs font-mono text-sm font-medium group-aria-selected:border-neutral-dark">
                  <span>⌘</span>
                  <span className="text-xs">P</span>
                </kbd>
              </div>
            </Command.Item>
            <Command.Item>
              <div className="flex w-full items-center justify-between">
                <span>Saved</span>
                <kbd className="pointer-events-none flex select-none items-center gap-space-xxs rounded border border-neutral-default bg-component-neutral-default px-space-xxs font-mono text-sm font-medium group-aria-selected:border-neutral-dark">
                  <span>⌘</span>
                  <span className="text-xs">A</span>
                </kbd>
              </div>
            </Command.Item>
            <Command.Item>
              <div className="flex w-full items-center justify-between">
                <span>Newsletters</span>
                <kbd className="pointer-events-none flex select-none items-center gap-space-xxs rounded border border-neutral-default bg-component-neutral-default px-space-xxs font-mono text-sm font-medium group-aria-selected:border-neutral-dark">
                  <span>⌘</span>
                  <span className="text-xs">S</span>
                </kbd>
              </div>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
