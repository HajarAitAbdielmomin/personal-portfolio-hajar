"use client"
import { ExternalLink, Layers, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import {FaGithub} from 'react-icons/fa';
import { projects } from '@/app/lib/data';
import React, {useState} from "react";
interface Project {
    title: string;
    description: string;
    tags: string[];
    screenshots: string[];
    architecture: string[];
    github: string;
    live: string;
    featured: boolean;
}

function ProjectGallery({ project }: { project: Project }) {
    const [activeTab, setActiveTab] = useState('screenshots');
    const [activeImage, setActiveImage] = useState(0);

    const currentGallery = activeTab === 'screenshots' ? project.screenshots : project.architecture;

    return (
        <div>
            {/* Tabs */}
            <div className="flex items-center gap-2 mb-4">
                <button
                    onClick={() => { setActiveTab('screenshots'); setActiveImage(0); }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === 'screenshots' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    }`}
                >
                    <ImageIcon size={15} /> Screenshots
                </button>
                {project.architecture.length > 0 && (
                    <button
                        onClick={() => { setActiveTab('architecture'); setActiveImage(0); }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            activeTab === 'architecture' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        }`}
                    >
                        <Layers size={15} /> Architecture
                    </button>
                )}
            </div>

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-blue-100 mb-3">
                <div className="w-full h-72 flex items-center justify-center">
                    {currentGallery[activeImage].startsWith('/')
                        ? <img src={currentGallery[activeImage]} alt={`image ${activeImage + 1}`} className="w-full h-full object-contain" />
                        : <div className="w-full h-full flex items-center justify-center text-white text-sm font-medium" style={{ background: currentGallery[activeImage] }}>
                            {activeTab === 'screenshots' ? `Screenshot ${activeImage + 1}` : `Architecture Diagram ${activeImage + 1}`}
                          </div>
                    }
                </div>
                <button
                    onClick={() => setActiveImage((p) => (p === 0 ? currentGallery.length - 1 : p - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-blue-700 hover:bg-white transition-colors shadow"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={() => setActiveImage((p) => (p === currentGallery.length - 1 ? 0 : p + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-blue-700 hover:bg-white transition-colors shadow"
                >
                    <ChevronRight size={18} />
                </button>
            </div>

        </div>
    );
}

export default function ProjectsSlider() {
    const [current, setCurrent] = useState(0);

    const goTo = (index: number) => {
        const total = projects.length;
        setCurrent(((index % total) + total) % total);
    };

    return (
        <section className="w-full py-16 px-8 bg-gray-50" id="project">
            <div className="max-w-6xl mx-auto">
                {/* Divider */}
                <div className="flex items-center mb-14">
                    <div className="flex-grow border-t-2 border-blue-100"></div>
                    <div className="mx-4 w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div className="flex-grow border-t-2 border-blue-100"></div>
                </div>

                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-2">
                        Projects
                    </h2>
                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-700 mb-4">
                        Experience working on real projects and developing professional skills
                    </p>
                    <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
                </div>

                {/* Slider */}
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
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={() => goTo(current + 1)}
                                className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-sm"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Active project */}
                    <div className="bg-white rounded-3xl shadow-md border border-blue-50 p-6 md:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                            {/* Gallery */}
                            <div className="lg:col-span-3">
                                <ProjectGallery project={projects[current]} />
                            </div>

                            {/* Details */}
                            <div className="lg:col-span-2">
                                {projects[current].featured && (
                                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Featured Project
                  </span>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{projects[current].title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mb-5">{projects[current].description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {projects[current].tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-100">
                      {tag}
                    </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3">
                                    <a href={projects[current].github} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                                        <FaGithub size={16} /> Code
                                    </a>
                                    <a href={projects[current].live} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
                                        <ExternalLink size={16} /> Live Demo
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
                                    current === i ? 'w-8 bg-blue-600' : 'w-2 bg-blue-200 hover:bg-blue-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}