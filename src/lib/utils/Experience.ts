import { Online } from "../constants";

export type ExperienceType = {
    id: string;
    title: string;
    courseType: string;
    description: string;
    place: string;
    date: string;
    certificateAvailable: boolean;
    certificateLink?: string;
    certificateImage?: string;
}

type CreateExperienceProps = {
    title: string;
    courseType: string;
    description: string;
    place?: string;
    date: string;
    certificateLink?: string;
    certificateImage?: string;
}

export const createExperience = (
    { title, courseType, place = Online, date, certificateImage, certificateLink, description }: CreateExperienceProps
): ExperienceType => {
    const certificateAvailable = certificateImage ? true : false

    return {
        id: crypto.randomUUID(),
        title,
        courseType,
        place,
        date,
        certificateAvailable,
        certificateImage,
        certificateLink,
        description,
    }
}