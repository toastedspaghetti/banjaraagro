"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import LinkGradient from "./linkGradient";
import { NextArrow, PrevArrow } from "./CustomArrows";

interface Slide {
  imageSrc?: string;
  alt?: string;
  heading: string;
  subHeading?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface SliderExampleProps {
  slides: Slide[];
  className?: string;
  autoPlay?: boolean;
  showDots?: boolean;
}

const SliderExample = ({
  slides,
  className = "",
  autoPlay = true,
  showDots = true,
}: SliderExampleProps) => {
  const sliderRef = useRef<Slider>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: showDots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoPlay,
    arrows: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    swipe: true,
    touchMove: true,
    touchThreshold: 8,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    lazyLoad: "ondemand" as "ondemand" | "progressive",
  };

  useEffect(() => {
    if (!autoPlay) {
      sliderRef.current?.slickPause?.();
      return;
    }

    const observerTarget = wrapperRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (sliderRef.current) {
          if (entry.isIntersecting) {
            sliderRef.current.slickPlay?.();
          } else {
            sliderRef.current.slickPause?.();
          }
        }
      },
      { threshold: 0.25 }
    );

    if (observerTarget) {
      observer.observe(observerTarget);
    }

    return () => {
      if (observerTarget) {
        observer.unobserve(observerTarget);
      }
    };
  }, [autoPlay]);

  return (
    <div
      ref={wrapperRef}
      className={`slider-wrapper ${className}`.trim()}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className={`container-banner-image ${
                !slide.imageSrc ? "no-image" : ""
              }`}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
              }}
            >
              {slide.imageSrc && (
                <Image
                  src={slide.imageSrc}
                  alt={slide.alt ?? ""}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw"
                  priority
                />
              )}
              <div className="container">
                <div className="content-container">
                  <div className="banner-content">
                    <h2>{slide.heading}</h2>
                    {slide.subHeading && (
                      <p className="subheading">{slide.subHeading}</p>
                    )}
                  </div>
                  {slide.buttonText && slide.buttonLink && (
                    <div className="banner-button-container">
                      <LinkGradient
                        href={slide.buttonLink}
                        className="gradient-link btn-curve"
                        data-text={slide.buttonText}
                        fullBackground
                      >
                        {slide.buttonText}
                      </LinkGradient>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderExample;
