"use client"
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import {FaGithub} from 'react-icons/fa';
import { Project } from '@/app/lib/types';
import React, {useState} from "react";
import ProjectGallery from "@/app/components/sections/projects/ProjectGallery";

const DESCRIPTION_LIMIT = 150;

export default function ProjectsSlider({ projects }: { projects: Project[] }) {
    const [current, setCurrent] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const goTo = (index: number) => {
        const total = projects.length;
        setCurrent(((index % total) + total) % total);
        setExpanded(false);
    };
    const activeProject = projects[current];

    return (
        <div className="relative">
            {/* Slide counter + nav */}
            <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-400">
          {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => goTo(current - 1)}
                        className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-sm"
                        suppressHydrationWarning
                    >
                        <ChevronLeft size={18} suppressHydrationWarning />
                    </button>
                    <button
                        onClick={() => goTo(current + 1)}
                        className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-sm"
                        suppressHydrationWarning
                    >
                        <ChevronRight size={18} suppressHydrationWarning />
                    </button>
                </div>
            </div>

            {/* Active project */}
            <div className="bg-white rounded-3xl shadow-md border border-blue-50 p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Gallery */}
                    <div className="lg:col-span-3">
                        <ProjectGallery project={activeProject} />
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-2">
                        {activeProject.featured && (
                            <span className="inline-block bg-blue-100 text-blue-500 text-xs font-bold px-3 py-1 rounded-full mb-3">
                Featured Project
              </span>
                        )}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{activeProject.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-1">
                            {expanded || activeProject.description.length <= DESCRIPTION_LIMIT
                                ? activeProject.description
                                : activeProject.description.slice(0, DESCRIPTION_LIMIT) + '... '}
                            {activeProject.description.length > DESCRIPTION_LIMIT && (
                                <button
                                    onClick={() => setExpanded((v) => !v)}
                                    className="text-xs text-blue-500 hover:underline mb-4"
                                >
                                    {expanded ? 'Show less' : 'Read more'}
                                </button>
                            )}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {activeProject.tags.map((tag, i) => (
                                <span key={i} className="text-xs font-medium px-3 py-1.5 bg-blue-50 text-blue-500 rounded-lg border border-blue-100">
                  {tag}
                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <a href={activeProject.github} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors" suppressHydrationWarning>
                                <FaGithub size={16} suppressHydrationWarning /> Code
                            </a>
                            <a href={activeProject.live} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-700 transition-colors" suppressHydrationWarning>
                                <ExternalLink size={16} suppressHydrationWarning /> Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-2 rounded-full transition-all ${
                            current === i ? 'w-8 bg-blue-500' : 'w-2 bg-blue-200 hover:bg-blue-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}