import React from "react";

type HeadingTextProps = {
  className?: string;
  heading: React.ReactNode;
  text: React.ReactNode;
  reverse?: boolean;
};

const HeadingText: React.FC<HeadingTextProps> = ({
  className = "",
  heading,
  text,
  reverse = false,
}) => {
  const containerClasses = `flex-parent heading-text ${className}`.trim();

  const headingElement = (
    <div className="heading">
      <h3>{heading}</h3>
    </div>
  );

  const textElement = (
    <div className="text">
      <p>{text}</p>
    </div>
  );

  return (
    <div className={containerClasses}>
      {reverse ? (
        <>
          {textElement}
          {headingElement}
        </>
      ) : (
        <>
          {headingElement}
          {textElement}
        </>
      )}
    </div>
  );
};

export default HeadingText;
