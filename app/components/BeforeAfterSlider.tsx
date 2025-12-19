import React, { useRef, useState } from 'react';
import styles from '../page.module.css';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  altBefore?: string;
  altAfter?: string;
}

export default function BeforeAfterSlider({ beforeImg, afterImg, altBefore, altAfter }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div className={styles.beforeAfterSlider} ref={containerRef} onMouseMove={e => e.buttons === 1 && handleDrag(e)}>
      <img src={beforeImg} alt={altBefore} className={styles.sliderImg} style={{ width: '100%' }} />
      <div className={styles.sliderOverlay} style={{ width: `${sliderPos}%` }}>
        <img src={afterImg} alt={altAfter} className={styles.sliderImg} style={{ width: '100%' }} />
      </div>
      <div
        className={styles.sliderHandle}
        style={{ left: `${sliderPos}%` }}
        onMouseDown={e => e.preventDefault()}
        onMouseMove={handleDrag}
      >
        <span className={styles.sliderLabel}>⇆</span>
      </div>
      <div className={styles.sliderLabels}>
        <span className={styles.sliderBefore}>Antes</span>
        <span className={styles.sliderAfter}>Depois</span>
      </div>
    </div>
  );
}
