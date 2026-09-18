"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Image, { type ImageProps } from "next/image";
import { X, ZoomIn } from "lucide-react";

interface LightboxImage {
  src: string;
  alt?: string;
  caption?: string;
}

interface LightboxContextValue {
  openLightbox: (image: LightboxImage) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useImageLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error(
      "useImageLightbox must be used within an ImageLightboxProvider"
    );
  }
  return context;
}

export function ImageLightboxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLightbox = useCallback((image: LightboxImage) => {
    setActiveImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  // Lock body scroll and listen for Escape key when lightbox is active
  useEffect(() => {
    if (!activeImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, closeLightbox]);

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}

      {mounted &&
        activeImage &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt || "Image preview"}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-all duration-200 animate-in fade-in md:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button with 'X' icon at top-right */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image popup"
              className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md transition-all duration-150 hover:scale-105 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95 md:right-8 md:top-8 md:h-12 md:w-12 cursor-pointer"
            >
              <X size={24} className="stroke-[2.5]" />
            </button>

            {/* Clickable wrapper around the image to prevent closing when clicking the image itself */}
            <div
              className="relative flex max-h-[85vh] max-w-[95vw] flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeImage.src}
                alt={activeImage.alt || "Expanded view"}
                className="max-h-[80vh] max-w-[95vw] rounded-xl object-contain shadow-2xl select-none md:max-h-[85vh] md:max-w-[90vw]"
              />

              {/* Caption / description if available */}
              {(activeImage.caption || activeImage.alt) && (
                <div className="mt-3 max-w-3xl rounded-xl border border-white/15 bg-black/60 px-4 py-2 text-center text-xs leading-relaxed text-white/90 shadow-md backdrop-blur-md md:text-sm select-none">
                  {activeImage.caption || activeImage.alt}
                </div>
              )}
            </div>

            {/* Hint to close */}
            <div className="pointer-events-none absolute bottom-4 text-center text-[11px] uppercase tracking-widest text-white/40">
              Click anywhere outside or press ESC to close
            </div>
          </div>,
          document.body
        )}
    </LightboxContext.Provider>
  );
}

export interface ExpandableImageProps
  extends Omit<ImageProps, "onClick" | "alt"> {
  alt: string;
  caption?: string;
  containerClassName?: string;
  showExpandHint?: boolean;
}

export function ExpandableImage({
  src,
  alt,
  caption,
  containerClassName = "",
  className = "",
  showExpandHint = true,
  ...imageProps
}: ExpandableImageProps) {
  const { openLightbox } = useImageLightbox();

  const imageSrcString = typeof src === "string" ? src : "";

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (imageSrcString) {
      openLightbox({
        src: imageSrcString,
        alt,
        caption,
      });
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e as unknown as React.MouseEvent);
        }
      }}
      aria-label={`Expand image: ${alt}`}
      className={`group relative block w-full cursor-zoom-in overflow-hidden transition-all duration-200 ${containerClassName}`}
    >
      <Image
        src={src}
        alt={alt}
        className={`transition-transform duration-300 ease-out group-hover:scale-[1.02] ${className}`}
        {...imageProps}
      />

      {/* Subtle expand badge on hover */}
      {showExpandHint && (
        <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/65 px-2.5 py-1 text-[11px] font-medium text-white shadow-lg backdrop-blur-md opacity-0 transition-all duration-200 group-hover:opacity-100">
          <ZoomIn size={13} className="text-white/90" />
          <span>Expand</span>
        </div>
      )}
    </div>
  );
}
