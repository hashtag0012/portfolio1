import Image from 'next/image';
import styles from './MotherboardVideo.module.scss';

export default function HeroGraphic() {
  return (
    <div className={styles.outerPositioner}>
      <div className={styles.wrapper}>
        <div className={styles.glowOrb} />
        <Image src="/optimization.webp" alt="Optimization Graphic" width={500} height={500} priority className={styles.graphicImage} />
      </div>
    </div>
  );
}
