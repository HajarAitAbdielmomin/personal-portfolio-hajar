'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';

export default function ResumeDownload() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={ref}>
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
                <Download size={16} />
                Download Resume
                <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
                <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-20">
                    <a
                        href="/resume/Hajar_CV_EN.pdf"
                        download="Hajar_CV_EN.pdf"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                         English version
                    </a>
                    <a
                        href="/resume/Hajar_CV_FR.pdf"
                        download="Hajar_CV_FR.pdf"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-100"
                    >
                         Version française
                    </a>
                </div>
            )}
        </div>
    );
}