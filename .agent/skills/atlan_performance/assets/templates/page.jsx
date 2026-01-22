import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import styles from './PageName.module.css';

/**
 * PageName Page
 * 
 * @description Replace with page description
 * @route /page-route
 */
const PageNamePage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{t('pages.pagename.title')} | Atlan Performance</title>
        <meta name="description" content={t('pages.pagename.metaDescription')} />
        <meta property="og:title" content={`${t('pages.pagename.title')} | Atlan Performance`} />
        <meta property="og:description" content={t('pages.pagename.metaDescription')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://atlanperformance.com/page-route" />
      </Helmet>

      <main className={styles.page} id="main-content">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              {t('pages.pagename.headline')}
            </h1>
            <p className={styles.subtitle}>
              {t('pages.pagename.subheadline')}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.content}>
          <div className={styles.container}>
            {/* Add page content here */}
          </div>
        </section>
      </main>
    </>
  );
};

export default PageNamePage;
