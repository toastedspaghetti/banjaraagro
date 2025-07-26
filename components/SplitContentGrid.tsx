"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BoxContent {
  heading?: string;
  subheading?: string;
  bgImage?: string;
  iFrameYoutube?: string; // ✅ New field for YouTube video
}

interface ExtraSectionContent {
  heading?: string;
  subheading?: string;
  image?: string;
}

interface SplitContentGridProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonUrl: string;
  column2Boxes: BoxContent[];
  className?: string;
  buttonClassName?: string;
  column1ClassName?: string; // ✅ New
  column2ClassName?: string; // ✅ New
  extraSection?: ExtraSectionContent;
}

const SplitContentGrid: React.FC<SplitContentGridProps> = ({
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
}) => {
  const isScrollable = column2Boxes.length > 2;

  return (
    <div
      className={`gridWrapper ${className} ${
        isScrollable ? "scrollable-parent" : ""
      }`.trim()}
    >
      <div className={`column1 ${column1ClassName}`.trim()}>
        <h2>{heading}</h2>
        <p>{subheading}</p>
        <Link href={buttonUrl} className={`btn ${buttonClassName}`}>
          {buttonText}
        </Link>
      </div>

      <div
        className={`column2 ${column2ClassName} ${
          isScrollable ? "scrollable" : ""
        }`.trim()}
      >
        {column2Boxes.map((box, index) => (
          <div
            key={index}
            className={`contentBox ${box.bgImage ? "has-image" : ""} ${
              box.iFrameYoutube ? "has-iframe" : ""
            }`}
            style={
              box.bgImage && !box.iFrameYoutube
                ? {
                    backgroundImage: `url(${box.bgImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }
                : undefined
            }
          >
            {box.iFrameYoutube ? (
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src={box.iFrameYoutube}
                  title={`YouTube video ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <>
                {box.heading && <span className="sub-text">{box.heading}</span>}
                {box.subheading && <p>{box.subheading}</p>}
              </>
            )}
          </div>
        ))}
      </div>

      {extraSection && (
        <div className="extraSection">
          {extraSection.image && (
            <Image
              src={extraSection.image}
              alt={extraSection.heading || "Extra section image"}
              className="extraSectionImage"
              width={800} // Replace with actual width
              height={600} // Replace with actual height
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
};

export default SplitContentGrid;
