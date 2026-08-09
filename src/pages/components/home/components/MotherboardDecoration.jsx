import Image from 'next/image';
import styles from './MotherboardDecoration.module.scss';

export default function MotherboardDecoration() {
  return (
    <div className={styles.motherboardContainer} title="Hardware & Optimization Engineering">
      <div className={styles.wrapper}>
        <Image src="/motherboard_opt.png" alt="Hardware & System Optimization" width={460} height={460} priority className={styles.motherboardImage} />
      </div>
    </div>
  );
}
