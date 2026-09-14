"use client"
import React, { useState, useEffect } from 'react';
import { useInView } from '@/app/hooks/useInView';
import {blogsData} from "@/app/lib/data";
import BlogCard from "@/app/components/ui/BlogCard/Card";
const Blogs: React.FC = () => {
    const { ref, inView } = useInView();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplayDelay, setAutoplayDelay] = useState(3000);
    const cardsPerView = 3;
    const totalSlides = Math.ceil(blogsData.length / cardsPerView);

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
        <section ref={ref as React.RefObject<HTMLElement>} id="blog" className="py-20 px-6 md:px-12 bg-gray-50">
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
                        My Blogs
                    </h2>
                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-700 mb-4">
                        Here are some of my writings
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
                                        {blogsData
                                            .slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView)
                                            .map((blog, index) => (
                                                <BlogCard
                                                    key={index}
                                                    title={blog.title}
                                                    desc={blog.subtitle}
                                                    image={blog.image}
                                                    date={blog.date}
                                                    link={blog.link}
                                                />
                                            ))
                                        }
                                        {slideIndex === totalSlides - 1 && (
                                            <a
                                                href="https://medium.com/@hajar.aitabdielmomin"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-auto sm:h-[26rem] w-full max-w-sm mx-auto flex flex-col items-center justify-center gap-4 group cursor-pointer"
                                            >
                                                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                                                    <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                                                    </svg>
                                                </div>
                                                <div className="text-center px-6">
                                                    <p className="text-lg font-semibold text-gray-900 mb-1">Read More on Medium</p>
                                                    <p className="text-sm text-gray-400">Explore all my articles and writings</p>
                                                </div>
                                                <span className="text-blue-600 font-medium group-hover:underline">Visit Profile →</span>
                                            </a>
                                        )}
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

export default Blogs;