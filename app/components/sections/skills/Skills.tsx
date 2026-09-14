'use client';
import React from 'react';
import SkillLogo from "@/app/components/ui/SkillCard/SkillLogo";
import {skillGroups} from "@/app/lib/data";
import { useInView } from "@/app/hooks/useInView";
import SectionHeader from '@/app/components/ui/SectionHeader/Header';
import {Divider} from "@/app/components/ui/SectionDivider/Divider";
export default function Skills() {
    const { ref, inView } = useInView();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} id="skills" className="w-full py-20 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <Divider />

                <SectionHeader
                    subtitle="My Skills"
                    title="What I bring to the table"
                    titleSize="text-4xl"
                    inView={inView}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((skill, index) => (
                        <div key={index} className={`reveal scale reveal-delay-${Math.min(index + 1, 5)} ${inView ? 'visible' : ''}`}>
                            <SkillLogo icon={skill.icon} name={skill.name} color={skill.color} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}