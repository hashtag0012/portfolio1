import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import clsx from 'clsx';
import { Mail, MessageSquare, Copy, Check, Shield, FileText, ArrowUpRight } from 'lucide-react';
import styles from '@src/components/dom/styles/footer.module.scss';
import GoTop from '@src/components/dom/GoTop';
import { useStore } from '@src/store';
import DISCORD_PROFILES from '@src/constants/discord';

const Time = dynamic(() => import('@src/components/dom/Time'), { ssr: false });

function Footer() {
  const [copied, setCopied] = useState(false);
  const [copiedUser, setCopiedUser] = useState('');
  const setIsContactOpen = useStore((state) => state.setIsContactOpen);
  const email = 'hashimadil001@gmail.com';

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyDiscord = (username) => {
    navigator.clipboard.writeText(username);
    setCopiedUser(username);
    setTimeout(() => setCopiedUser(''), 2000);
  };

  return (
    <footer className={styles.root} role="contentinfo">
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className={styles.waveSvg}>
          <path
            fill="#0E1026"
            d="
              M0 80
              C160 40 260 200 520 175
              C850 145 1110 20 1440 0
              L1440 220
              L0 220
              Z
            "
          />
        </svg>
      </div>

      <div className={styles.footerContent}>
        <div className={styles.topBanner}>
          <div className={styles.statusBadge}>
            <span className={styles.pulseDot} />
            <span>AVAILABLE FOR NEW COMMISSIONS & CLIENTS</span>
          </div>

          <h2 className={styles.ctaTitle}>
            Have a vision for your project? <br />
            <span className={styles.highlightText}>Let&apos;s build something extraordinary.</span>
          </h2>

          <div className={styles.actionHub}>
            <div className={styles.emailCard}>
              <div className={styles.emailLeft}>
                <div className={styles.emailIconBox}>
                  <Mail size={18} />
                </div>
                <a href={`mailto:${email}`} className={styles.emailLink}>
                  {email}
                </a>
              </div>
              <button type="button" onClick={handleCopyEmail} className={styles.copyEmailBtn} aria-label="Copy email address">
                {copied ? (
                  <>
                    <Check size={14} strokeWidth={2.5} />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

            <button type="button" onClick={() => setIsContactOpen(true)} className={styles.discordCtaBtn}>
              <MessageSquare size={16} />
              <span>CONNECT ON DISCORD</span>
            </button>
          </div>

          <div className={styles.discordSection}>
            <span className={styles.discordLabel}>TEAM HANDLES:</span>
            <div className={styles.discordRow}>
              {DISCORD_PROFILES.map((profile) => {
                const isCopied = copiedUser === profile.username;
                return (
                  <button
                    key={profile.username}
                    type="button"
                    className={clsx(styles.discordChip, isCopied && styles.discordChipCopied)}
                    onClick={() => copyDiscord(profile.username)}
                    title={`Click to copy @${profile.username}`}
                  >
                    <span className={styles.chipUsername}>@{profile.username}</span>
                    <span className={styles.chipStatus}>{isCopied ? 'COPIED' : 'COPY'}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.thankYouContainer}>
          <h1 className={styles.thankYouText}>THANK YOU</h1>
        </div>

        <div className={styles.gridSection}>
          {/* Column 1: Services */}
          <div className={styles.gridCol}>
            <h5 className={styles.colHeader}>WHAT WE DO</h5>
            <ul className={styles.linkList}>
              <li>
                <Link href="/projects" className={styles.serviceLink}>
                  <span>Discord Bots &amp; Server Setup</span>
                  <ArrowUpRight size={13} className={styles.arrowIcon} />
                </Link>
              </li>
              <li>
                <Link href="/projects" className={styles.serviceLink}>
                  <span>3D Web Development</span>
                  <ArrowUpRight size={13} className={styles.arrowIcon} />
                </Link>
              </li>
              <li>
                <Link href="/projects" className={styles.serviceLink}>
                  <span>Windows OS Optimization</span>
                  <ArrowUpRight size={13} className={styles.arrowIcon} />
                </Link>
              </li>
              <li>
                <Link href="/projects" className={styles.serviceLink}>
                  <span>Custom Automation &amp; Scripts</span>
                  <ArrowUpRight size={13} className={styles.arrowIcon} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Sitemap & Legal */}
          <div className={styles.gridCol}>
            <h5 className={styles.colHeader}>NAVIGATION &amp; LEGAL</h5>
            <ul className={styles.linkList}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.legalLink}>
                  <Shield size={13} />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.legalLink}>
                  <FileText size={13} />
                  <span>Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Time */}
          <div className={styles.gridCol}>
            <h5 className={styles.colHeader}>GLOBAL OPERATIONS</h5>
            <p className={styles.infoText}>Worldwide Remote Engineering</p>
            <p className={styles.infoSubText}>Live Support on Discord &amp; Email</p>
            <div className={styles.timeCard}>
              <span className={styles.timeLabel}>LIVE CLOCK</span>
              <span className={styles.timeValue}>
                <Time />
              </span>
            </div>
          </div>

          {/* Column 4: Go Top */}
          <div className={clsx(styles.gridCol, styles.topCol)}>
            <h5 className={styles.colHeader}>BACK TO TOP</h5>
            <div className={styles.goTopWrapper}>
              <GoTop />
            </div>
            <span className={styles.returnTopHint}>Scroll to Top</span>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <span className={styles.copyText}>© 2026 PORTFOLIO · HIGH PERFORMANCE DIGITAL ENGINEERING</span>
            <span className={styles.copySub}>ALL RIGHTS RESERVED</span>
          </div>
          <div className={styles.bottomRight}>
            <Link href="/privacy" className={styles.bottomLegalLink}>
              Privacy
            </Link>
            <span className={styles.dotSeparator}>•</span>
            <Link href="/terms" className={styles.bottomLegalLink}>
              Terms
            </Link>
            <span className={styles.dotSeparator}>•</span>
            <span className={styles.designedBy}>Crafted with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
