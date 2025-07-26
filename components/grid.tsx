"use client";

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import GridBox from "./grid_box";
import PopupModal from "./PopupModal";
import { FaCirclePlus } from "react-icons/fa6";

interface SlideItem {
  imageUrl: string;
  text?: string;
}

interface BoxItem {
  imageUrl?: string;
  gradient?: string;
  heading: string;
  text?: string;
  slides?: SlideItem[];
  url?: string;
  boxClassName?: string;
  contentClassName?: string;
  showChart?: boolean; // NEW: flag if we want to show the chart instead
}

interface GridProps {
  className?: string;
  boxes: BoxItem[];
}

const Grid: React.FC<GridProps> = ({ className, boxes }) => {
  const [activeSlides, setActiveSlides] = useState<SlideItem[] | null>(null);

  useEffect(() => {
    if (!boxes || boxes.length === 0) return;

    const slideImages = boxes.flatMap(
      (box) => box.slides?.map((slide) => slide.imageUrl) || []
    );

    slideImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [boxes]);

  return (
    <div className={classNames("grid-container", className)}>
      <div className="grid">
        {boxes.map((box, index) => {
          const backgroundStyle = {
            background: box.imageUrl
              ? `url(${box.imageUrl}) center center / cover no-repeat`
              : box.gradient || "",
          };

          const outerClasses = classNames(box.boxClassName, {
            "has-bg-image": !!box.imageUrl,
          });

          const innerContent = (
            <div
              className={classNames("grid-box-content", box.contentClassName)}
            >
              <h3>{box.heading}</h3>
              {box.text && <p>{box.text}</p>}
            </div>
          );

          return (
            <GridBox
              key={index}
              className={outerClasses}
              style={{
                ...backgroundStyle,
                cursor: box.slides || box.showChart ? "pointer" : "default",
              }}
              as={box.url ? "a" : "div"}
              href={box.url}
              onClick={() => box.slides && setActiveSlides(box.slides)}
              glow={box.boxClassName?.includes("glow")} // 👈 check if class includes "glow"
            >
              <FaCirclePlus className="grid-info" />
              {innerContent}
            </GridBox>
          );
        })}
      </div>
      {activeSlides && (
        <PopupModal
          slides={activeSlides}
          onClose={() => setActiveSlides(null)}
        />
      )}
    </div>
  );
};

export default Grid;
