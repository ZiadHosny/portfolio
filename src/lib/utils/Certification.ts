import { Online } from "../constants"

export type CertificationType = {
    id?: string,
    title: string;
    courseType: string;
    place?: string;
    date: string;
    certificateLink?: string;
    certificateAvailable: boolean;
    certificateImage?: string;
}

type createCertificationProps = {
    title: string;
    courseType: string;
    place?: string;
    date: string;
    certificateLink?: string;
    certificateImage?: string;
}

export const createCertification = (
    { title, courseType, place = Online, date, certificateImage, certificateLink }: createCertificationProps
): CertificationType => {
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
    }
}
