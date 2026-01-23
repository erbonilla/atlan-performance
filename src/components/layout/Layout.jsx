import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-abyss-navy dark:bg-abyss-navy light:bg-light-bg-primary selection:bg-tide-teal selection:text-white dark:selection:bg-tide-teal dark:selection:text-white light:selection:bg-teal-light-optimized light:selection:text-white">
            <Header />
            <main className="flex-grow pt-24 md:pt-28">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
