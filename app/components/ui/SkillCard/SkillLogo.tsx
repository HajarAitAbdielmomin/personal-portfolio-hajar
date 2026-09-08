import {SkillLogoProps} from "@/app/lib/types";


export default function SkillLogo({ icon: Icon, name, color = '#374151' }: SkillLogoProps) {
    return (
        <div className="group flex flex-col items-center justify-center gap-3 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default" suppressHydrationWarning>
            <Icon
                size={40}
                color={color}
                className="group-hover:scale-110 transition-transform duration-300"
                suppressHydrationWarning
            />
            <span className="text-sm font-medium text-gray-700 text-center">
        {name}
      </span>
        </div>
    );
}