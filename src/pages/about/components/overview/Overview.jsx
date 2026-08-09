import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">We build tools that keep</h3>
            <h3 className="h3">
              communities <span className="medium">running</span> and
            </h3>
            <h3 className="h3">
              products <span className="medium">feeling</span> sharp.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">We build tools that keep communities</h3>
            <h3 className="h3">
              <span className="medium">running</span> and products <span className="medium">feeling</span> sharp.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>Our story</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">We&apos;re a two-person digital solutions team — </h6>
            <h6 className="h6">azozxlowkeyy & hexcoder0012 — focused on Discord bots,</h6>
            <h6 className="h6">server setup, 3D websites, Windows optimization, and</h6>
            <h6 className="h6">custom scripts in Python, C++, C#, and more.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Every project is hands-on: we design, build, deploy,</h6>
            <h6 className="h6">and stay available when you need tweaks or support.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Reach us on Discord anytime — that&apos;s where we work.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">We&apos;re a two-person digital solutions team —</h6>
            <h6 className="h6">azozxlowkeyy & hexcoder0012 — focused on</h6>
            <h6 className="h6">Discord bots, server setup, 3D websites,</h6>
            <h6 className="h6">Windows optimization, and custom scripts.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Every project is hands-on: we design, build,</h6>
            <h6 className="h6">deploy, and stay available for support.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Reach us on Discord anytime.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
