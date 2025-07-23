"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import NavigationBar from "@ui/navigation-bar";
import MobileNavigationBar from "@ui/mobile-navigation-bar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <NavigationBar />
      {!isMenuOpen && (
        <span className="fixed block md:hidden right-5 top-10">
          <Menu size={32} onClick={toggleMenu} />
        </span>
      )}

      {isMenuOpen && <MobileNavigationBar closeMenu={closeMenu} />}

      {children}
    </>
  );
}
