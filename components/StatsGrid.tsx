"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface BoxContent {
  heading?: string;
  subheading?: string;
  topText?: string;
  bgImage?: string;
  icon?: ReactNode;
  tag?: string;
  tagBottom?: boolean;
}

interface ExtraSectionContent {
  heading?: string;
  subheading?: string;
  image?: string;
}

interface StatsGridProps {
  heading: string;
  subheading: string;
  buttonText?: string;
  buttonUrl?: string;
  column2Boxes: BoxContent[];
  className?: string;
  buttonClassName?: string;
  column1ClassName?: string;
  column2ClassName?: string;
  extraSection?: ExtraSectionContent;
  contained?: boolean;
}

const StatsGrid: React.FC<StatsGridProps> = ({
  heading,
  subheading,
  buttonText,
  buttonUrl,
  column2Boxes,
  className = "",
  buttonClassName = "btn btn-primary",
  column1ClassName = "",
  column2ClassName = "",
  extraSection,
  contained = false,
}) => {
  const isScrollable = column2Boxes.length > 2;

  const content = (
    <div
      className={`grid-stats gridWrapper ${className} ${
        isScrollable ? "scrollable-parent" : ""
      }`.trim()}
    >
      <div className={`column1 ${column1ClassName}`.trim()}>
        <h2>{heading}</h2>
        <p>{subheading}</p>
        {buttonUrl && buttonText && (
          <Link href={buttonUrl} className={`btn ${buttonClassName}`}>
            {buttonText}
          </Link>
        )}
      </div>

      <div className={`column2 card-grid ${column2ClassName}`.trim()}>
        {column2Boxes.slice(0, 4).map((box, index) => {
          const area = `card-${index + 1}`;
          return (
            <div
              key={index}
              className={`card ${area} ${box.bgImage ? "has-image" : ""}`}
              style={
                box.bgImage
                  ? {
                      backgroundImage: `url(${box.bgImage})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            >
              {!box.tagBottom && box.tag && (
                <div className="card-tag top">{box.tag}</div>
              )}
              {box.heading && <div className="card-value">{box.heading}</div>}
              {box.subheading && <p className="card-text">{box.subheading}</p>}
              {box.tagBottom && box.tag && (
                <div className="card-tag bottom">{box.tag}</div>
              )}
              {box.icon && <div className="card-icon">{box.icon}</div>}
            </div>
          );
        })}
      </div>

      {extraSection && (
        <div className="extraSection">
          {extraSection?.image && (
            <Image
              src={extraSection.image}
              alt={
                extraSection.heading
                  ? `${extraSection.heading} image`
                  : "Extra section image"
              }
              className="extraSectionImage"
              width={800} // replace with your actual or desired width
              height={600} // replace with your actual or desired height
              layout="responsive" // or use "intrinsic" / "fill" depending on layout
            />
          )}
          <div className="extraSectionText">
            {extraSection.heading && <h3>{extraSection.heading}</h3>}
            {extraSection.subheading && <p>{extraSection.subheading}</p>}
          </div>
        </div>
      )}
    </div>
  );

  return contained ? <div className="container">{content}</div> : content;
};

export default StatsGrid;
