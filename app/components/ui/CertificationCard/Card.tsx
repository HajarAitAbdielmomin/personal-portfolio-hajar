import React from 'react';
import Img from '@/app/components/ui/Img';

interface CertificationCardProps {
    id: string;
    organizationName: string;
    organizationLogo: string;
    courseName: string;
    certificationImage: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
                                                                 id,
                                                                 organizationName,
                                                                 organizationLogo,
                                                                 courseName,
                                                                 certificationImage,
                                                             }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Certification Image */}
            <div className="relative h-64 bg-gray-100 overflow-hidden">
                <Img
                    src={certificationImage}
                    alt={courseName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on hover */}
                <div
                    className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            </div>

            {/* Card Content */}
            <div className="p-6 bg-linear-to-br from-blue-50 to-purple-50 flex-1">
                {/* Organization Logo and Name */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 bg-white rounded-lg overflow-hidden shrink-0 shadow-sm">
                        <Img
                            src={organizationLogo}
                            alt={organizationName}
                            fill
                            className="object-contain p-1"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-600 truncate">
                            {organizationName}
                        </p>
                    </div>
                </div>

                {/* Course Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-3">
                    {courseName}
                </h3>

            </div>

            {/* Badge indicator */}
            <div className="absolute top-4 right-4 bg-linear-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Certified
            </div>
        </div>
    );
};

export default CertificationCard;