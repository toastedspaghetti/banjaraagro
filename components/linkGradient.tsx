"use client";

import React, {
  useRef,
  useEffect,
  ReactNode,
  ComponentPropsWithRef,
} from "react";

type AsElement = "a" | "button" | "div";

type LinkGradientProps<T extends AsElement = "a"> = {
  children: ReactNode;
  className?: string;
  as?: T;
  fullBackground?: boolean;
} & ComponentPropsWithRef<T>;

const LinkGradient = <T extends AsElement = "a">({
  children,
  className = "",
  as,
  fullBackground = false,
  ...props
}: LinkGradientProps<T>) => {
  const tag = as || "a";

  // Ref types for each element
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  const ref =
    tag === "a"
      ? anchorRef
      : tag === "button"
      ? buttonRef
      : divRef;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const mouseX = mouseEvent.clientX - rect.left;
      const width = rect.width;
      const pos = (mouseX / width) * 100;
      el.style.backgroundPosition = `${pos}% 0`;
    };

    const handleMouseLeave = () => {
      el.style.backgroundPosition = "0% 0";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  const gradientClass = fullBackground
    ? "gradient-link-bg gradient-on-bg"
    : "bg-clip-text text-transparent";

  return React.createElement(
    tag,
    {
      ref,
      className: `${gradientClass} ${className}`,
      ...props,
    },
    children
  );
};

export default LinkGradient;
