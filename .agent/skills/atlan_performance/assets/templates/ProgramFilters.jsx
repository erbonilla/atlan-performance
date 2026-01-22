/**
 * ProgramFilters Component
 * Atlan Performance - "Liquid Precision" Design System
 * 
 * Horizontal scrollable filter bar for program listing.
 * Uses aria-pressed for toggle button state.
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ProgramFilters.module.css';

const FILTER_OPTIONS = ['all', 'swimming', 'running', 'triathlon', 'juniors'];

const ProgramFilters = ({ activeFilter, onFilterChange }) => {
  const { t } = useTranslation();
  
  return (
    <nav 
      className={styles.filterBar} 
      role="navigation" 
      aria-label={t('programs.filterNavigation')}
    >
      <ul className={styles.filterList} role="list">
        {FILTER_OPTIONS.map((key) => (
          <li key={key} role="listitem">
            <button
              className={`${styles.filterChip} ${activeFilter === key ? styles.active : ''}`}
              onClick={() => onFilterChange(key)}
              aria-pressed={activeFilter === key}
            >
              {t(`filters.${key}`)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProgramFilters;
