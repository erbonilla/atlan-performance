# Atlan Component Patterns

React component patterns following the Atlan "Liquid Precision" design system.

## Buttons

### Primary Button (Coral Spark)
Main CTAs: "Join Trial", "Book Session", "Submit", "Reservar prueba"

```jsx
<button className="btn btn-primary">
  {t('cta.joinTrial')}
</button>
```

```css
.btn-primary {
  min-height: 48px;
  padding: 12px 24px;
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  font-size: var(--size-body);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-white);
  background-color: var(--color-coral-spark);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: var(--transition-hover);
}

.btn-primary:hover {
  background-color: var(--color-coral-dark);
  transform: translateY(-2px);
}

.btn-primary:focus-visible {
  outline: 3px solid var(--color-coral-spark);
  outline-offset: 2px;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
```

### Secondary Button (Tide Teal Outline)
Secondary actions: "Learn More", "View Programs"

```jsx
<button className="btn btn-secondary">
  {t('cta.learnMore')}
</button>
```

```css
.btn-secondary {
  min-height: 48px;
  padding: 12px 24px;
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  color: var(--color-tide-teal);
  background-color: transparent;
  border: 2px solid var(--color-tide-teal);
  border-radius: var(--radius-md);
  transition: var(--transition-hover);
}

.btn-secondary:hover {
  background-color: var(--color-tide-teal);
  color: var(--color-white);
}
```

### Ghost Button
Tertiary actions, navigation, secondary CTA in cards

```jsx
<button className="btn btn-ghost">
  {t('nav.back')}
</button>
```

```css
.btn-ghost {
  min-height: 48px;
  padding: 12px 24px;
  color: var(--color-foam);
  background: transparent;
  border: 1px solid var(--glass-border-teal);
  border-radius: var(--radius-md);
  transition: var(--transition-snap);
}

.btn-ghost:hover {
  background-color: rgba(14, 138, 154, 0.1);
  border-color: var(--color-tide-teal);
}
```

### Button with Icon

```jsx
import { ArrowRight } from '@phosphor-icons/react';

<button className="btn btn-primary btn-icon">
  {t('cta.getStarted')}
  <ArrowRight size={20} weight="bold" aria-hidden="true" />
</button>
```

```css
.btn-icon {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
}
```

---

## Tags / Chips

### ⚠️ CRITICAL: Color Rules for Tags

**NEVER use Tide Teal for tag text.** The contrast ratio (3.8:1) fails WCAG AA for text under 18px.

✅ **Correct:**
```css
.tag {
  color: var(--color-foam);           /* Text: Foam (11.8:1 contrast) */
  border: 1px solid var(--color-tide-teal);  /* Border: Tide Teal OK */
  background: transparent;
}
```

❌ **WRONG:**
```css
.tag {
  color: var(--color-tide-teal);      /* FAILS WCAG AA */
  border: 1px solid var(--color-tide-teal);
}
```

### Tag Component

```jsx
const Tag = ({ children }) => (
  <span className={styles.tag} role="listitem">
    {children}
  </span>
);
```

```css
.tag {
  display: inline-block;
  padding: 4px 12px;
  border: 1px solid var(--color-tide-teal);
  border-radius: 9999px;
  font-family: var(--font-body);
  font-size: var(--size-small);       /* 14px minimum */
  font-weight: 500;
  color: var(--color-foam);           /* MUST be Foam */
  background: transparent;
  white-space: nowrap;
}
```

### Tag List

```jsx
<div className={styles.tagList} role="list" aria-label={t('programs.tags')}>
  {tags.map((tag) => (
    <Tag key={tag}>{tag}</Tag>
  ))}
</div>
```

```css
.tagList {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}
```

---

## Program Cards

### ProgramCard (with Dual CTA)

Standard card for the Programs listing page. **Must include dual CTA.**

```jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import QuickFacts from '../QuickFacts';
import styles from './ProgramCard.module.css';

const ProgramCard = ({ program }) => {
  const { t } = useTranslation();
  const { slug, title, tags, quickFacts, shortDescription, coverImage } = program;

  const handleBookTrial = () => {
    // Navigate to contact with program context
    // Or open booking modal
  };

  return (
    <article className={`${styles.card} glass`}>
      <img 
        src={coverImage} 
        alt="" 
        className={styles.cardImage}
        loading="lazy"
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        
        {/* Tags - Text MUST be Foam color */}
        <div className={styles.tags} role="list">
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
        
        <p className={styles.cardDescription}>{shortDescription}</p>
        
        {/* DUAL CTA - Required Pattern */}
        <div className={styles.cardActions}>
          {/* Primary: Conversion */}
          <button 
            className="btn btn-primary"
            onClick={handleBookTrial}
            aria-label={t('programs.bookTrialFor', { program: title })}
          >
            {t('cta.bookTrial')}
          </button>
          
          {/* Secondary: Information */}
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
```

```css
/* ProgramCard.module.css */
.card {
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  transition: var(--transition-liquid);
}

.card:hover {
  transform: translateY(-4px);
}

@media (min-width: 768px) {
  .card {
    grid-template-columns: 300px 1fr;
  }
}

.cardImage {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
}

.cardContent {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.cardTitle {
  font-family: var(--font-heading);
  font-size: var(--size-h3);
  font-weight: var(--weight-bold);
  color: var(--color-foam);
  text-transform: uppercase;
  margin: 0;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

/* CRITICAL: Tag text MUST be Foam */
.tag {
  padding: 4px 12px;
  border: 1px solid var(--color-tide-teal);
  border-radius: 9999px;
  font-size: var(--size-small);
  font-weight: 500;
  color: var(--color-foam);
  background: transparent;
}

.cardDescription {
  color: var(--color-foam);
  line-height: var(--line-height-normal);
  margin: 0;
}

.cardActions {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-top: auto;
  padding-top: var(--space-md);
}

@media (min-width: 768px) {
  .cardActions {
    flex-direction: row;
  }
}

/* Touch targets */
.cardActions .btn {
  min-height: 48px;
}

@media (max-width: 767px) {
  .cardActions .btn {
    width: 100%;
  }
}
```

---

## QuickFacts Component

Displays quick scannable information on program cards.

```jsx
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
      <span className={styles.fact} role="listitem">
        <Timer size={16} weight="regular" aria-hidden="true" />
        <span>{duration}</span>
      </span>
      <span className={styles.fact} role="listitem">
        <Barbell size={16} weight="regular" aria-hidden="true" />
        <span>{t(`levels.${level}`)}</span>
      </span>
      <span className={styles.fact} role="listitem">
        <Users size={16} weight="regular" aria-hidden="true" />
        <span>{t(`formats.${format}`)}</span>
      </span>
    </div>
  );
};

export default QuickFacts;
```

```css
/* QuickFacts.module.css */
.quickFacts {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  padding: var(--space-sm) 0;
  border-top: 1px solid rgba(14, 138, 154, 0.2);
  margin-top: var(--space-xs);
}

.fact {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-foam);
  font-size: var(--size-small);
  font-family: var(--font-body);
}

/* Icons can use Tide Teal */
.fact svg {
  color: var(--color-tide-teal);
  flex-shrink: 0;
}
```

---

## Program Filters

Horizontal scrollable filter bar for program listing.

```jsx
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
```

```css
/* ProgramFilters.module.css */
.filterBar {
  overflow-x: auto;
  padding: var(--space-sm) 0;
  margin-bottom: var(--space-lg);
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.filterBar::-webkit-scrollbar {
  display: none;
}

.filterList {
  display: flex;
  gap: var(--space-sm);
  list-style: none;
  padding: 0;
  margin: 0;
}

.filterChip {
  padding: var(--space-xs) var(--space-md);
  border-radius: 9999px;
  font-family: var(--font-body);
  font-size: var(--size-small);
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: var(--transition-snap);
  
  /* Inactive state */
  background: rgba(11, 42, 60, 0.5);
  border: 1px solid rgba(14, 138, 154, 0.3);
  color: var(--color-foam);
  min-height: 44px;
}

.filterChip:hover {
  background: rgba(11, 42, 60, 0.7);
  border-color: var(--color-tide-teal);
}

/* Active state */
.filterChip.active {
  background: var(--color-tide-teal);
  border-color: var(--color-tide-teal);
  color: var(--color-foam);
}

.filterChip:focus-visible {
  outline: 3px solid var(--color-coral-spark);
  outline-offset: 2px;
}
```

---

## Quiz Promo Card

Promotional card for the Program Finder Quiz.

```jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Compass } from '@phosphor-icons/react';
import styles from './QuizPromo.module.css';

const QuizPromo = () => {
  const { t } = useTranslation();
  
  return (
    <article className={`${styles.quizPromo} glass`}>
      <Compass size={48} weight="duotone" className={styles.icon} aria-hidden="true" />
      <h3 className={styles.title}>
        {t('quiz.notSureTitle')}
      </h3>
      <p className={styles.subtitle}>
        {t('quiz.subtitle')}
      </p>
      <Link to="/quiz" className="btn btn-primary">
        {t('quiz.startCta')}
      </Link>
    </article>
  );
};

export default QuizPromo;
```

```css
/* QuizPromo.module.css */
.quizPromo {
  padding: var(--space-xl);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.icon {
  color: var(--color-tide-teal);
}

.title {
  font-family: var(--font-heading);
  font-size: var(--size-h3);
  font-weight: var(--weight-bold);
  color: var(--color-foam);
  margin: 0;
}

.subtitle {
  color: var(--color-foam);
  opacity: 0.9;
  margin: 0;
  max-width: 400px;
}
```

---

## General Cards

### Glassmorphism Card

```jsx
<article className="card glass">
  <h3 className="card-title">{t('card.title')}</h3>
  <p className="card-body">{t('card.description')}</p>
  <button className="btn btn-primary">{t('cta.learnMore')}</button>
</article>
```

```css
.card {
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  transition: var(--transition-liquid);
}

.card:hover {
  transform: translateY(-4px);
}

.glass {
  background: rgba(11, 42, 60, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(14, 138, 154, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.card-title {
  font-family: var(--font-heading);
  font-size: var(--size-h3);
  font-weight: var(--weight-bold);
  color: var(--color-foam);
  margin-bottom: var(--space-sm);
}

.card-body {
  font-family: var(--font-body);
  color: var(--color-foam);
  line-height: var(--line-height-normal);
  margin-bottom: var(--space-md);
}
```

### Testimonial Card

```jsx
<blockquote className="testimonial-card glass-subtle">
  <p className="testimonial-quote">"{testimonial.quote}"</p>
  <footer className="testimonial-author">
    <img 
      src={testimonial.photo} 
      alt={t('testimonial.photoAlt', { name: testimonial.name })}
      className="testimonial-avatar"
    />
    <div>
      <cite className="testimonial-name">{testimonial.name}</cite>
      <span className="testimonial-program">{testimonial.program}</span>
    </div>
  </footer>
</blockquote>
```

---

## Forms

### Text Input

```jsx
<div className="form-group">
  <label htmlFor="name" className="form-label">
    {t('form.name')}
    <span className="required" aria-hidden="true">*</span>
  </label>
  <input
    type="text"
    id="name"
    name="name"
    className={`form-input ${errors.name ? 'form-input-error' : ''}`}
    value={formData.name}
    onChange={handleChange}
    onBlur={handleBlur}
    aria-required="true"
    aria-invalid={errors.name ? 'true' : 'false'}
    aria-describedby={errors.name ? 'name-error' : undefined}
  />
  {errors.name && (
    <span id="name-error" className="form-error" role="alert">
      {errors.name}
    </span>
  )}
</div>
```

```css
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.form-label {
  font-family: var(--font-body);
  font-weight: var(--weight-bold);
  font-size: var(--size-small);
  color: var(--color-foam);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

.required {
  color: var(--color-coral-spark);
  margin-left: 4px;
}

.form-input {
  min-height: 48px;
  padding: var(--space-sm);
  font-family: var(--font-body);
  font-size: var(--size-body);
  color: var(--color-foam);
  background-color: rgba(11, 42, 60, 0.5);
  border: 1px solid var(--color-tide-teal);
  border-radius: var(--radius-md);
  transition: var(--transition-snap);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-coral-spark);
  box-shadow: 0 0 0 3px rgba(255, 106, 61, 0.2);
}

.form-input-error {
  border-color: var(--color-coral-spark);
}

.form-error {
  font-size: var(--size-small);
  color: var(--color-coral-spark);
}
```

### Select Dropdown

```jsx
<div className="form-group">
  <label htmlFor="program" className="form-label">
    {t('form.selectProgram')}
  </label>
  <select
    id="program"
    name="program"
    className="form-select"
    value={formData.program}
    onChange={handleChange}
  >
    <option value="">{t('form.selectPlaceholder')}</option>
    <option value="adult-swimming">{t('programs.adultSwimming.name')}</option>
    <option value="juniors">{t('programs.juniors.name')}</option>
    <option value="open-water">{t('programs.openWater.name')}</option>
    <option value="triathlon">{t('programs.triathlon.name')}</option>
    <option value="running">{t('programs.running.name')}</option>
  </select>
</div>
```

---

## Navigation

### Header with Language/Theme Toggle

```jsx
<header className="header">
  <nav className="nav-container">
    <a href="/" className="logo">
      <img src="/logo.svg" alt="Atlan Performance" />
    </a>
    
    <ul className="nav-links">
      <li><a href="/programs">{t('nav.programs')}</a></li>
      <li><a href="/membership">{t('nav.membership')}</a></li>
      <li><a href="/schedule">{t('nav.schedule')}</a></li>
      <li><a href="/about">{t('nav.about')}</a></li>
    </ul>
    
    <div className="nav-actions">
      {/* Language Toggle */}
      <button 
        className="toggle-btn"
        onClick={() => changeLanguage(lang === 'es' ? 'en' : 'es')}
        aria-label={t('nav.changeLanguage')}
      >
        {lang === 'es' ? 'EN' : 'ES'}
      </button>
      
      {/* Theme Toggle */}
      <button 
        className="toggle-btn"
        onClick={toggleTheme}
        aria-label={t('nav.changeTheme')}
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      
      {/* Primary CTA */}
      <a href="/contact" className="btn btn-primary">
        {t('cta.joinTrial')}
      </a>
    </div>
  </nav>
</header>
```

---

## Utilities

### Skip Navigation Link

```jsx
<a href="#main-content" className="skip-link">
  {t('accessibility.skipToContent')}
</a>
```

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  padding: var(--space-sm);
  background-color: var(--color-coral-spark);
  color: var(--color-white);
  font-weight: var(--weight-bold);
  z-index: var(--z-modal);
  transition: top 0.2s;
}

.skip-link:focus {
  top: 0;
}
```

### Screen Reader Only

```jsx
<span className="sr-only">{t('accessibility.description')}</span>
```

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```
