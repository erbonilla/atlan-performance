import React from 'react';
import { Atom, Waves, UsersThree, ArrowRight } from '@phosphor-icons/react';
import { useLanguage } from '@hooks/useLanguage';

const USPGrid = () => {
    const { t } = useLanguage();

    const pillars = [
        {
            icon: Atom,
            titleKey: 'usp.science.title',
            descKey: 'usp.science.desc',
        },
        {
            icon: Waves,
            titleKey: 'usp.discipline.title',
            descKey: 'usp.discipline.desc',
        },
        {
            icon: UsersThree,
            titleKey: 'usp.community.title',
            descKey: 'usp.community.desc',
        },
    ];

    return (
        <section className="section bg-abyss-navy dark:bg-abyss-navy light:bg-light-bg-primary relative">
            <div className="container-atlan">
                <div className="max-w-prose mb-10 md:mb-14">
                    <h2 className="type-headline text-white dark:text-white light:text-light-text-primary mb-3">
                        {t('usp.title')}
                    </h2>
                    <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-base md:text-lg mb-5">
                        {t('usp.description')}
                    </p>
                    <a
                        href="#planes"
                        className="inline-flex min-h-12 items-center gap-2 type-meta text-sm font-heading font-semibold text-coral-spark dark:text-coral-spark light:text-coral-light-optimized underline-offset-4 hover:underline hover:gap-3 transition-all"
                    >
                        {t('usp.cta')}
                        <ArrowRight size={16} weight="bold" aria-hidden="true" />
                    </a>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 list-none p-0 m-0">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;

                        return (
                            <li
                                key={pillar.titleKey}
                                className="border-t border-white/15 dark:border-white/15 light:border-light-border pt-5"
                            >
                                <Icon
                                    weight="duotone"
                                    size={32}
                                    className="text-teal-bright dark:text-teal-bright light:text-teal-light-optimized mb-3"
                                    aria-hidden="true"
                                />
                                <h3 className="type-title text-white dark:text-white light:text-light-text-primary mb-2">
                                    {t(pillar.titleKey)}
                                </h3>
                                <p className="type-body text-foam-secondary dark:text-foam-secondary light:text-light-text-secondary text-sm md:text-base">
                                    {t(pillar.descKey)}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default USPGrid;
