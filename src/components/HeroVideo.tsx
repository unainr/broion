import { useEffect, useRef } from "react";

type HeroVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const resume = () => {
      if (!document.hidden && video.paused) void video.play().catch(() => {});
    };

    video.addEventListener("canplay", resume);
    video.addEventListener("stalled", resume);
    document.addEventListener("visibilitychange", resume);
    resume();

    return () => {
      video.removeEventListener("canplay", resume);
      video.removeEventListener("stalled", resume);
      document.removeEventListener("visibilitychange", resume);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
