import React, { useEffect, useRef, useState } from 'react';

const TESTIMONIALS = [
  { src: '/images/dep1.webp', alt: 'Depoimento de cliente satisfeito 1' },
  { src: '/images/dep2.webp', alt: 'Depoimento de cliente satisfeito 2' },
  { src: '/images/dep3.webp', alt: 'Depoimento de cliente satisfeito 3' },
  { src: '/images/dep4.webp', alt: 'Depoimento de cliente satisfeito 4' },
  { src: '/images/dep5.webp', alt: 'Depoimento de cliente satisfeito 5' },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const autoPlayTimer = useRef<number | null>(null);

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 1000) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  const setIndexClamped = (newIndex: number) => {
    let target = newIndex;
    if (target < 0) target = maxIndex;
    if (target > maxIndex) target = 0;
    setCurrentIndex(target);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayTimer.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer.current !== null) {
      clearInterval(autoPlayTimer.current);
      autoPlayTimer.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [maxIndex]);

  const getTransform = () => {
    if (visibleCount === 1) {
      return `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 14}px))`;
    }
    if (visibleCount === 2) {
      return `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 7}px))`;
    }
    return `translateX(calc(-${(100 / 3) * currentIndex}% - ${(14 / 3) * currentIndex}px))`;
  };

  return (
    <div
      className="tcar select-none"
    >
      <button
        type="button"
        className="tcar-btn prev"
        onClick={() => setIndexClamped(currentIndex - 1)}
        aria-label="Depoimento Anterior"
      >
        ‹
      </button>

      <button
        type="button"
        className="tcar-btn next"
        onClick={() => setIndexClamped(currentIndex + 1)}
        aria-label="Próximo Depoimento"
      >
        ›
      </button>

      <div className="tcar-view">
        <div
          className="tcar-track"
          style={{ transform: getTransform() }}
        >
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="tslide"
              style={{
                background: 'transparent',
                border: 'none',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'none',
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                draggable={false}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '16px',
                  objectFit: 'contain',
                  border: 'none',
                  outline: 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="tcar-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            className={dotIdx === currentIndex ? 'on' : ''}
            onClick={() => setIndexClamped(dotIdx)}
            aria-label={`Ir para depoimento ${dotIdx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
