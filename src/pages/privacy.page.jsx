/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, MessageSquare, Mail } from 'lucide-react';
import CustomHead from '@src/components/dom/CustomHead';
import { useStore } from '@src/store';
import styles from '@src/pages/legal.module.scss';

const seo = {
  title: 'Privacy Policy | Digital Engineering Agency',
  description: 'Privacy Policy, data security guidelines, credential handling, and confidentiality protections for our agency clients.',
  keywords: ['Privacy Policy', 'Data Protection', 'Client Confidentiality', 'Discord Bot Security', 'Token Safety'],
};

function PrivacyPage() {
  const setIsContactOpen = useStore((state) => state.setIsContactOpen);

  return (
    <>
      <CustomHead {...seo} />
      <div className={styles.root}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <header className={styles.header}>
            <div className={styles.badge}>
              <ShieldCheck size={16} />
              <span>PRIVACY & DATA PROTECTION</span>
            </div>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last Revised: August 2026</p>
          </header>

          <div className={styles.introBox}>
            <strong>Your Privacy is Our Highest Priority.</strong> We are dedicated to maintaining strict confidentiality, protecting client credentials, and ensuring total privacy. This Privacy
            Policy details how our team collects, handles, safeguards, and discards information provided by clients and visitors.
          </div>

          <div className={styles.sectionsList}>
            {/* Section 1 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>01.</span> Information We Collect
              </h2>
              <p className={styles.paragraph}>We collect only the minimal data strictly necessary to communicate, engineer software, and deliver your commissioned project:</p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>Communication Details:</strong> Discord usernames, user IDs, email addresses, and communication logs provided during project consultations.
                </li>
                <li>
                  <strong>Project Specifications:</strong> Technical briefs, feature lists, target platforms, design preferences, and performance criteria.
                </li>
                <li>
                  <strong>Technical Information (When Applicable):</strong> Hardware specifications (GPU, CPU, RAM) and operating system version strictly when required for custom Windows latency
                  tuning or specialized automation builds.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>02.</span> How We Use Your Information
              </h2>
              <p className={styles.paragraph}>All information collected is used exclusively for:</p>
              <ul className={styles.bulletList}>
                <li>Executing your commissioned Discord bot development, 3D web application, or custom scripts.</li>
                <li>Providing technical support, deployment guidance, and milestone updates.</li>
                <li>Sending deliverable files, invoices, and post-delivery maintenance instructions.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>03.</span> Client Credentials, API Keys &amp; Token Security
              </h2>
              <div className={styles.highlightCard}>
                <strong>Strict Zero-Retention Policy for Sensitive Credentials:</strong>
                <p>During Discord server configuration, bot deployment, or remote system tuning, you may temporarily share bot tokens, webhook URLs, or remote access pins.</p>
                <p style={{ marginTop: '0.4rem' }}>
                  We treat these with rigorous operational security. Upon project handover, all temporary tokens and remote sessions are immediately destroyed from our workspace. We strongly encourage
                  clients to cycle their Discord bot tokens and API keys after handover for complete autonomous control.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>04.</span> Zero Data Selling or Third-Party Distribution
              </h2>
              <p className={styles.paragraph}>
                <strong>We do not sell, rent, monetize, or disclose your personal information, server members, or project source code to any third parties under any circumstances.</strong> Your
                proprietary software and data remain 100% confidential to your organization.
              </p>
            </section>

            {/* Section 5 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>05.</span> Cookies &amp; Tracking Technologies
              </h2>
              <p className={styles.paragraph}>
                Our website operates as a high-performance, privacy-centric portfolio. We do not use third-party advertising cookies, ad tracking networks, or intrusive user tracking scripts. Any
                browser storage utilized is strictly for user interface state (such as UI preferences and smooth navigation).
              </p>
            </section>

            {/* Section 6 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>06.</span> Data Retention &amp; Right to Erasure
              </h2>
              <p className={styles.paragraph}>
                You retain full ownership of your data. You may request the permanent deletion of your project correspondence, contact details, and archived files from our records at any time by
                emailing us or contacting us on Discord.
              </p>
            </section>

            {/* Section 7 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>07.</span> Contact &amp; Data Officer
              </h2>
              <p className={styles.paragraph}>For any privacy questions, data requests, or compliance inquiries:</p>
            </section>
          </div>

          <div className={styles.contactBanner}>
            <h4>Privacy Inquiries</h4>
            <p>Contact our team directly for immediate assistance regarding your privacy and data protections:</p>
            <div className={styles.contactLinks}>
              <button type="button" className={styles.contactBtn} onClick={() => setIsContactOpen(true)}>
                <MessageSquare size={16} />
                <span>Message on Discord</span>
              </button>
              <a href="mailto:primevault34@gmail.com" className={styles.contactBtn}>
                <Mail size={16} />
                <span>primevault34@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPage;
