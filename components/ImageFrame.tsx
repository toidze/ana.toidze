import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ResolvedImage } from "@/types";

export function ImageFrame({
  image,
  aspect,
  sizes = "100vw",
  className,
  priority = false,
  hoverZoom = false,
}: {
  image: ResolvedImage;
  /** CSS aspect-ratio, e.g. "16 / 10". Falls back to the image's own ratio. */
  aspect?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  /** Zoom the image inside the clipped frame when an ancestor `.group` is hovered. */
  hoverZoom?: boolean;
}) {
  const ratio =
    aspect ??
    (image ? `${image.width} / ${image.height}` : "16 / 10");

  return (
    <div
      className={cn("relative w-full overflow-hidden bg-[#ececec]", className)}
      style={{ aspectRatio: ratio }}
    >
      {image?.src && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover",
            hoverZoom &&
              "will-change-transform transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.04]"
          )}
        />
      )}
    </div>
  );
}
