import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Link from 'next/link';
import MenuButton from '@src/components/dom/navbar/components/MenuButton';
import MenuLinks from '@src/components/dom/navbar/components/MenuLinks';
import ContactModal from '@src/components/dom/navbar/components/ContactModal';
import clsx from 'clsx';
import styles from '@src/components/dom/navbar/styles/index.module.scss';
import { useCallback } from 'react';
import useIsMobile from '@src/hooks/useIsMobile';
import { useRouter } from 'next/router';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';

function Navbar() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [lenis, setIsContactOpen] = useStore(useShallow((state) => [state.lenis, state.setIsContactOpen]));

  const scrollToPosition = useCallback(
    (position, duration = 1.5) => {
      if (lenis) {
        lenis.scrollTo(position, {
          duration,
          force: true,
          easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
          onComplete: () => {
            lenis.start();
          },
        });
      }
    },
    [lenis],
  );

  const goToTop = useCallback(() => {
    if (router.pathname === '/') {
      scrollToPosition(0);
    }
  }, [router.pathname, scrollToPosition]);

  return (
    <>
      <MenuLinks />
      <ContactModal />

      <header className={styles.root} role="banner">
        <div className={styles.innerHeader}>
          <Link onClick={goToTop} aria-label="Go home" scroll={false} href="/">
            <h4 className={clsx('bold', 'h4')}>PORTFOLIO</h4>
          </Link>

          <div className={styles.rightContainer}>
            {!isMobile && (
              <ButtonLink
                href="#contact"
                label="GET IN TOUCH"
                onClick={(e) => {
                  e.preventDefault();
                  setIsContactOpen(true);
                }}
              />
            )}
            <MenuButton />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
