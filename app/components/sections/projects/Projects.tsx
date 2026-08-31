
// app/components/sections/projects/Projects.tsx
import { projects } from '@/app/lib/data';
import ProjectSlider from './ProjectSlider';

export default function Projects() {
    return (
        <section className="w-full py-16 px-8 bg-gray-50" id="project">
            <div className="max-w-6xl mx-auto">
                {/* Divider */}
                <div className="flex items-center mb-14">
                    <div className="flex-grow border-t-2 border-blue-100"></div>
                    <div className="mx-4 w-3 h-3 bg-blue-500 rounded-full"></div>
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

                <ProjectSlider projects={projects} />
            </div>
        </section>
    );
}