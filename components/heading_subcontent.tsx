"use client";

import React from "react";

interface HeadingSubheadingProps {
  heading: string;
  subContent: string;
  className?: string;
}

const HeadingSubheading: React.FC<HeadingSubheadingProps> = ({ heading, subContent, className }) => {
  return (
    <div className={`heading-subcontent ${className || ""}`}>
      <h2>{heading}</h2>
      <p>{subContent}</p>
    </div>
  );
};

export default HeadingSubheading;