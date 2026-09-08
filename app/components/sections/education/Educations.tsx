'use client';
import React from 'react';
import EducationCard from "@/app/components/ui/EducationCard/Card";
import {educationsData} from "@/app/lib/data";
import { useInView } from "@/app/hooks/useInView";

export default function Education() {
    const { ref, inView } = useInView();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} id="education" className="w-full py-20 px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center mb-20"><div className="flex-grow border-t-2 border-gray-300"></div><div className="mx-4"><div className="w-3 h-3 bg-blue-500 rounded-full"></div></div><div className="flex-grow border-t-2 border-gray-300"></div></div>

                <div className={`text-center mb-16 reveal ${inView ? 'visible' : ''}`}>
                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">My journey</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Academic Path
                        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
                    </h2>
                </div>

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