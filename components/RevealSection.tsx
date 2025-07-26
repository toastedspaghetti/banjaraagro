"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";
import classNames from "classnames";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
}

const RevealSection: React.FC<RevealSectionProps> = ({ children, className }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={classNames("reveal-section", { visible: isVisible }, className)}
    >
      {children}
    </section>
  );
};

export default RevealSection;
