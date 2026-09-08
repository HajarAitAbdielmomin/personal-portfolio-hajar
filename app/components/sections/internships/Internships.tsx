'use client';
import React from 'react';
import InternshipCard from '@/app/components/ui/InternshipCard/Card';
import { internshipsData } from '@/app/lib/data';
import { useInView } from '@/app/hooks/useInView';

const Internships: React.FC = () => {
    const { ref, inView } = useInView();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} id="internship" className="py-20 px-6 md:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center mb-20"><div className="flex-grow border-t-2 border-gray-300"></div><div className="mx-4"><div className="w-3 h-3 bg-blue-500 rounded-full"></div></div><div className="flex-grow border-t-2 border-gray-300"></div></div>

                <div className={`text-center mb-16 reveal ${inView ? 'visible' : ''}`}>
                    <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-2">My Internships</h2>
                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-700 mb-4">
                        Experience working on real projects and developing professional skills
                    </p>
                    <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
                </div>

                <div className="relative">
                    <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 rounded-full"></div>
                    <div className="pl-12">
                        {internshipsData.map((internship, index) => (
                            <div key={index} className={`reveal from-left reveal-delay-${Math.min(index + 1, 5)} ${inView ? 'visible' : ''}`}>
                                <InternshipCard
                                    position={internship.position}
                                    company={internship.company}
                                    location={internship.location}
                                    companyLogo={internship.companyLogo}
                                    startDate={internship.startDate}
                                    endDate={internship.endDate}
                                    tasks={internship.tasks}
                                    technologies={internship.technologies}
                                    uiImages={internship.uiImages}
                                    status={internship.status}
                                    topic={internship.topic}
                                    width={internship.width}
                                    height={internship.height}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Internships;