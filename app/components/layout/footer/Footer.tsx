import React from 'react';
import { Mail } from 'lucide-react';
import {
     FaLinkedin, FaGithub,
} from 'react-icons/fa';
export default function SimpleFooterOverview() {
    const socials = [FaLinkedin, FaGithub, Mail];

    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                    © 2025 Hajar. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    {socials.map((Icon, i) => (
                        <div
                            key={i}
                            className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-yellow-400 hover:border-yellow-400 hover:text-white transition-colors cursor-pointer"
                            suppressHydrationWarning
                        >
                            <Icon size={16} suppressHydrationWarning />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}