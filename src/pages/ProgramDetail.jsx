import React, { useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useLanguage } from '@hooks/useLanguage';
import Button from '@components/ui/Button';
import { CaretLeft, CheckCircle } from '@phosphor-icons/react';
import { useAnalytics } from '@hooks/useAnalytics';
import { usePageTitle } from '@hooks/usePageTitle';

// Assets (reusing for detail pages)
import swimAdults from '@assets/program_swimming_adults.png';
import swimJuniors from '@assets/program_swimming_juniors.png';
import openWater from '@assets/program_open_water.png';
import running from '@assets/program_running.png';
import triathlon from '@assets/program_triathlon.png';

const ProgramDetail = () => {
    const { slug } = useParams();
    const { t, language } = useLanguage();
    useAnalytics();
    const navigate = useNavigate();


    // Mock data for detail pages (would be in a data file or API)
    const programData = {
        'swimming-adults': {
            title: 'swimming_adults.title',
            image: swimAdults,
            features: {
                en: [
                    'Breathing patterns and body position that stay stable',
                    'Stroke mechanics: body line, rotation, catch, and finish',
                    'Drills that transfer into full swimming',
                    'Structured sets to build endurance and pacing awareness',
                    'Clear coaching cues you can apply immediately',
                    'Recovery + longevity habits'
                ],
                es: [
                    'Patrones de respiración y posición corporal que se mantienen estables',
                    'Mecánica de brazada: línea corporal, rotación, agarre y finalización',
                    'Ejercicios que se transfieren a la natación completa',
                    'Series estructuradas para desarrollar resistencia y conciencia del ritmo',
                    'Señales claras de coaching que puedes aplicar inmediatamente',
                    'Recuperación y hábitos de longevidad'
                ]
            },
        },
        'swimming-juniors': {
            title: 'swimming_juniors.title',
            image: swimJuniors,
            features: {
                en: [
                    'Breathing and body position fundamentals',
                    'Stroke skill development',
                    'Smart progression: skills, short sets, longer repeats',
                    'Team habits: focus, consistency, and respectful',
                    'A balance of structure and fun environment',
                    'Competition prep'
                ],
                es: [
                    'Fundamentos de respiración y posición corporal',
                    'Desarrollo de habilidades de brazada',
                    'Progresión inteligente: habilidades, series cortas, repeticiones más largas',
                    'Hábitos de equipo: enfoque, consistencia y respeto',
                    'Un balance de estructura y ambiente divertido',
                    'Preparación para competencias'
                ]
            },
        },
        'open-water': {
            title: 'open_water.title',
            image: openWater,
            features: {
                en: [
                    'Sighting skills that keeps your rhythm',
                    'Navigation + line choice',
                    'Drafting skills',
                    'Endurance swims',
                    'Race strategy guidance: starts, buoy turns, positioning',
                    'Technique cues to protect form'
                ],
                es: [
                    'Habilidades de avistamiento que mantienen tu ritmo',
                    'Navegación + elección de línea',
                    'Habilidades de drafting',
                    'Nados de resistencia',
                    'Guía de estrategia: salidas, giros en boyas, posicionamiento',
                    'Señales técnicas para proteger la forma'
                ]
            },
        },
        'running': {
            title: 'running.title',
            image: running,
            features: {
                en: [
                    'Run form + cadence skills to turn efficiency into speed',
                    'Periodized training blocks: base, build, peak, taper',
                    'Quality sessions: intervals, tempo/threshold, hills, and strides',
                    'Pacing + race strategy guidance: execution, fueling cues, and splits',
                    'Strength + mobility to protect joints and improve durability',
                    'Recovery + longevity habits'
                ],
                es: [
                    'Forma de carrera y habilidades de cadencia para convertir eficiencia en velocidad',
                    'Bloques de entrenamiento periodizado: base, construcción, pico, descarga',
                    'Sesiones de calidad: intervalos, tempo/umbral, colinas y zancadas',
                    'Guía de ritmo y estrategia de carrera: ejecución, señales de nutrición y tiempos',
                    'Fuerza y movilidad para proteger articulaciones y mejorar durabilidad',
                    'Recuperación y hábitos de longevidad'
                ]
            },
        },
        'triathlon': {
            title: 'triathlon.title',
            image: triathlon,
            features: {
                en: [
                    'Swim technique to turn into a strength',
                    'Periodized training blocks',
                    'Brick workouts Transition skills',
                    'Race strategy guidance: pacing, execution',
                    'Recovery + longevity habits'
                ],
                es: [
                    'Técnica de natación para convertirla en fortaleza',
                    'Bloques de entrenamiento periodizado',
                    'Entrenamientos combinados y habilidades de transición',
                    'Guía de estrategia de carrera: ritmo, ejecución',
                    'Recuperación y hábitos de longevidad'
                ]
            },
        },
    };

    const program = programData[slug];
    usePageTitle(program ? t(`programs.${program.title}`) : 'Program Detail');

    useEffect(() => {
        if (!program) {
            navigate('/programs');
        }
    }, [program, navigate]);

    if (!program) return null;

    return (
        <div className="container-atlan py-12 md:py-20 animate-fade-in">
            <NavLink to="/programs" className="inline-flex items-center gap-2 text-foam/60 hover:text-tide-teal mb-8 transition-colors">
                <CaretLeft size={20} />
                <span>{t('programs.back', 'Back to Programs')}</span>
            </NavLink>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-glow-teal/30 border border-white/10 relative order-2 lg:order-1">
                    <img src={program.image} alt={slug} className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss-navy/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                    <h1 className="text-4xl md:text-5xl text-white font-heading font-bold mb-6">
                        {t(`programs.${program.title}`, slug.replace('-', ' ').toUpperCase())}
                    </h1>
                    <p className="text-foam/80 text-lg leading-relaxed mb-8">
                        {t(`programs.${slug.replace('-', '_')}.long_desc`, "Detailed program description goes here. This creates an immersive experience for the user explaining the benefits and methodology of this specific program.")}
                    </p>

                    <div className="mb-10 space-y-4">
                        <h3 className="text-xl text-white font-bold">{t('programs.features', 'Key Features')}</h3>
                        <ul className="space-y-3">
                            {(Array.isArray(program.features) 
                                ? program.features 
                                : (program.features[language] || program.features.en)
                            ).map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-foam/80">
                                    <CheckCircle className="text-tide-teal" size={24} weight="fill" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-4">
                        <NavLink to="/contact">
                            <Button size="lg" className="w-full md:w-auto shadow-glow-coral">
                                {t('hero.cta')}
                            </Button>
                        </NavLink>
                        <NavLink to="/courses">
                            <Button variant="secondary" size="lg" className="w-full md:w-auto">
                                {t('nav.courses')}
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetail;
