import { FC, CSSProperties, MouseEventHandler } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const NextArrow: FC<ArrowProps> = ({ className, style, onClick }) => (
  <div className={className} style={{ ...style }} onClick={onClick}>
    <FaAngleRight />
  </div>
);

export const PrevArrow: FC<ArrowProps> = ({ className, style, onClick }) => (
  <div className={className} style={{ ...style }} onClick={onClick}>
    <FaAngleLeft />
  </div>
);