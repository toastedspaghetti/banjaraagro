"use client";

import React from "react";
import Image from "next/image";

interface GridItem {
  image: string;
  heading: string;
  text: string;
}

interface ContentGridProps {
  items: GridItem[];
}

const ContentGrid: React.FC<ContentGridProps> = ({ items }) => {
  return (
    <div className="cb-grid-internal">
      {items.map((item, index) => (
        <div className="block" key={index}>
          <Image
            src={item.image}
            alt={item.heading}
            width={500}
            height={350}
            style={{ width: "100%", height: "auto", borderRadius: "0.75rem" }}
          />
          <div className="text">
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;
