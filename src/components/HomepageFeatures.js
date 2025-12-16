import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

// Icons for each chapter
const ChapterIcon = ({ chapterNumber }) => {
  const icons = {
    1: (
      <svg className={styles.chapterIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    2: (
      <svg className={styles.chapterIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 9L12 11.5L14.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 11.5V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    3: (
      <svg className={styles.chapterIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    4: (
      <svg className={styles.chapterIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    5: (
      <svg className={styles.chapterIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    6: (
      <svg className={styles.chapterIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 17L4 21L12 23L20 21L15.5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return icons[chapterNumber] || icons[1];
};

const ChapterList = [
  {
    title: 'Chapter 1: Introduction to Physical AI',
    description: 'Understanding the fundamentals of Physical AI, its scope, and applications.',
    to: '/docs/chapter-1-introduction-to-physical-ai',
    color: 'blue'
  },
  {
    title: 'Chapter 2: Foundations of Robotics',
    description: 'Core components, structural types, and control systems in robotics.',
    to: '/docs/chapter-2-foundations-of-robotics',
    color: 'indigo'
  },
  {
    title: 'Chapter 3: Human-Inspired Design Principles',
    description: 'Biomimicry, anthropomorphic structure, and balance fundamentals.',
    to: '/docs/chapter-3-human-inspired-design-principles',
    color: 'purple'
  },
  {
    title: 'Chapter 4: Perception Systems in Humanoids',
    description: 'Sensor types, fusion concepts, and environmental awareness.',
    to: '/docs/chapter-4-perception-systems-in-humanoids',
    color: 'teal'
  },
  {
    title: 'Chapter 5: AI, Deep Learning & Control Systems',
    description: 'Decision pipeline, machine learning concepts, and control integration.',
    to: '/docs/chapter-5-ai-deep-learning-control-systems',
    color: 'amber'
  },
  {
    title: 'Chapter 6: Humanoid Locomotion and Manipulation',
    description: 'Walking cycles, center of mass concepts, and stability strategies.',
    to: '/docs/chapter-6-humanoid-locomotion-manipulation',
    color: 'emerald'
  },
];

function ChapterCard({title, description, to, color}) {
  // Extract chapter number from title to create a visual identifier
  const chapterNumber = title.match(/Chapter (\d+)/)?.[1] || '';
  const iconColorClasses = {
    blue: 'text-blue-500',
    indigo: 'text-indigo-500',
    purple: 'text-purple-500',
    teal: 'text-teal-500',
    amber: 'text-amber-500',
    emerald: 'text-emerald-500'
  };

  return (
    <div className={clsx('col', 'col--4')}>
      <div className="padding-horiz--md">
        <div className={styles.chapterCard}>
          <div className={clsx(styles.chapterHeader, styles[color])}>
            <div className={styles.chapterIconWrapper}>
              <ChapterIcon chapterNumber={parseInt(chapterNumber)} />
            </div>
            <div className={styles.chapterNumber}>Chapter {chapterNumber}</div>
            <h3 className={styles.chapterTitle}>{title.replace('Chapter '+chapterNumber+': ', '')}</h3>
          </div>
          <div className={styles.chapterBody}>
            <p className={styles.chapterDescription}>{description}</p>
          </div>
          <div className={styles.chapterFooter}>
            <Link className={clsx('button', 'button--primary', 'button--lg', styles.cardButton)} to={to}>
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
            <h2 className={styles.sectionTitle}>Textbook Chapters</h2>
            <p className={styles.sectionSubtitle}>
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