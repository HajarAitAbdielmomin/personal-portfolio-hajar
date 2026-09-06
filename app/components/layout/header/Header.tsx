"use client"
import Img from "@/app/components/ui/Img";

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full py-6 px-8 h-20 bg-white shadow-sm z-50 animate-slide-down">
            <nav className="max-w-7xl mx-auto flex items-center justify-between h-full">
                {/* Logo */}
                <div className="h-12 flex items-center">
                    <Img
                        src="/logo/hajar-logo.png"
                        alt="hajar logo"
                        width={100}
                        height={2}
                        className="object-contain"
                    />
                </div>

                {/* Navigation Links */}
                <ul className="flex items-center gap-8">

                    <li>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('education')}
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            Education
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('internship')}
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            Internships
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('project')}
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('certification')}
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            Certifications
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            Skills
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}