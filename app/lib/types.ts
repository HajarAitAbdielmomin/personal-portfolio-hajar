import {IconType} from "react-icons";

export interface Project {
    title: string;
    description: string;
    tags: string[];
    screenshots: string[];
    architecture: string[];
    github: string;
}

export interface CertificationCardProps {
    id: string;
    organizationName: string;
    organizationLogo: string;
    courseName: string;
    certificationImage: string;
}

export interface EducationCardProps {
    logo: string;
    schoolName: string;
    location: string;
    degree: string;
    major: string;
    startYear: string;
    endYear: string;
    isGraduated?: boolean;
    footerText?: string;
}

export interface InternshipCardProps {
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

export interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    skills: string[];
}

export interface SkillLogoProps {
    icon: IconType;
    name: string;
    color?: string;
}