import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LegalPolicy = ({ policyType }) => {
    const { i18n } = useTranslation();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPolicy = async () => {
            setLoading(true);
            setError(false);
            try {
                // Try to fetch the localized policy
                const lang = i18n.language.split('-')[0]; // 'en-US' -> 'en'
                const fileName = `${policyType}.${lang}.md`;

                // Note: We need to fetch from public folder
                const response = await fetch(`/policies/${fileName}`);

                if (!response.ok) {
                    throw new Error('Policy not found');
                }

                const text = await response.text();
                setContent(text);
            } catch (err) {
                console.error("Failed to load policy:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPolicy();
    }, [policyType, i18n.language]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tide-teal"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center text-coral-spark">
                <p>Error loading policy content. Please try again later.</p>
            </div>
        );
    }

    // Custom components for ReactMarkdown to match the design system
    const renderers = {
        h1: ({ node, ...props }) => <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading border-b border-white/10 pb-4" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mb-4 mt-8 text-tide-teal font-heading" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-xl font-bold mb-3 mt-6 text-white font-heading" {...props} />,
        h4: ({ node, ...props }) => <h4 className="text-lg font-bold mb-2 mt-4 text-coral-spark font-heading" {...props} />,
        p: ({ node, ...props }) => <p className="mb-4 leading-relaxed text-foam/80" {...props} />,
        ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 text-foam/80 space-y-1" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4 text-foam/80 space-y-1" {...props} />,
        li: ({ node, ...props }) => <li className="mb-1" {...props} />,
        a: ({ node, ...props }) => <a className="text-tide-teal hover:text-white hover:underline transition-colors" {...props} />,
        blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-tide-teal pl-4 italic my-4 text-foam/60 bg-white/5 p-4 rounded-r" {...props} />,
        hr: ({ node, ...props }) => <hr className="border-white/10 my-8" {...props} />,
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-abyss-navy relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-tide-teal/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral-spark/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="container-atlan relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="prose prose-invert max-w-none"
                >
                    <ReactMarkdown components={renderers}>
                        {content}
                    </ReactMarkdown>
                </motion.div>
            </div>
        </div>
    );
};

export default LegalPolicy;
