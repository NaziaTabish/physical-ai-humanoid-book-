import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const ChapterList = [
  {
    title: 'Chapter 1: Introduction to Physical AI',
    description: 'Understanding the fundamentals of Physical AI, its scope, and applications.',
    to: '/docs/chapter-1-introduction-to-physical-ai'
  },
  {
    title: 'Chapter 2: Foundations of Robotics',
    description: 'Core components, structural types, and control systems in robotics.',
    to: '/docs/chapter-2-foundations-of-robotics'
  },
  {
    title: 'Chapter 3: Human-Inspired Design Principles',
    description: 'Biomimicry, anthropomorphic structure, and balance fundamentals.',
    to: '/docs/chapter-3-human-inspired-design-principles'
  },
  {
    title: 'Chapter 4: Perception Systems in Humanoids',
    description: 'Sensor types, fusion concepts, and environmental awareness.',
    to: '/docs/chapter-4-perception-systems-in-humanoids'
  },
  {
    title: 'Chapter 5: AI, Deep Learning & Control Systems',
    description: 'Decision pipeline, machine learning concepts, and control integration.',
    to: '/docs/chapter-5-ai-deep-learning-control-systems'
  },
  {
    title: 'Chapter 6: Humanoid Locomotion and Manipulation',
    description: 'Walking cycles, center of mass concepts, and stability strategies.',
    to: '/docs/chapter-6-humanoid-locomotion-manipulation'
  },
];

function ChapterCard({title, description, to}) {
  // Extract chapter number from title to create a visual identifier
  const chapterNumber = title.match(/Chapter (\d+)/)?.[1] || '';

  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <div className={styles.chapterCard}>
          <div className={styles.chapterHeader}>
            <div className={styles.chapterNumber}>Chapter {chapterNumber}</div>
            <h3 className={styles.chapterTitle}>{title.replace('Chapter '+chapterNumber+': ', '')}</h3>
          </div>
          <div className={styles.chapterBody}>
            <p className={styles.chapterDescription}>{description}</p>
          </div>
          <div className={styles.chapterFooter}>
            <Link className="button button--primary button--lg" to={to}>
              Read Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 style={{textAlign: 'center', marginBottom: '2rem', color: '#2c3e50'}}>Textbook Chapters</h2>
            <p style={{textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#555'}}>
              Explore the complete textbook through our structured chapters covering Physical AI and Humanoid Robotics
            </p>
          </div>
        </div>
        <div className="row">
          {ChapterList.map((props, idx) => (
            <ChapterCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}