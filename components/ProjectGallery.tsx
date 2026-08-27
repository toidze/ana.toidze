"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cn } from "@/lib/cn";
import type { GalleryItem } from "@/types";
import { ImageFrame } from "./ImageFrame";
import { Reveal } from "./Reveal";

/**
 * Project gallery — Figma "Section" (6:190).
 * Each row: caption (340px gutter, 18px, hugs the image) + image (fixed 70%
 * width, height following the image's own proportions), alternating which side
 * the image is on. Click opens the full-size lightbox.
 */
export function ProjectGallery({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState(-1);
  if (!items?.length) return null;

  const slides = items
    .filter((it) => it.image?.src)
    .map((it) => ({
      src: it.image!.src,
      alt: it.image!.alt,
      width: it.image!.width,
      height: it.image!.height,
    }));

  return (
    <div className="flex flex-col gap-14 lg:gap-[96px]">
      {items.map((item, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <Reveal key={i}>
            {/* Mobile: caption then image, stacked. Desktop: alternating sides. */}
            <figure
              className={cn(
                "flex flex-col-reverse gap-3 lg:items-start lg:gap-10",
                imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
              )}
            >
              <p
                className={cn(
                  "text-left text-[16px] leading-[26px] text-ink lg:flex-1 lg:text-[18px] lg:leading-[30px]",
                  imageLeft ? "lg:text-left" : "lg:text-right"
                )}
              >
                {item.caption}
              </p>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group block w-full cursor-zoom-in lg:w-[70%] lg:shrink-0"
                aria-label={`Open ${item.caption || "image"} full size`}
              >
                <ImageFrame
                  image={item.image}
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  hoverZoom
                />
              </button>
            </figure>
          </Reveal>
        );
      })}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        render={{
          iconClose: () => <X size={28} strokeWidth={1.5} />,
          iconPrev: () => <ChevronLeft size={40} strokeWidth={1.5} />,
          iconNext: () => <ChevronRight size={40} strokeWidth={1.5} />,
        }}
      />
    </div>
  );
}
