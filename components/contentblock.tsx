"use client";

import React from "react";
import RevealSection from "../components/RevealSection";

interface ContentBlockProps {
  children: React.ReactNode;
  className?: string;
  contained?: boolean;
  bgImage?: string; // <-- new optional prop
  skipVerticalMargin?: boolean; // <-- new prop
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  children,
  className = "",
  contained = false,
  bgImage,
  skipVerticalMargin = false,
}) => {
  const combinedClassName = [
    "content-block",
    className,
    bgImage ? "has-bg-image" : "",
    skipVerticalMargin ? "skip-margin-v" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const style = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <RevealSection className={combinedClassName}>
      <div style={style}>
        {contained ? <div className="container">{children}</div> : children}
      </div>
    </RevealSection>
  );
};

export default ContentBlock;
