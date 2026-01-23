import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '@hooks/useLanguage';
import Button from '@components/ui/Button';
import heroImage from '@assets/hero_home.png';

const Hero = () => {
    const { t } = useLanguage();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Partículas flotantes (simulan burbujas/partículas de agua)
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.size = Math.random() * 3 + 1;
                this.speedY = Math.random() * 1 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.y -= this.speedY;
                this.x += this.speedX;

                if (this.y < -10) {
                    this.reset();
                }
            }

            draw() {
                ctx.fillStyle = `rgba(236, 247, 248, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Crear partículas
        const particleCount = 80;
        const particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Ondas
        let waveOffset = 0;
        function drawWaves() {
            ctx.strokeStyle = 'rgba(14, 138, 154, 0.15)';
            ctx.lineWidth = 2;

            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x += 5) {
                    const y = Math.sin((x + waveOffset + i * 100) * 0.01) * 30 + canvas.height * (0.3 + i * 0.15);
                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }
        }

        // Animación
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dibujar ondas
            drawWaves();
            waveOffset += 1;

            // Actualizar y dibujar partículas
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Ajustar canvas en resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Atlan Performance Swimmers"
                    className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
                />
                {/* Overlays mejorados */}
                <div className="absolute inset-0 bg-abyss-navy/60 mix-blend-multiply dark:bg-abyss-navy/60 light:bg-white/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-abyss-navy via-abyss-navy/80 to-abyss-navy/30
                              dark:from-abyss-navy dark:via-abyss-navy/80 dark:to-abyss-navy/30
                              light:from-light-bg-primary light:via-light-bg-primary/60 light:to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-abyss-navy/90
                              dark:from-transparent dark:via-transparent dark:to-abyss-navy/90
                              light:from-transparent light:via-transparent light:to-light-bg-primary/95"></div>
            </div>

            {/* Canvas para animaciones de agua */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-[1] pointer-events-none"
            />

            {/* Efecto de brillo flotante */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tide-teal/20 dark:bg-tide-teal/20 light:bg-teal-light-optimized/10 rounded-full blur-[120px] animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral-spark/10 dark:bg-coral-spark/10 light:bg-coral-light-optimized/8 rounded-full blur-[120px] animate-float-delayed"></div>
            </div>

            {/* Content */}
            <div className="container-atlan relative z-10 text-left animate-fade-in px-4">
                <h1 className="text-white dark:text-white light:text-light-text-primary font-heading font-extrabold mb-6 tracking-tight drop-shadow-2xl max-w-4xl">
                    <span className="block text-4xl md:text-6xl lg:text-7xl mb-2 animate-slide-down uppercase leading-tight">
                        {t('hero.title')}
                    </span>
                    <span className="block text-2xl md:text-3xl lg:text-4xl text-tide-teal dark:text-tide-teal light:text-teal-light-optimized font-normal animate-slide-up-delayed">
                        {t('hero.subtitle')}
                    </span>
                </h1>

                <p className="text-foam/90 dark:text-foam/90 light:text-light-text-secondary text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-light drop-shadow-lg animate-fade-in-delayed">
                    {t('hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in-delayed-2">
                    <NavLink to="/subscribe">
                        <Button size="lg" className="min-w-[200px] shadow-glow-coral hover:scale-105 transition-transform">
                            {t('hero.cta')}
                        </Button>
                    </NavLink>
                    <NavLink to="/courses">
                        <Button variant="ghost" size="lg" className="min-w-[200px] backdrop-blur-sm border border-foam/20 hover:border-foam/40 hover:scale-105 transition-all">
                            {t('nav.courses')}
                        </Button>
                    </NavLink>
                </div>
            </div>

            {/* Scroll indicator mejorado */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex flex-col items-center gap-2 animate-bounce-slow">
                    <span className="text-foam/60 dark:text-foam/60 light:text-light-text-muted text-xs uppercase tracking-wider">Scroll</span>
                    <div className="w-6 h-10 rounded-full border-2 border-foam/30 dark:border-foam/30 light:border-light-border relative flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-coral-spark dark:bg-coral-spark light:bg-coral-light-optimized rounded-full animate-scroll-indicator"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
