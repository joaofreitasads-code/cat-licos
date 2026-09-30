import React, { useRef, useState } from 'react';

export function VslPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setIsPlaying] = useState(false);
  const [showPlayBtn, setShowPlayBtn] = useState(true);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.controls = false;
    }
    setShowPlayBtn(true);
    setIsPlaying(false);
  };

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.controls = true;
    const playPromise = video.play();
    if (playPromise && playPromise.catch) {
      playPromise.catch(() => {});
    }
    setShowPlayBtn(false);
    setIsPlaying(true);
  };

  return (
    <div
      className="hero-video"
      style={{ margin: '22px auto 20px', maxWidth: '310px', width: '100%' }}
    >
      <div
        id="vslWrap"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '9 / 16',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--line)',
          boxShadow: '0 0 26px var(--glow)',
          background: '#000',
        }}
      >
        <video
          ref={videoRef}
          id="vsl"
          src="/videos/vsl.mp4"
          poster="/images/vsl-poster.webp"
          playsInline
          preload="metadata"
          onClick={handleVideoClick}
          onEnded={handleEnded}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {showPlayBtn && (
          <button
            type="button"
            id="vslPlay"
            aria-label="Assistir ao vídeo"
            onClick={handlePlayClick}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
              cursor: 'pointer',
              background:
                'radial-gradient(420px 300px at 50% 40%, rgba(231, 183, 101, 0.14), rgba(0, 0, 0, 0.55))',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <span
              style={{
                width: '66px',
                height: '66px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold-lt), var(--gold-dp))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 28px var(--glow)',
              }}
            >
              <span
                style={{
                  borderLeft: '20px solid #17130c',
                  borderTop: '13px solid transparent',
                  borderBottom: '13px solid transparent',
                  marginLeft: '6px',
                }}
              />
            </span>
            <span
              style={{
                color: 'var(--gold-lt)',
                fontWeight: 700,
                fontSize: '0.88rem',
                letterSpacing: '0.04em',
              }}
            >
              Assistir ao vídeo
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
