import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Senior Technical Program Manager"
      description="AI, Ads, Infrastructure, and Experimentation portfolio">
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Senior Technical Program Manager</p>
          <h1>Building AI-powered execution systems for complex technical programs.</h1>
          <p className={styles.subtitle}>
            AI • Ads • Infrastructure • Experimentation • Privacy-safe measurement • Executive operations
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/ai-projects/executive-readout">
              View AI Projects
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/resume">
              View Resume
            </Link>
          </div>
        </section>

        <section className={styles.grid}>
          <Card title="AI Projects" text="Executive readout automation, AI-assisted SDLC, anomaly detection, and workflow agents." />
          <Card title="TPM Playbooks" text="Launch readiness, executive reviews, risk management, dependency tracking, and escalation frameworks." />
          <Card title="Experimentation" text="GeoX, conversion lift, causal impact, ATT-safe measurement, and dashboard-driven decisions." />
          <Card title="Ads & Infrastructure" text="Ad quality, brand safety, DSP/SSP integrations, platform reliability, latency, and QPS health." />
        </section>
      </main>
    </Layout>
  );
}

function Card({title, text}: {title: string; text: string}) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
