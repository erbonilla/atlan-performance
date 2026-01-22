/**
 * ProgramCard Component
 * Atlan Performance - "Liquid Precision" Design System
 * 
 * CRITICAL: Tags must use Foam color for text, NOT Tide Teal
 * REQUIRED: Dual CTA (Primary: Book Trial, Secondary: More Info)
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import QuickFacts from '../QuickFacts';
import styles from './ProgramCard.module.css';

const ProgramCard = ({ program }) => {
  const { t } = useTranslation();
  const { 
    slug, 
    title, 
    tags, 
    quickFacts, 
    shortDescription, 
    coverImage 
  } = program;

  const handleBookTrial = () => {
    // Option 1: Navigate to contact with program context
    // navigate(`/contact?program=${slug}`);
    
    // Option 2: Open booking modal
    // openBookingModal(slug);
    
    console.log('Book trial for:', slug);
  };

  return (
    <article className={`${styles.card} glass`}>
      {/* Cover Image - Decorative, empty alt */}
      <img 
        src={coverImage} 
        alt="" 
        className={styles.cardImage}
        loading="lazy"
      />
      
      <div className={styles.cardContent}>
        {/* Title */}
        <h3 className={styles.cardTitle}>{title}</h3>
        
        {/* Tags - CRITICAL: Text color MUST be Foam */}
        <div className={styles.tags} role="list" aria-label={t('programs.tags')}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag} role="listitem">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Quick Facts Row */}
        <QuickFacts 
          duration={quickFacts.duration}
          level={quickFacts.level}
          format={quickFacts.format}
        />
        
        {/* Description */}
        <p className={styles.cardDescription}>{shortDescription}</p>
        
        {/* DUAL CTA - Required Pattern */}
        <div className={styles.cardActions}>
          {/* Primary CTA: Conversion */}
          <button 
            className="btn btn-primary"
            onClick={handleBookTrial}
            aria-label={t('programs.bookTrialFor', { program: title })}
          >
            {t('cta.bookTrial')}
          </button>
          
          {/* Secondary CTA: Information */}
          <Link 
            to={`/programs/${slug}`} 
            className="btn btn-ghost"
            aria-label={t('programs.learnMoreAbout', { program: title })}
          >
            {t('cta.moreInfo')}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProgramCard;
