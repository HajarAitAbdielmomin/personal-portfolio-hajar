"use client"
import { Layers, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import React, {useState} from "react";
import type { Project } from '@/app/lib/types';

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.ogg'];

function isVideo(src: string) {
    return VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));
}

export default function ProjectGallery({ project }: { project: Project }) {
    const [activeTab, setActiveTab] = useState('screenshots');
    const [activeImage, setActiveImage] = useState(0);

    const currentGallery = activeTab === 'screenshots' ? project.screenshots : project.architecture;
    const currentItem = currentGallery[activeImage] ?? currentGallery[0];
    if (!currentItem) return null;
    const currentIsVideo = isVideo(currentItem);

    return (
        <div>
            {/* Tabs */}
            <div className="flex items-center gap-2 mb-4">
                <button
                    onClick={() => { setActiveTab('screenshots'); setActiveImage(0); }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === 'screenshots' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    }`}
                    suppressHydrationWarning
                >
                    <ImageIcon size={15} suppressHydrationWarning /> Demo
                </button>
                {project.architecture.length > 0 && (
                    <button
                        onClick={() => { setActiveTab('architecture'); setActiveImage(0); }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            activeTab === 'architecture' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        }`}
                        suppressHydrationWarning
                    >
                        <Layers size={15} suppressHydrationWarning /> Architecture
                    </button>
                )}
            </div>

            {/* Main media */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-blue-100 mb-3">
                <div className="w-full h-72 flex items-center justify-center bg-black/5">
                    {currentIsVideo ? (
                        <video
                            key={currentItem}
                            src={currentItem}
                            controls
                            className="w-full h-full object-contain bg-black"
                        />
                    ) : currentItem.startsWith('/') ? (
                        <img src={currentItem} alt={`image ${activeImage + 1}`} className="w-full h-full object-contain" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-sm font-medium" style={{ background: currentItem }}>
                            {activeTab === 'screenshots' ? `Screenshot ${activeImage + 1}` : `Architecture Diagram ${activeImage + 1}`}
                        </div>
                    )}
                </div>

                {/* Hide arrows while a video is playing so they don't fight with video controls */}
                {!currentIsVideo && currentGallery.length > 1 && (
                    <>
                        <button
                            onClick={() => setActiveImage((p) => (p === 0 ? currentGallery.length - 1 : p - 1))}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-blue-700 hover:bg-white transition-colors shadow"
                            suppressHydrationWarning
                        >
                            <ChevronLeft size={18} suppressHydrationWarning />
                        </button>
                        <button
                            onClick={() => setActiveImage((p) => (p === currentGallery.length - 1 ? 0 : p + 1))}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-blue-700 hover:bg-white transition-colors shadow"
                            suppressHydrationWarning
                        >
                            <ChevronRight size={18} suppressHydrationWarning />
                        </button>
                    </>
                )}
            </div>

            {/* Dot indicators - lets you jump directly, including back out of a video */}
            {currentGallery.length > 1 && (
                <div className="flex items-center justify-center gap-2">
                    {currentGallery.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveImage(i)}
                            aria-label={`Go to item ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all ${
                                activeImage === i ? 'w-6 bg-blue-600' : 'w-1.5 bg-blue-200 hover:bg-blue-300'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}