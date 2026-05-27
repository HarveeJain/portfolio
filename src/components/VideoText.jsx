"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";

const cn = (...inputs) => inputs.filter(Boolean).join(" ");

export default function VideoText({
  src,
  children,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = 18,
  fontWeight = "bold",
  textAnchor = "middle",
  dominantBaseline = "middle",
  fontFamily = "sans-serif",
  as: Component = "div",
  letterSpacing,
  textTransform = "none",
  onVideoLoad,
  onVideoError,
  sources = [],
  poster,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  const isGif = src.toLowerCase().endsWith(".gif");

  const content = useMemo(() => {
    return React.Children.toArray(children)
      .map((child) =>
        typeof child === "string" || typeof child === "number" ? child : ""
      )
      .join("");
  }, [children]);

  const svgMask = useMemo(() => {
    const responsiveFontSize =
      typeof fontSize === "number" ? `${fontSize}vw` : fontSize;

    const escapedContent = content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

    const svgString = `
      <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
        <text
          x='50%'
          y='50%'
          font-size='${responsiveFontSize}'
          font-weight='${fontWeight}'
          text-anchor='${textAnchor}'
          dominant-baseline='${dominantBaseline}'
          font-family='${fontFamily}'
          fill='white'
          ${letterSpacing ? `letter-spacing='${letterSpacing}'` : ""}
          ${textTransform !== "none" ? `text-transform='${textTransform}'` : ""}
        >
          ${escapedContent}
        </text>
      </svg>
    `;

    return `url("data:image/svg+xml,${encodeURIComponent(svgString.trim())}")`;
  }, [
    content,
    fontSize,
    fontWeight,
    textAnchor,
    dominantBaseline,
    fontFamily,
    letterSpacing,
    textTransform,
  ]);

  const handleLoad = () => {
    setIsLoaded(true);
    onVideoLoad?.();
  };

  const handleVideoError = (event) => {
    console.error("Video failed:", event);
    onVideoError?.(event.nativeEvent);
  };

  useEffect(() => {
    if (!isGif && videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => {});
    }
  }, [autoPlay, isGif]);

  return (
    <Component
      className={cn(
        "relative w-full h-full overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          !isLoaded && "opacity-0"
        )}
        style={{
          maskImage: svgMask,
          WebkitMaskImage: svgMask,

          maskSize: "contain",
          WebkitMaskSize: "contain",

          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",

          maskPosition: "center",
          WebkitMaskPosition: "center",

          background:
            "linear-gradient(135deg, #ff0080, #ff4db8, #ff66cc)",

          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.1s linear",
        }}
      >
        {isGif ? (
          <img
            src={src}
            onLoad={handleLoad}
            className="
              w-full
              h-full
              object-cover
              mix-blend-screen
              opacity-80
              saturate-200
              brightness-125
              contrast-125
            "
            alt=""
          />
        ) : (
          <video
            ref={videoRef}
            className="
              w-full
              h-full
              object-cover
              mix-blend-screen
              opacity-80
              saturate-200
              brightness-125
              contrast-125
            "
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            preload={preload}
            playsInline
            poster={poster}
            onLoadedData={handleLoad}
            onError={handleVideoError}
          >
            <source src={src} type="video/mp4" />

            {sources.map((s, i) => (
              <source key={i} src={s.src} type={s.type} />
            ))}
          </video>
        )}
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-pink-400/70 tracking-[0.3em] text-sm md:text-base">
          Decoding Data ...
        </div>
      )}

      <span className="sr-only">{content}</span>
    </Component>
  );
}