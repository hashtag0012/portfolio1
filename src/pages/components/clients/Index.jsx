import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import RevealImageCard from '@src/pages/components/clients/components/RevealImageCard';
import clsx from 'clsx';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useRef } from 'react';

const SERVICES = [
  {
    id: '01',
    title: 'Discord Bots & Server Setup',
    src: '/hii.webp',
    alt: 'Discord Bots and Server Setup',
    lines: [
      'We offer full Discord server setup and custom bots built to your needs —',
      'moderation, auto-roles, tickets, anti-nuke, economy, and 24/7 automation.',
      'Configured, deployed, and maintained with precision for your community.',
    ],
  },
  {
    id: '02',
    title: '3D Web Development',
    src: '/projects/web_dev.png',
    alt: '3D Web Development',
    lines: [
      'We engineer high-performance 3D websites using Three.js, WebGL & React Three Fiber.',
      'Fully customized, fast delivery, immersive digital frontiers built for your brand.',
      'From landing pages to full-scale web apps, we deliver experiences that convert.',
    ],
  },
  {
    id: '03',
    title: 'Windows Optimization',
    src: '/optimization.webp',
    alt: 'Windows Optimization',
    lines: [
      'We tune your Windows OS for maximum FPS, lower latency, debloated registry, and',
      'optimized CPU background processes. All done remotely, live on call with you.',
      'Advanced tweaks including driver tuning, network optimization & power plan setup.',
    ],
  },
  {
    id: '04',
    title: 'Custom Script Making',
    src: '/projects/script_making.png',
    alt: 'Custom Script Making',
    lines: [
      'We write custom scripts in Python, C++, C#, and more — tools, automation, and',
      'utilities tailored to your exact workflow.',
      'From quick helpers to production-grade systems, every script is built clean, fast, and ready to ship.',
    ],
  },
];

function Clients() {
  const isMobile = useIsMobile();
  const rootRef = useRef();

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.sectionTitleContainer}>
        <h1 className={clsx(styles.sectionTitle, 'h1')}>
          <AppearByWords>What We Do</AppearByWords>
        </h1>
      </div>

      <div className={styles.servicesGrid}>
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;

          if (isMobile) {
            return (
              <div key={service.id} className={styles.serviceRowMobile}>
                <div className={styles.mobileHeader}>
                  <span className={styles.serviceNumber}>{service.id}</span>
                  <h4 className={clsx('h4', 'bold', styles.serviceTitle)}>{service.title}</h4>
                </div>
                <div className={styles.imageCardContainer}>
                  <RevealImageCard src={service.src} alt={service.alt} />
                </div>
                <div className={styles.descriptionContainer}>
                  {service.lines.map((line) => (
                    <p key={line} className="p-l">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={service.id} className={clsx(styles.serviceRowDesktop, isEven ? styles.leftAlign : styles.rightAlign)}>
              {isEven ? (
                <>
                  <div className={styles.imageCol}>
                    <RevealImageCard src={service.src} alt={service.alt} />
                  </div>
                  <div className={styles.textCol}>
                    <AppearTitle>
                      <span className={styles.serviceNumber}>{service.id}</span>
                    </AppearTitle>
                    <AppearTitle>
                      <h4 className={clsx('h4', 'bold', styles.serviceTitle)}>{service.title}</h4>
                    </AppearTitle>
                    <AppearTitle>
                      <div className={styles.linesWrapper}>
                        {service.lines.map((line) => (
                          <div key={line} className="p-l">
                            {line}
                          </div>
                        ))}
                      </div>
                    </AppearTitle>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.textCol}>
                    <AppearTitle>
                      <span className={styles.serviceNumber}>{service.id}</span>
                    </AppearTitle>
                    <AppearTitle>
                      <h4 className={clsx('h4', 'bold', styles.serviceTitle)}>{service.title}</h4>
                    </AppearTitle>
                    <AppearTitle>
                      <div className={styles.linesWrapper}>
                        {service.lines.map((line) => (
                          <div key={line} className="p-l">
                            {line}
                          </div>
                        ))}
                      </div>
                    </AppearTitle>
                  </div>
                  <div className={styles.imageCol}>
                    <RevealImageCard src={service.src} alt={service.alt} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Clients;
