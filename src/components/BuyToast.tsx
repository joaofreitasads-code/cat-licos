import React, { useEffect, useRef, useState } from 'react';

const BUYERS = [
  { name: 'Jackson', city: 'Curitiba, PR' },
  { name: 'Cinthia', city: 'Belo Horizonte, MG' },
  { name: 'Everton', city: 'São Paulo, SP' },
  { name: 'Raphael', city: 'Florianópolis, SC' },
  { name: 'Márcia', city: 'Porto Alegre, RS' },
  { name: 'Willian', city: 'Salvador, BA' },
  { name: 'Adriana', city: 'Fortaleza, CE' },
  { name: 'Fábio', city: 'Goiânia, GO' },
];

const TIMES = [
  'agora mesmo',
  'há 1 minuto',
  'há 2 minutos',
  'há 3 minutos',
  'há 5 minutos',
];

export function BuyToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(BUYERS[0]);
  const [currentTime, setCurrentTime] = useState('há 2 minutos');
  const [isDismissed, setIsDismissed] = useState(false);
  const buyerIndex = useRef(0);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    if (isDismissed) return;

    let nextTimer: number;

    const showNotification = () => {
      if (isDismissed) return;
      const buyer = BUYERS[buyerIndex.current % BUYERS.length];
      buyerIndex.current += 1;
      const time = TIMES[Math.floor(Math.random() * TIMES.length)];

      setCurrentBuyer(buyer);
      setCurrentTime(time);
      setIsVisible(true);

      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      const nextDelay = 9000 + Math.floor(Math.random() * 13000);
      nextTimer = window.setTimeout(showNotification, nextDelay);
    };

    const initialTimer = window.setTimeout(showNotification, 3000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(nextTimer);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div
      className={`buy-toast ${isVisible ? 'show' : ''}`}
      id="buyToast"
      role="status"
      aria-live="polite"
    >
      <span className="bt-ico">✓</span>
      <span className="bt-txt">
        <span id="btMsg">
          <b>{currentBuyer.name}</b> de {currentBuyer.city} comprou o Plano Completo
        </span>
        <span className="bt-time" id="btTime">
          {currentTime}
        </span>
      </span>
      <button
        type="button"
        className="bt-close"
        id="btClose"
        aria-label="Fechar"
        onClick={() => {
          setIsDismissed(true);
          setIsVisible(false);
        }}
      >
        ✕
      </button>
    </div>
  );
}
