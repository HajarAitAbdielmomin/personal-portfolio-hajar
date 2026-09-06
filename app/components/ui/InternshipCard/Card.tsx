"use client"
import React, { useState } from 'react';
import Img from '@/app/components/ui/Img';

interface InternshipCardProps {
    position: string;
    company: string;
    companyLogo: string;
    location: string;
    startDate: string;
    endDate: string;
    tasks: string[];
    technologies: string[];
    uiImages?: string[];
    status?: 'completed' | 'in-progress' | 'upcoming';
    topic?: string;
    width: number;
    height: number;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
                                                           position,
                                                           company,
                                                           companyLogo,
                                                           location,
                                                           startDate,
                                                           endDate,
                                                           tasks,
                                                           technologies,
                                                           uiImages = [],
                                                           status = 'completed',
                                                           topic,
                                                           width,
                                                           height
                                                       }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const imagesPerPage = 3;
    const totalPages = Math.ceil(uiImages.length / imagesPerPage);
    
    const statusColors = {
        completed: 'bg-green-500',
        'in-progress': 'bg-blue-600',
        upcoming: 'bg-gray-400',
    };

    const statusLabels = {
        completed: 'Completed',
        'in-progress': 'In Progress',
        upcoming: 'Upcoming',
    };

    return (
        <div className="relative flex gap-6 pb-12">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-linear-to-br from-blue-400 to-purple-500 rounded-full border-4 border-gray-900 relative z-10"></div>
                <div className="w-1 h-24 bg-linear-to-b from-blue-400 to-purple-400 mt-4"></div>
            </div>

            {/* Card content */}
            <div className="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Header section */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {position}
                        </h3>
                        <div className="flex items-center gap-2">
                            {companyLogo && (
                                <Img
                                    src={companyLogo}
                                    alt={`${company} logo`}
                                    width={width}
                                    height={height}
                                    className="object-contain"
                                />
                            )}
                            <p className="text-sm text-gray-600 font-medium">
                                {company}
                            </p>
                        </div>
                        {location && (
                            <div className="flex items-center gap-1 mt-1">
                                <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20" suppressHydrationWarning>
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <p className="text-xs text-gray-500">
                                    {location}
                                </p>
                            </div>
                        )}
                    </div>
                    <span
                        className={`${statusColors[status]} text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-4`}
                    >
            {statusLabels[status]}
          </span>
                </div>

                {/* Date range */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <span className="font-semibold">{startDate}</span>
                    <span>→</span>
                    <span className="font-semibold">{endDate}</span>
                </div>

                {/* Topic section - highlighted */}
                {topic && (
                    <div className="mb-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                        <h4 className="text-sm font-semibold text-blue-900 mb-1">
                            Project Topic:
                        </h4>
                        <p className="text-sm text-blue-800 font-medium leading-relaxed">
                            {topic}
                        </p>
                    </div>
                )}

                {/* Tasks section */}
                {tasks.length > 0 && (
                    <div className="mb-4">
                        {/*    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                            Completed Tasks:
                        </h4>
                               <ul className="space-y-1">
                            {tasks.map((task, index) => (
                                <li
                                    key={index}
                                    className="text-sm text-gray-700 flex items-start gap-2"
                                >
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                )}

                {/* Technologies section */}
                {technologies.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                            Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* UI Images section */}
                {uiImages.length > 0 && (
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-semibold text-gray-900">
                                Part of the work :
                            </h4>
                            {totalPages > 1 && (
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                                        disabled={currentPage === 0}
                                        className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" suppressHydrationWarning>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <span className="text-xs text-gray-500">
                                        {currentPage + 1} / {totalPages}
                                    </span>
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                                        disabled={currentPage === totalPages - 1}
                                        className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" suppressHydrationWarning>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {uiImages
                                .slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage)
                                .map((image, index) => (
                                    <div
                                        key={currentPage * imagesPerPage + index}
                                        className="relative h-40 bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                                    >
                                        <Img
                                            src={image}
                                            alt={`UI work ${currentPage * imagesPerPage + index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InternshipCard;