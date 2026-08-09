import { useRef } from 'react';
import dynamic from 'next/dynamic';
import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Image from 'next/image';
import clsx from 'clsx';
import styles from '@src/pages/components/home/styles/home.module.scss';
import { useStore } from '@src/store';

const NeonSphereCanvas = dynamic(() => import('@src/pages/components/home/components/NeonSphereCanvas'), { ssr: false });

function Home() {
  const rootRef = useRef();
  const titleRef = useRef();
  const setIsContactOpen = useStore((state) => state.setIsContactOpen);

  return (
    <section ref={rootRef} className={clsx(styles.root)}>
      <NeonSphereCanvas />

      <div className={styles.centerHeroContainer}>
        <div className={styles.topBadge}>
          <span className={styles.pulseDot} />
          <span>EXPERT DIGITAL SOLUTIONS TEAM</span>
        </div>

        <h1 ref={titleRef} className={styles.mainTypographyTitle}>
          PORTFOLIO
        </h1>

        <p className={styles.subtextDescription}>
          We don&apos;t just build — we engineer. Whether it&apos;s a custom Discord bot, a jaw-dropping 3D website, a precision-tuned Windows system, or a script that automates the grind — we bring
          the tools, the skill, and the obsession with quality to every project.
        </p>

        <div className={styles.ctaButtonWrapper}>
          <ButtonLink
            href="#contact"
            label="GET IN TOUCH WITH US"
            onClick={(e) => {
              e.preventDefault();
              setIsContactOpen(true);
            }}
          />
        </div>
      </div>

      <div className={styles.motherboardContainer}>
        <Image
          src="/motherboard.png"
          alt="Motherboard"
          fill
          sizes="100%"
          priority
        />
      </div>
    </section>
  );
}

export default Home;
