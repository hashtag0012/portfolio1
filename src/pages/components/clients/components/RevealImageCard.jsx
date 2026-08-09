import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import styles from './RevealImageCard.module.scss';

export default function RevealImageCard({ src, alt = 'Project Image' }) {
  const cardRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.15 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={styles.imageCardContainer}>
      <div className={styles.imageWrapper}>
        <Image src={src} alt={alt} fill priority sizes="(max-width: 768px) 92vw, 45vw" className={`${styles.image} ${isRevealed ? styles.imageRevealed : ''}`} />
        <div className={`${styles.mask} ${isRevealed ? styles.revealed : ''}`} />
      </div>
    </div>
  );
}
