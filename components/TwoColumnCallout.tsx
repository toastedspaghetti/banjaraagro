"use client";

import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

interface TwoColumnCalloutProps {
  heading: string;
  subheading?: string;
  buttonText?: string;
  buttonUrl?: string;
  className?: string;
  contained?: boolean;
}

const TwoColumnCallout: React.FC<TwoColumnCalloutProps> = ({
  heading,
  subheading,
  buttonText,
  buttonUrl,
  className = "",
  contained = false,
}) => {
  const isButtonVisible = !!buttonText && !!buttonUrl;

  const content = (
    <div
      className={`two-col-callout ${className} ${
        !isButtonVisible ? "no-button" : ""
      }`.trim()}
    >
      <div className="left">
        <h2>{heading}</h2>
        {subheading && <p>{subheading}</p>}
      </div>

      {isButtonVisible && (
        <div className="right">
          <Link href={buttonUrl} className="btn btn-primary btn-curve">
            {buttonText}
            <FaAngleRight />
          </Link>
        </div>
      )}
    </div>
  );

  return contained ? <div className="container">{content}</div> : content;
};

export default TwoColumnCallout;
