'use client';
import React from 'react';
import InternshipCard from '@/app/components/ui/InternshipCard/Card';
import { internshipsData } from '@/app/lib/data';
import { useInView } from '@/app/hooks/useInView';
import SectionHeader from '@/app/components/ui/SectionHeader/Header';
import {Divider} from "@/app/components/ui/SectionDivider/Divider";

function AnimatedCard({ internship }: { internship: typeof internshipsData[0] }) {
    const { ref, inView } = useInView(0.1);
    return (
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal from-left ${inView ? 'visible' : ''}`}>
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
    );
}

const Internships: React.FC = () => {
    const { ref, inView } = useInView();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} id="internship" className="py-20 px-6 md:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <Divider />

                <SectionHeader
                    subtitle="My Internships"
                    title="Experience working on real projects and developing professional skills"
                    inView={inView}
                />

                <div className="relative">
                    <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 rounded-full"></div>
                    <div className="pl-12">
                        {internshipsData.map((internship, index) => (
                            <AnimatedCard key={index} internship={internship} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Internships;