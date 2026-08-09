/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';
import { ArrowLeft, FileText, MessageSquare, Mail } from 'lucide-react';
import CustomHead from '@src/components/dom/CustomHead';
import { useStore } from '@src/store';
import styles from '@src/pages/legal.module.scss';

const seo = {
  title: 'Terms of Service | Digital Engineering Agency',
  description: 'Terms of Service, scope of work, liability disclaimers, and intellectual property rights for our agency.',
  keywords: ['Terms of Service', 'Agency Agreement', 'Discord Bot Development', 'Windows Optimization Terms', 'Custom Scripting'],
};

function TermsPage() {
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
              <FileText size={16} />
              <span>LEGAL & CLIENT AGREEMENT</span>
            </div>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.lastUpdated}>Last Revised: August 2026</p>
          </header>

          <div className={styles.introBox}>
            <strong>Welcome to our Agency.</strong> These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client&quot;, &quot;you&quot;, or
            &quot;user&quot;) and our digital engineering team (&quot;Agency&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By commissioning, purchasing, accessing, or utilizing any of
            our software development, 3D web engineering, Discord infrastructure, Windows tuning, or custom scripting services, you unconditionally agree to be bound by these Terms.
          </div>

          <div className={styles.sectionsList}>
            {/* Section 1 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>01.</span> Scope of Services
              </h2>
              <p className={styles.paragraph}>We provide bespoke digital engineering and software services across four primary pillars:</p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>Discord Infrastructure & Bot Engineering:</strong> Custom Discord bot development, automated role assignment, moderation pipelines, verification flows, anti-raid mechanisms,
                  economy systems, API integrations, and complete server architectures.
                </li>
                <li>
                  <strong>3D Web Development:</strong> Custom WebGL, Three.js, React Three Fiber, interactive websites, shaders, performance-optimized animations, and full-stack web applications.
                </li>
                <li>
                  <strong>Windows OS Tuning & Optimization:</strong> Remote latency reduction, registry debloating, driver configuration, background process streamlining, telemetry disabling, and
                  power-plan optimization.
                </li>
                <li>
                  <strong>Custom Script Engineering:</strong> Bespoke utilities, automation scripts, scrapers, CLI tools, and background services developed in Python, C++, C#, Bash, and PowerShell.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>02.</span> Windows Optimization &amp; System Tuning Disclaimer &amp; Liability Waiver
              </h2>
              <p className={styles.paragraph}>
                <strong>CRITICAL NOTICE REGARDING SYSTEM TUNING:</strong> Windows optimization involves advanced modifications to operating system parameters, registry keys, active background
                services, driver configurations, scheduled tasks, and hardware power states.
              </p>
              <div className={styles.highlightCard}>
                <strong>Client Responsibility &amp; Data Backup:</strong>
                <p>
                  The Client is solely and exclusively responsible for performing complete, verifiable backups of all personal files, operating system restore points, and critical applications prior
                  to the commencement of any remote optimization session.
                </p>
              </div>
              <ul className={styles.bulletList}>
                <li>
                  <strong>&quot;As-Is&quot; Basis:</strong> All Windows optimization and tuning procedures are provided on an &quot;AS-IS&quot; and &quot;AS-AVAILABLE&quot; basis without warranties of
                  any kind, whether express or implied.
                </li>
                <li>
                  <strong>Third-Party Software &amp; Game Anti-Cheat:</strong> We are not liable for changes or restrictions enforced by third-party anti-cheat software (e.g., Vanguard, Easy
                  Anti-Cheat, BattlEye, Ricochet), third-party game updates, or Windows cumulative update rollouts that alter system behavior post-optimization.
                </li>
                <li>
                  <strong>Hardware Integrity:</strong> The Client confirms their hardware is in sound operational health. We bear no liability for pre-existing thermal throttling, unstable hardware
                  overclocks, faulty storage drives, or component degradation.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>03.</span> Third-Party Platforms &amp; Compliance
              </h2>
              <p className={styles.paragraph}>When creating Discord bots, web apps, or automation tools, all solutions are designed to comply with standard technical guidelines. However:</p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>Platform Terms of Service:</strong> The Client is solely responsible for ensuring that their deployment, server activities, and bot usage comply with Discord&apos;s Developer
                  Policy, Community Guidelines, and Terms of Service, as well as the terms of any third-party APIs used.
                </li>
                <li>
                  <strong>API Rate Limits &amp; Outages:</strong> We are not responsible for downtimes, API rate limit restrictions, token revocations, or policy changes enacted by external platforms
                  (Discord, hosting providers, payment gateways, cloud providers).
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>04.</span> Payment Terms, Milestones &amp; Non-Refundability
              </h2>
              <p className={styles.paragraph}>Our pricing structure is project-based or milestone-based as explicitly quoted and agreed upon prior to project kickoff.</p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>Non-Refundable Deposits &amp; Custom Work:</strong> Due to the dedicated labor, custom engineering, and irrevocable time invested in each project, deposits and payments for
                  completed milestones or live tuning sessions are strictly non-refundable once work has commenced.
                </li>
                <li>
                  <strong>Scope Adjustments:</strong> Any features, revisions, or architectural alterations requested outside the initial project scope document will be quoted as separate milestone
                  deliverables.
                </li>
                <li>
                  <strong>Delivery &amp; Acceptance:</strong> Upon deliverable handover, the Client has a standard review period of seven (7) business days to report any reproducible bugs that deviate
                  from agreed specifications. Reproducible bugs reported within this window will be rectified at no extra cost.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>05.</span> Intellectual Property &amp; Ownership
              </h2>
              <p className={styles.paragraph}>Upon full settlement of all outstanding invoices and payments:</p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>Client Deliverables:</strong> Full intellectual property rights and code ownership of bespoke deliverables created specifically for the Client are transferred to the Client.
                </li>
                <li>
                  <strong>Agency Pre-Existing Tools:</strong> The Agency retains all proprietary rights, title, and interest in pre-existing core frameworks, optimization algorithms, modular
                  templates, and standard utility libraries utilized across multiple client deployments. The Client is granted a perpetual, royalty-free license to use such integrated components
                  within their deliverable.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>06.</span> Limitation of Liability &amp; Indemnification
              </h2>
              <div className={styles.highlightCard}>
                <strong>Maximum Liability Cap:</strong>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT SHALL OUR AGENCY, ITS DEVELOPERS, CONTRACTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL,
                  SPECIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA LOSS, HARDWARE INTERRUPTION, OR REPUTATIONAL HARM.
                </p>
                <p>
                  OUR TOTAL AGGREGATE LIABILITY ARISING FROM OR RELATED TO ANY SERVICE PERFORMED SHALL BE STRICTLY CAPPED AT AND NOT EXCEED THE TOTAL FEES ACTUALLY PAID BY THE CLIENT TO US FOR THE
                  SPECIFIC SERVICE IN DISPUTE.
                </p>
              </div>
              <p className={styles.paragraph} style={{ marginTop: '0.8rem' }}>
                <strong>Client Indemnification:</strong> The Client agrees to defend, indemnify, and hold harmless our Agency and team members from and against any third-party claims, liabilities,
                losses, or legal costs arising out of the Client&apos;s illegal use, unauthorized modifications, or misuse of delivered software or services.
              </p>
            </section>

            {/* Section 7 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>07.</span> Confidentiality &amp; Security
              </h2>
              <p className={styles.paragraph}>
                We treat all client data, project briefs, access keys, and business details with the highest degree of confidentiality. We will never disclose, resell, or distribute client trade
                secrets or proprietary assets to third parties.
              </p>
            </section>

            {/* Section 8 */}
            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>08.</span> Modifications to Terms
              </h2>
              <p className={styles.paragraph}>
                We reserve the right to revise these Terms periodically. Continued engagement with our services after updates are published constitutes your acceptance of the amended Terms.
              </p>
            </section>
          </div>

          <div className={styles.contactBanner}>
            <h4>Questions Regarding Our Terms?</h4>
            <p>If you have any questions, clarifications, or custom contract inquiries, reach out directly to our team:</p>
            <div className={styles.contactLinks}>
              <button type="button" className={styles.contactBtn} onClick={() => setIsContactOpen(true)}>
                <MessageSquare size={16} />
                <span>Contact on Discord</span>
              </button>
              <a href="mailto:hashimadil001@gmail.com" className={styles.contactBtn}>
                <Mail size={16} />
                <span>hashimadil001@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsPage;
