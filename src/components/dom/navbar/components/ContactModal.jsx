/* eslint-disable no-bitwise */
import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import gsap from 'gsap';
import { X, Copy, Check, Mail } from 'lucide-react';
import styles from '@src/components/dom/navbar/styles/contactModal.module.scss';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';
import DISCORD_PROFILES from '@src/constants/discord';

function avatarUrl(profile) {
  if (profile.avatarUrl) {
    return profile.avatarUrl;
  }
  if (profile.avatar && profile.id) {
    return `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png?size=128`;
  }
  if (profile.id && /^\d+$/.test(String(profile.id))) {
    const id = String(profile.id);
    const high = parseInt(id.slice(0, -10) || '0', 10);
    const idx = high % 6;
    return `https://cdn.discordapp.com/embed/avatars/${idx}.png`;
  }
  return null;
}

function ContactModal() {
  const [isContactOpen, setIsContactOpen, lenis] = useStore(useShallow((state) => [state.isContactOpen, state.setIsContactOpen, state.lenis]));
  const [profiles, setProfiles] = useState(DISCORD_PROFILES);
  const [copied, setCopied] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/discord-profiles');
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled && Array.isArray(data?.profiles) && data.profiles.length) {
          const byName = Object.fromEntries(data.profiles.map((p) => [p.username?.toLowerCase(), p]));
          setProfiles(
            DISCORD_PROFILES.map((base) => ({
              ...base,
              ...(byName[base.username.toLowerCase()] || {}),
              username: base.username,
            })),
          );
        }
      } catch {
        // keep static usernames
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const close = useCallback(() => {
    setIsContactOpen(false);
  }, [setIsContactOpen]);

  useEffect(() => {
    const el = document.getElementById('contactModal');
    if (!el) return undefined;
    if (isContactOpen) {
      gsap.to(el, {
        autoAlpha: 1,
        pointerEvents: 'auto',
        duration: 0.35,
        ease: 'power2.out',
      });
      lenis?.stop();
    } else {
      gsap.to(el, {
        autoAlpha: 0,
        pointerEvents: 'none',
        duration: 0.25,
        ease: 'power2.in',
      });
      lenis?.start();
    }
    return undefined;
  }, [isContactOpen, lenis]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isContactOpen) {
        close();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isContactOpen, close]);

  const copyUsername = useCallback(async (username) => {
    try {
      await navigator.clipboard.writeText(username);
      setCopied(username);
      setTimeout(() => setCopied(''), 2000);
    } catch {
      setCopied('');
    }
  }, []);

  const copyEmail = useCallback(async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('hashimadil001@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(false);
    }
  }, []);

  return (
    <div id="contactModal" className={styles.root} role="dialog" aria-modal="true" aria-labelledby="contact-title" aria-hidden={!isContactOpen}>
      <button type="button" className={styles.backdrop} aria-label="Close contact modal" onClick={close} />
      <div className={styles.panel}>
        <button type="button" className={styles.close} onClick={close} aria-label="Close contact dialog">
          <X size={18} strokeWidth={2.4} />
        </button>

        <div className={styles.header}>
          <div className={styles.statusIndicator}>
            <span className={styles.statusDot} />
            <span className={styles.eyebrow}>GET IN TOUCH · INSTANT RESPONSE</span>
          </div>
          <h3 id="contact-title" className={styles.title}>
            Reach us on Discord
          </h3>
          <p className={styles.sub}>Add any of our core team members for custom projects, pricing, or consultations. Click any card to copy.</p>
        </div>

        <div className={styles.cards}>
          {profiles.map((profile) => {
            const src = avatarUrl(profile);
            const isCardCopied = copied === profile.username;
            return (
              <button
                key={profile.username}
                type="button"
                className={clsx(styles.card, isCardCopied && styles.cardActive)}
                onClick={() => copyUsername(profile.username)}
                title={`Copy @${profile.username}`}
              >
                <div className={styles.avatar}>
                  {src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt={profile.username} width={64} height={64} />
                  ) : (
                    <span className={styles.avatarFallback}>{profile.username.slice(0, 2).toUpperCase()}</span>
                  )}
                </div>
                <div className={styles.meta}>
                  <div className={styles.nameRow}>
                    <span className={styles.displayName}>{profile.global_name || profile.username}</span>
                  </div>
                  <span className={styles.username}>@{profile.username}</span>
                </div>
                <div className={clsx(styles.copyAction, isCardCopied && styles.copied)}>
                  {isCardCopied ? (
                    <>
                      <Check size={14} strokeWidth={2.5} />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} strokeWidth={2} />
                      <span>COPY</span>
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className={styles.footerRow}>
          <a className={styles.emailFallback} href="mailto:hashimadil001@gmail.com">
            <Mail size={15} />
            <span>hashimadil001@gmail.com</span>
          </a>
          <button type="button" className={styles.copyEmailBtn} onClick={copyEmail}>
            {emailCopied ? 'COPIED' : 'COPY'}
          </button>
        </div>

        <div className={styles.legalRow}>
          <a href="/privacy" onClick={close} className={styles.modalLegalLink}>
            Privacy Policy
          </a>
          <span className={styles.legalDot}>•</span>
          <a href="/terms" onClick={close} className={styles.modalLegalLink}>
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
