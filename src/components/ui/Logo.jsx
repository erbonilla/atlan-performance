import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = '', animated = true }) => {
    const LogoComponent = animated ? motion.img : 'img';
    const animationProps = animated ? {
        whileHover: { scale: 1.05 },
        transition: { type: 'spring', stiffness: 400, damping: 10 }
    } : {};

    return (
        <LogoComponent
            src="/assets/logo/atlan_logo_transparent.svg"
            alt="Atlan Performance"
            className={`w-[60px] h-[64px] ${className}`}
            {...animationProps}
        />
    );
};

export default Logo;
