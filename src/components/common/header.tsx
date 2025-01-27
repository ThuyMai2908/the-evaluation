"use client";

import FlexRow from "@/components/layouts/flex-row";
import { HamburgerIcon } from "@/components/shared/icon";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { NavigationSheet } from "@/components/ui/navigation-sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, type HTMLAttributes, type JSX } from "react";

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export function Header({ className, ...props }: HeaderProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header
      className={cn("fixed  top-0 left-0 right-0 z-50", className)}
      {...props}
    >
      <div className="relative">
        <div className="relative z-50 transition-all duration-300 bg-white">
          <FlexRow
            className="container relative z-50 py-6"
            alignHorizontal="between"
            alignVertical="center"
          >
            <Logo className="h-6 lg:h-14" href="/" />
            <Button
              className="border-none hover:bg-transparent"
              variant={"outline"}
              onClick={handleOpen}
            >
              <HamburgerIcon open={open} />
            </Button>

            <Button className="leading-1.5 hidden sm:block">
              <Link href="/">Book Now</Link>
            </Button>
          </FlexRow>
        </div>
        {open && <NavigationSheet open={open} />}
      </div>
    </header>
  );
}
