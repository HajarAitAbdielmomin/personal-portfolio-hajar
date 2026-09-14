export interface Certification {
    id: string;
    organizationName: string;
    organizationLogo: string;
    courseName: string;
    certificationImage: string;
}
export interface Blog {
    title: string;
    date: string;
    image: string;
    subtitle: string;
    link: string;
}
export interface Education {
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

export interface Internship {
    id: string;
    position: string;
    company: string;
    companyLogo: string;
    location: string;
    startDate: string;
    endDate: string;
    tasks: string[];
    technologies: string[];
    uiImages?: string[];
    status: 'completed' | 'in-progress' | 'upcoming';
    topic?: string;
    width: number;
    height: number;
}