import { useEffect, useRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import gsap from 'gsap';
import styles from '@src/components/dom/navbar/styles/menuLinks.module.scss';
import { useRouter } from 'next/router';
import { useStore } from '@src/store';

const LINKS = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms of Service', href: '/terms' },
];

function MenuLinks() {
  const timeline = useRef(
    gsap.timeline({
      paused: true,
      defaults: { duration: 0.35, ease: 'power2.out' },
    }),
  );
  const [isMenuOpen, setIsMenuOpen, setIsContactOpen, lenis] = useStore((state) => [state.isMenuOpen, state.setIsMenuOpen, state.setIsContactOpen, state.lenis]);
  const menuRef = useRef();
  const panelRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const tl = timeline.current;
    const ctx = gsap.context(() => {
      gsap.set(menuRef.current, { autoAlpha: 0, pointerEvents: 'none' });
      gsap.set(panelRef.current, { y: 16, scale: 0.98 });
      tl.to(menuRef.current, { autoAlpha: 1, pointerEvents: 'auto' }, 0).to(panelRef.current, { y: 0, scale: 1 }, 0);
    });

    return () => {
      tl.kill();
      ctx.kill();
    };
  }, []);

  useEffect(() => {
    const tl = timeline.current;
    if (isMenuOpen) {
      tl.play();
      lenis?.stop();
    } else {
      tl.reverse();
      lenis?.start();
    }
  }, [isMenuOpen, lenis]);

  const close = () => {
    setIsMenuOpen(false);
    lenis?.start();
  };

  const openContact = () => {
    close();
    setTimeout(() => setIsContactOpen(true), 220);
  };

  return (
    <nav id="menu" ref={menuRef} className={styles.menu} aria-hidden={!isMenuOpen}>
      <button type="button" className={styles.backdrop} aria-label="Close menu" onClick={close} />
      <div ref={panelRef} className={styles.menuPanel}>
        <div className={styles.menuHeader}>
          <p className={styles.menuLabel}>Navigate</p>
          <button type="button" onClick={close} className={styles.menuClose} aria-label="Close menu">
            <p>&#10005;</p>
          </button>
        </div>

        <div className={styles.menuList}>
          {LINKS.map((link) => (
            <div key={link.title} className={clsx(styles.menuListItem, router.pathname === link.href && styles.menuListItemActive)}>
              <Link aria-label={`Go to ${link.title}`} scroll={false} href={link.href} onClick={close}>
                <span>{link.title}</span>
              </Link>
            </div>
          ))}
          <div className={styles.menuListItem}>
            <button type="button" onClick={openContact} className={styles.menuAction}>
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MenuLinks;
