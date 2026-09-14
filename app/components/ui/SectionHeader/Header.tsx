import {SectionHeaderProps} from "@/app/lib/types";

export default function SectionHeader({ subtitle, title, titleSize = 'text-3xl', inView }: SectionHeaderProps) {
    return (
        <div className={`text-center mb-16 reveal ${inView ? 'visible' : ''}`}>
            <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-2">
                {subtitle}
            </h2>
            <p className={`${titleSize} font-bold text-gray-900 dark:text-gray-700 mb-4`}>
                {title}
            </p>
            <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
        </div>
    );
}
