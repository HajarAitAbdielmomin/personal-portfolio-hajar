import HomePage from './components/sections/home-page/HomePage';
import Education from "@/app/components/sections/education/Educations";
import Internships from "@/app/components/sections/internships/Internships";
import Certifications from "@/app/components/sections/certifications/Certification";
import Skills from "@/app/components/sections/skills/Skills";
import Contact from "@/app/components/sections/contact/Contact"
import Footer from "@/app/components/layout/footer/Footer";
import Projects from "@/app/components/sections/projects/Projects";
export default function Page() {
    return (
        <main className="bg-gray-50">
            <HomePage />
            <Education />
            <Internships />
            <Projects />
            <Certifications />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
}