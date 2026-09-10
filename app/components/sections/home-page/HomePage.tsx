'use client';
import React from 'react';
import Img from '@/app/components/ui/Img';
import { FaLinkedin, FaHackerrank, FaGithub, FaMediumM } from 'react-icons/fa';
import ResumeDownload from '@/app/components/ui/ResumeDownload';
import { useInView } from '@/app/hooks/useInView';

export default function HomePage() {
    const { ref, inView } = useInView();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="w-full min-h-screen flex items-start justify-center pt-20 bg-gray-50" id="about">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10">
                    {/* Left Content */}
                    <div className={`space-y-6 reveal from-left ${inView ? 'visible' : ''}`}>
                        {/* Availability Badge */}
                        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-green-700">
                                Actively seeking a Full-Time opportunity (CDI)
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold">
                            Hi,
                            <br />
                            I&#39;m <span className="text-blue-500 animate-pulse">Hajar</span>
                            <br />
                            <span className="text-gray-900">Software Engineer</span>
                        </h1>

                        <p className="text-sm text-gray-600 leading-relaxed" style={{textAlign: 'justify'}}>
                            I'm Hajar, a passionate software engineer who believes in the power of technology to transform ideas into reality.
                            With a strong foundation in modern web technologies, design patterns, system modeling, and software architectures,
                            I design and build end-to-end digital solutions, from requirement analysis to deployment, with a focus on clarity, maintainability, and efficiency.
                            <br />
                            When I'm not coding, you'll find me exploring new technologies, solving algorithmic problems on HackerRank,
                            or sharing my knowledge through technical writing.
                        </p>

                        <ResumeDownload />

                        {/* Social Icons */}
                        <div className={`flex items-center gap-4 pt-8 reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
                            <a href="https://linkedin.com/in/hajar-ait-abdielmomin-98638421b" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 transition-colors" suppressHydrationWarning>
                                <FaLinkedin size={24} suppressHydrationWarning />
                            </a>
                            <a href="https://medium.com/@hajar.aitabdielmomin" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 transition-colors" suppressHydrationWarning>
                                <FaMediumM size={24} suppressHydrationWarning />
                            </a>
                            <a href="https://github.com/HajarAitAbdielmomin" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 transition-colors" suppressHydrationWarning>
                                <FaGithub size={24} suppressHydrationWarning />
                            </a>
                            <a href="https://www.hackerrank.com/profile/aithajar55" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 transition-colors" suppressHydrationWarning>
                                <FaHackerrank size={24} suppressHydrationWarning />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className={`flex justify-center lg:justify-end reveal from-right reveal-delay-2 ${inView ? 'visible' : ''}`}>
                        <div className="relative">
                            {/* Blue blob background */}
                            <div className="absolute inset-0 bg-blue-500 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transform scale-110 animate-blob"></div>

                            {/* Profile Image */}
                            <div className="relative w-80 h-80 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                                <Img
                                    src="/images/photo.png"
                                    alt="AitHajar"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}
