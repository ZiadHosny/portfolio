"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  id: string;
  title: string;
  poster: string;
  /** "short" = vertical 9:16, "video" = 16:9 */
  variant?: "short" | "video";
};

/** Shows a poster + play button; only loads the YouTube iframe after a click. */
export const LiteYouTube = ({ id, title, poster, variant = "video" }: Props) => {
  const [active, setActive] = useState(false);
  const aspect = variant === "short" ? "aspect-[9/16]" : "aspect-video";

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-black ${aspect}`}>
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={poster}
            alt={`Thumbnail of the video “${title}”`}
            fill
            sizes="(min-width: 768px) 300px, 80vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple/90 shadow-[0_0_40px_rgb(189_147_249_/_0.6)] transition group-hover:scale-110">
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="#282a36" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
};
