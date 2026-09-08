import {SkillCardProps} from "@/app/lib/types";


export default function SkillCategoryCard({ icon, title, skills }: SkillCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
            {/* Icon */}
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 text-yellow-600">
                {icon}
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-yellow-100 hover:text-yellow-700 transition-colors cursor-default"
                    >
            {skill}
          </span>
                ))}
            </div>
        </div>
    );
}