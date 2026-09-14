'use client';
import React from 'react';
import EducationCard from "@/app/components/ui/EducationCard/Card";
import {educationsData} from "@/app/lib/data";
import { useInView } from "@/app/hooks/useInView";
import SectionHeader from '@/app/components/ui/SectionHeader/Header';
import {Divider} from "@/app/components/ui/SectionDivider/Divider";

export default function Education() {
    const { ref, inView } = useInView();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} id="education" className="w-full py-20 px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <Divider />

                <SectionHeader
                    subtitle="My journey"
                    title="Academic Path"
                    titleSize="text-4xl"
                    inView={inView}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {educationsData.map((edu, index) => (
                        <div key={index} className={`reveal reveal-delay-${Math.min(index + 1, 5)} ${inView ? 'visible' : ''}`}>
                            <EducationCard
                                logo={edu.logo}
                                schoolName={edu.schoolName}
                                location={edu.location}
                                degree={edu.degree}
                                major={edu.major}
                                startYear={edu.startYear}
                                endYear={edu.endYear}
                                isGraduated={edu.isGraduated}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}