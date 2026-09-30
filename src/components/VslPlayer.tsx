import React, { useRef, useState, useEffect } from 'react';

export function VslPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
    };

    const onPause = () => {
      setIsPlaying(false);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setHasStarted(false);
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <div
      className="hero-video"
      style={{ margin: '22px auto 20px', maxWidth: '310px', width: '100%' }}
    >
      <div
        id="vslWrap"
        onClick={togglePlay}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '9 / 16',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--line)',
          boxShadow: '0 0 26px var(--glow)',
          background: '#000',
          cursor: 'pointer',
        }}
      >
        <video
          ref={videoRef}
          id="vsl"
          src="/videos/vsl.mp4"
          poster="/images/vsl-poster.webp"
          playsInline
          preload="metadata"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Overlay do Botão de Play (quando pausado ou antes de iniciar) */}
        {!isPlaying && (
          <div
            id="vslPlay"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              background: hasStarted
                ? 'rgba(0, 0, 0, 0.45)'
                : 'radial-gradient(420px 300px at 50% 40%, rgba(231, 183, 101, 0.14), rgba(0, 0, 0, 0.55))',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              transition: 'all 0.2s ease',
            }}
          >
            <span
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold-lt), var(--gold-dp))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 28px var(--glow)',
                transform: 'scale(1)',
                transition: 'transform 0.2s ease',
              }}
            >
              <span
                style={{
                  borderLeft: '22px solid #17130c',
                  borderTop: '14px solid transparent',
                  borderBottom: '14px solid transparent',
                  marginLeft: '6px',
                }}
              />
            </span>
            <span
              style={{
                color: 'var(--gold-lt)',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                textShadow: '0 2px 8px rgba(0,0,0,0.8)',
              }}
            >
              {hasStarted ? 'Clique para continuar' : 'Assistir ao vídeo'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
