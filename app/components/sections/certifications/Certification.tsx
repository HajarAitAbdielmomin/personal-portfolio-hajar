"use client"
import React, { useState, useEffect } from 'react';
import CertificationCard from '@/app/components/ui/CertificationCard/Card';
import { certificationsData } from '@/app/lib/data';
import { useInView } from '@/app/hooks/useInView';

const Certifications: React.FC = () => {
    const { ref, inView } = useInView();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplayDelay, setAutoplayDelay] = useState(3000);
    const cardsPerView = 3;
    const totalSlides = Math.ceil(certificationsData.length / cardsPerView);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, autoplayDelay);
        return () => clearInterval(interval);
    }, [totalSlides, autoplayDelay]);

    const handlePrev = () => {
        setAutoplayDelay(7000);
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleNext = () => {
        setAutoplayDelay(7000);
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const handleDotClick = (index: number) => {
        setAutoplayDelay(7000);
        setCurrentIndex(index);
    };
    return (
        <section ref={ref as React.RefObject<HTMLElement>} id="certification" className="py-20 px-6 md:px-12 bg-gray-50">
                {/* Styled horizontal line */}
                <div className="flex items-center mb-20">
                    <div className="grow border-t-2 border-gray-300"></div>
                    <div className="mx-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="grow border-t-2 border-gray-300"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-16 reveal ${inView ? 'visible' : ''}`}>
                    <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-2">
                        My Certifications
                    </h2>
                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-700 mb-4">
                        Explore a collection of my certifications and course completions, each crafted to deliver excellence, user-centric experiences.
                    </p>
                    <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
                </div>

                <div className={`reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
                {/* Certifications Slider */}
                <div className="relative px-8 md:px-12">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" suppressHydrationWarning>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" suppressHydrationWarning>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="overflow-hidden pb-8">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {certificationsData
                                    .slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView)
                                    .map((certification) => (
                                        <CertificationCard
                                            key={certification.id}
                                            id={certification.id}
                                            organizationName={certification.organizationName}
                                            organizationLogo={certification.organizationLogo}
                                            courseName={certification.courseName}
                                            certificationImage={certification.certificationImage}
                                        />
                                    ))
                                }
                            </div>
                        ))}
                        </div>
                    </div>
                    
                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                    index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
                </div>

            </div>
        </section>
    );
};

export default Certifications;