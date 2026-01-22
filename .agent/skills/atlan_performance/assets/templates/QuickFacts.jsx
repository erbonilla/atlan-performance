/**
 * QuickFacts Component
 * Atlan Performance - "Liquid Precision" Design System
 * 
 * Displays at-a-glance information for program cards:
 * - Duration (Timer icon)
 * - Level (Barbell icon)
 * - Format (Users icon)
 */

import React from 'react';
import { Timer, Barbell, Users } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import styles from './QuickFacts.module.css';

const QuickFacts = ({ duration, level, format }) => {
  const { t } = useTranslation();
  
  return (
    <div 
      className={styles.quickFacts} 
      role="list" 
      aria-label={t('programs.quickFacts')}
    >
      {/* Duration */}
      <span className={styles.fact} role="listitem">
        <Timer 
          size={16} 
          weight="regular" 
          aria-hidden="true" 
        />
        <span>{duration}</span>
      </span>
      
      {/* Level */}
      <span className={styles.fact} role="listitem">
        <Barbell 
          size={16} 
          weight="regular" 
          aria-hidden="true" 
        />
        <span>{t(`levels.${level}`)}</span>
      </span>
      
      {/* Format */}
      <span className={styles.fact} role="listitem">
        <Users 
          size={16} 
          weight="regular" 
          aria-hidden="true" 
        />
        <span>{t(`formats.${format}`)}</span>
      </span>
    </div>
  );
};

export default QuickFacts;
