import { Online, cloudinary, githubHost, githubRepos, imagesHost } from "../constants"

export type Certification = {
    id?: string,
    title: string;
    courseType: string;
    description?: string;
    place?: string;
    date: string;
    certificateLink?: string;
    certificateAvailable: boolean;
    certificateImage?: string;
}

type createCertificationProps = {
    title: string;
    courseType: string;
    description?: string;
    place?: string;
    date: string;
    certificateLink?: string;
    certificateImage?: string;
}

export const createCertification = (
    { title, courseType, place = Online, date, certificateImage, certificateLink, description }: createCertificationProps
): Certification => {
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
