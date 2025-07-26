"use client";

import React from "react";
import classNames from "classnames";

interface FlexGridItem {
  icon: React.ReactNode;
  heading: string;
  content: string;
}

interface FlexGridProps {
  items: FlexGridItem[];
  className?: string;
  itemClassName?: string;
  sectionHeading?: React.ReactNode;
  sectionSubheading?: React.ReactNode;
}

const FlexGrid: React.FC<FlexGridProps> = ({
  items,
  className,
  itemClassName,
  sectionHeading,
  sectionSubheading,
}) => {
  return (
    <div className={classNames("container", className)}>
      {(sectionHeading || sectionSubheading) && (
        <div className="flex-grid-intro">
          {sectionHeading && <h3 className="flex-grid-section-heading">{sectionHeading}</h3>}
          {sectionSubheading && <p className="flex-grid-section-subheading">{sectionSubheading}</p>}
        </div>
      )}

      <div className={`flex-grid ${className ? className : ""}`}>
        {items.map((item, index) => (
          <div
            className={classNames("flex-grid-item", itemClassName)}
            key={index}
          >
            <div className="flex-grid-top">
              <div className="flex-grid-icon">{item.icon}</div>
              <h3 className="flex-grid-heading">{item.heading}</h3>
            </div>

            <p className="flex-grid-content">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexGrid;
