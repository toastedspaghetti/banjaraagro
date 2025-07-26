"use client";

import React, {
  useRef,
  useEffect,
  useState,
  ReactNode,
  ElementType,
  HTMLAttributes,
} from "react";
import classNames from "classnames";

interface GridBoxProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: ElementType; // allows "div", "a", etc.
  href?: string; // used when "a"
  glow?: boolean; // NEW: flag for glowing wrapper
}

const GridBox: React.FC<GridBoxProps> = ({
  children,
  className,
  style,
  as: Component = "div",
  href,
  glow = false,
  ...rest
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const gridBoxElement = (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={classNames("grid-box", { visible: isVisible }, className)}
      style={style}
      {...(href ? { href } : {})}
      {...rest}
    >
      {children}
    </Component>
  );

  return glow ? (
    <div className="grid-box-wrapper">{gridBoxElement}</div>
  ) : (
    gridBoxElement
  );
};

export default GridBox;
