"use client"
import { useState } from "react";
import Img from "@/app/components/ui/Img";

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'internship', label: 'Internships' },
    { id: 'project', label: 'Projects' },
    { id: 'certification', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

const scrollToSection = (sectionId: string, onDone?: () => void) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        onDone?.();
    }
};

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 animate-slide-down">
            <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">
                <div className="h-12 flex items-center">
                    <Img src="/logo/hajar-logo.png" alt="hajar logo" width={100} height={2} className="object-contain" />
                </div>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ id, label }) => (
                        <li key={id}>
                            <button onClick={() => scrollToSection(id)} className="text-gray-700 font-medium hover:text-blue-600 transition-colors cursor-pointer">
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col bg-white shadow-md px-8 pb-4">
                    {navLinks.map(({ id, label }) => (
                        <li key={id}>
                            <button onClick={() => scrollToSection(id, () => setMenuOpen(false))} className="w-full text-left py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors border-b border-gray-100 last:border-0">
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}