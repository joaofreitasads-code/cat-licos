import React, { useRef } from 'react';

export interface MarqueeImage {
  src: string;
  alt: string;
}

interface MarqueeRowProps {
  images: MarqueeImage[];
  direction?: 'left' | 'right';
  maxWidth?: string;
  speed?: number; // duration in seconds
}

export function MarqueeRow({
  images,
  direction = 'left',
  maxWidth,
  speed = 36,
}: MarqueeRowProps) {
  const viewRef = useRef<HTMLDivElement>(null);

  // Duplicating the items for seamless infinite looping
  const duplicated = [...images, ...images];

  const handleScroll = (offset: number) => {
    if (viewRef.current) {
      viewRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="marquee group select-none"
      style={maxWidth ? { maxWidth } : undefined}
    >
      <button
        className="mq-btn prev"
        type="button"
        aria-label="Anterior"
        onClick={() => handleScroll(-260)}
      >
        ‹
      </button>

      <div className="mq-view" ref={viewRef}>
        <div
          className={`mq-track ${direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee'}`}
          style={{
            animationDuration: `${speed}s`,
          }}
        >
          {duplicated.map((item, idx) => (
            <div className="mq-item" key={idx}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                draggable={false}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    '/thumbnails/anjo-da-guarda.jpg';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="mq-btn next"
        type="button"
        aria-label="Próximo"
        onClick={() => handleScroll(260)}
      >
        ›
      </button>
    </div>
  );
}
