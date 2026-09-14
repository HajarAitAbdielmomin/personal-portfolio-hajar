'use client';
import React from 'react';
import { projects } from '@/app/lib/data';
import ProjectSlider from './ProjectSlider';
import { useInView } from '@/app/hooks/useInView';
import {Divider} from "@/app/components/ui/SectionDivider/Divider";

export default function Projects() {
    const { ref, inView } = useInView();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-20 px-8 bg-gray-50" id="project">
            <div className="max-w-7xl mx-auto">
                <Divider />

                <div className={`text-center mb-16 reveal ${inView ? 'visible' : ''}`}>
                    <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-2">Projects</h2>
                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-700 mb-4">
                        Experience working on real projects and developing professional skills
                    </p>
                    <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
                </div>

                <div className={`reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
                    <ProjectSlider projects={projects} />
                </div>
            </div>
        </section>
    );
}