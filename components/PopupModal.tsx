"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactDOM from "react-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

interface SlideItem {
  imageUrl: string;
  text?: string;
}

interface PopupModalProps {
  slides: SlideItem[];
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ slides, onClose }) => {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth <= 768);

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const preventTouch = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", preventTouch, { passive: false });

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.removeEventListener("touchmove", preventTouch);
      setMounted(false);
    };
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  const modalContent = (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className={`popup-content ${
          isMobile ? "popup-mobile" : "popup-desktop"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="slide-container">
          <Image
            src={slides[current].imageUrl}
            alt={`Slide ${current + 1}`}
            width={800} // Replace with actual width
            height={600} // Replace with actual height
            priority={false} // or `true` if it's above the fold
          />
          {slides.length > 1 && (
            <div className="slide-controls">
              <button onClick={prevSlide}>
                <FaChevronLeft />
              </button>
              <button onClick={nextSlide}>
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>

        {slides[current].text && <p>{slides[current].text}</p>}
      </div>
    </div>
  );

  if (mounted) {
    return ReactDOM.createPortal(modalContent, document.body);
  }

  return null;
};

export default PopupModal;
