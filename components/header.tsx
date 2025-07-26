"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

const navItems = [
  { name: "About Us", path: "/about-us" },
  { name: "Inspiration", path: "/inspiration" },
  { name: "Vision", path: "/vision" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const [showStickyHeader, setShowStickyHeader] = useState<boolean | null>(
    null
  );
  const lastScrollY = useRef(0);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Auto-close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const getLuminanceFromBg = (bgColor: string): number => {
    const rgb = bgColor.match(/\d+/g)?.map(Number);
    if (!rgb || rgb.length < 3) return 1; // assume bright
    const [r, g, b] = rgb;
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };

  const updateHeaderBgClass = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;

    const bgColor = getComputedStyle(header).backgroundColor;
    const luminance = getLuminanceFromBg(bgColor);
    setIsDarkBg(luminance < 0.5);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header && !header.classList.contains("nav-open")) {
        // Removed setIsScrolled — not used
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navElement = document.querySelector("nav");
    if (navElement) {
      navElement.classList.toggle("nav-open", isOpen);
    }

    const html = document.documentElement;
    if (isOpen) {
      html.classList.add("nav-open");
    } else {
      html.classList.remove("nav-open");
    }
  }, [isOpen]);

  useEffect(() => {
    updateHeaderBgClass(); // Run once

    const observer = new MutationObserver(updateHeaderBgClass);
    const header = headerRef.current;
    if (header) {
      observer.observe(header, {
        attributes: true,
        attributeFilter: ["style", "class"],
      });
    }

    const resizeObserver = new ResizeObserver(updateHeaderBgClass);
    if (header) resizeObserver.observe(header);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [updateHeaderBgClass]);

  useEffect(() => {
    let hasScrolledPastThreshold = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const hasScrolledPast = currentScrollY > 100;

      if (!hasScrolledPast) {
        setShowStickyHeader(null);
        hasScrolledPastThreshold = false;
      } else {
        if (!hasScrolledPastThreshold) {
          hasScrolledPastThreshold = true;
        }
        setShowStickyHeader(isScrollingUp);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolledPast(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header
        ${showStickyHeader === true ? "sticky-show" : ""}
        ${showStickyHeader === false ? "sticky-hide" : ""}
        ${hasScrolledPast ? "has-scrolled-past" : ""}
        ${isOpen ? "nav-open" : ""}
        ${isDarkBg ? "bg-dark" : "bg-light"}`}
    >
      <div
        className={`page-overlay ${isOpen ? "visible" : ""}`}
        onClick={handleToggle}
      />
      <div className="header-inner">
        <div className="container container-header">
          <div className="header-logo-nav">
            <div className="container-logo">
              <Link href="/" className="logo-link">
                <Image
                  className={`logo ${
                    isDarkBg ? "logo-white" : "logo-black"
                  } sticky-hide`}
                  src="/Logo_notext_vertical.svg"
                  alt="Banjara Agro Group"
                  width={200}
                  height={60}
                  priority
                />
                <Image
                  className="sticky-show"
                  src="/logo_black_notext_vertical.svg"
                  alt="Banjara Agro Group"
                  width={200}
                  height={65}
                  priority
                />
              </Link>
            </div>
            <div className="nav-hamburger">
              <div
                className={`menu-icon ${isOpen ? "nav-open" : ""}`}
                onClick={handleToggle}
              >
                <div>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-offscreen-navigation container">
        <nav className="offscreen-navigation">
          <ul>
            {navItems.map((item) => (
              <li
                key={item.path}
                className={pathname === item.path ? "active" : ""}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
