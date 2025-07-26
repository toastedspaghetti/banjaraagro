"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface BulletPoint {
  text: string;
  highlight: string;
}

interface ImageItem {
  src: string;
  className?: string;
  bubble?: boolean;
}

interface TextImagePair {
  heading?: string;
  content: string;
  buttonText?: string;
  buttonUrl?: string;
  bullets?: BulletPoint[];
  images: ImageItem[];
  imageClassName?: string;
  textClassName?: string;
  className?: string;
}

interface TextImageBlockProps {
  blocks: TextImagePair[];
  className?: string;
  reverse?: boolean;
  btnClassName?: string;
}

const TextImageBlock: React.FC<TextImageBlockProps> = ({
  blocks,
  className,
  reverse = false,
  btnClassName,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={`block text-image-block-wrapper ${className || ""}`}>
      {blocks.map((block, i) => {
        const isReversed = i % 2 === 0 ? reverse : !reverse;

        return (
          <div
            key={i}
            className={`cb-image-text ${isReversed ? "reverse" : ""} ${
              block.className || ""
            }`}
          >
            <div className={`text ${block.textClassName || ""}`}>
              {block.heading && <h2>{block.heading}</h2>}
              <p>{block.content}</p>

              {/* {block.bullets?.length > 0 && (
                <ul className="cb-list">
                  {block.bullets.map((point, idx) => (
                    <li key={idx}>
                      <span className="highlight">{point.highlight}</span>{" "}
                      {point.text}
                    </li>
                  ))}
                </ul>
              )} */}

              {block.buttonUrl && (
                <Link
                  href={block.buttonUrl}
                  className={`btn ${btnClassName || ""}`}
                >
                  {block.buttonText}
                </Link>
              )}
            </div>

            <div
              className={`image-stack ${block.imageClassName || ""}`}
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % block.images.length)
              }
            >
              {block.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`stacked-image ${img.className || ""} ${
                    img.bubble ? "bubble" : ""
                  } ${activeIndex === idx ? "active" : ""}`}
                  style={{
                    position: "absolute", // required for Image with fill or stacking
                    zIndex:
                      activeIndex === idx
                        ? block.images.length
                        : block.images.length - idx,
                    opacity: activeIndex === idx ? 1 : 0,
                    transform: activeIndex === idx ? "scale(1)" : "scale(0.95)",
                    pointerEvents: activeIndex === idx ? "auto" : "none",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={`${block.heading || "Image"} ${idx + 1}`}
                    fill
                    style={{ objectFit: "contain" }} // adjust to your layout needs
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TextImageBlock;
