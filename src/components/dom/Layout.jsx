import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Transition as ReactTransition, SwitchTransition } from 'react-transition-group';

import Footer from '@src/components/dom/Footer';
import PreFooter from '@src/components/dom/PreFooter';
import gsap from 'gsap';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';

function Layout({ children, layoutRef, mainRef, router }) {
  const [lenis, introOut, setIsLoading, isMenuOpen, setIsMenuOpen, setIsAbout] = useStore(
    useShallow((state) => [state.lenis, state.introOut, state.setIsLoading, state.isMenuOpen, state.setIsMenuOpen, state.setIsAbout]),
  );

  const enterTimelineRef = useRef();
  const exitTimelineRef = useRef();

  const [isEntering, setIsEntering] = useState(false);

  const menuTime = useMemo(() => (isMenuOpen ? 0.25 : 0), [isMenuOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      lenis?.scrollTo(0, { immediate: true });
      if (mainRef?.current) {
        mainRef.current.scrollTop = 0;
      }
    }
  }, [router?.asPath, lenis, mainRef]);

  const handleEnter = useCallback(
    () => {
      if (exitTimelineRef.current) exitTimelineRef.current.pause();

      const tl = gsap.timeline({
        onComplete: () => {
          setIsAbout(router.asPath === '/about');
          setIsLoading(false);
          lenis?.start();
        },
      });

      enterTimelineRef.current = tl;
      setIsEntering(true);

      tl.set(
        layoutRef.current,
        {
          ease: 'power2.inOut',
          height: '90%',
          opacity: 1,
          onComplete: () => {
            setIsAbout(router.asPath === '/about');
            setIsEntering(false);
          },
        },
        0,
      )
        .to(
          mainRef.current,
          {
            ease: 'power2.inOut',
            x: '0px',
          },
          0,
        )
        .to(
          mainRef.current,
          {
            ease: 'power2.inOut',
            borderRadius: 0,
            scale: 1,
          },
          0.2,
        )
        .to(
          layoutRef.current,
          {
            ease: 'power2.inOut',
            height: '100%',
            opacity: 1,
          },
          0.2,
        )
        .to(
          'header',
          {
            ease: 'power2.inOut',
            autoAlpha: 1,
          },
          0.3,
        )
        .to(
          mainRef.current,
          {
            ease: 'power2.inOut',
            height: 'auto',
            border: 'none',
            pointerEvents: 'auto',
          },
          0.3,
        );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [introOut],
  );

  const handleExit = useCallback(
    () => {
      if (introOut) {
        if (enterTimelineRef.current) enterTimelineRef.current.pause();

        lenis?.stop();
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
        if (isEntering === false) {
          const tl = gsap.timeline({
            onComplete: () => {
              setIsLoading(true);
              lenis?.scrollTo(0, { force: true });
            },
          });

          exitTimelineRef.current = tl;

          if (document?.getElementById('scrollbar')) {
            tl.to(
              document.getElementById('scrollbar'),
              {
                ease: 'power2.inOut',
                autoAlpha: 0,
                duration: 0.5,
              },
              menuTime,
            );
          }

          tl.to(
            'header',
            {
              ease: 'power2.inOut',
              autoAlpha: 0,
              duration: 0.5,
              onComplete: () => {
                gsap.set('header', {
                  left: 0,
                  top: 0,
                  scale: 1,
                  duration: 0,
                });
              },
              overwrite: true,
            },
            menuTime,
          )
            .to(
              layoutRef.current,
              {
                ease: 'power2.inOut',
                height: '90svh',
                opacity: 1,
                duration: 0.5,
              },
              menuTime,
            )
            .to(
              mainRef.current,
              {
                ease: 'power2.inOut',
                scale: 0.9,
                opacity: 1,
                border: '2px solid #f0f4f1',
                borderRadius: '1.3888888889vw',
                duration: 0.5,
              },
              menuTime,
            )
            .to(
              mainRef.current,
              {
                ease: 'power2.inOut',
                x: '-100%',
                duration: 0.5,
              },
              0.5 + menuTime,
            )
            .set(mainRef.current, {
              x: '100%',
            });
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [introOut, menuTime, isEntering],
  );

  return (
    <>
      <SwitchTransition>
        <ReactTransition
          key={router.asPath}
          in={false}
          unmountOnExit
          timeout={{
            enter: 600,
            exit: 600,
          }}
          onEnter={handleEnter}
          onExit={handleExit}
        >
          {children}
        </ReactTransition>
      </SwitchTransition>

      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div style={{ sticky: 'top', position: 'sticky', bottom: 0, zIndex: 1 }}>
          <PreFooter />
        </div>
        <div style={{ position: 'relative', zIndex: 2, marginTop: '-20vh' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
