import { cloudinary, githubHost, githubRepos, imagesHost } from "../constants"

export type Project = {
    id: string,
    title: string,
    description: string,
    icons: any,
    imagePath: string,
    repository: string,
    deploy: string,
    googlePlayLink?: string
}

type CreateProjectProps = {
    title: string,
    description: string,
    icons: any,
    deploy?: string,
    imagePath?: string,
    googlePlayLink?: string
}

export const createProject = (
    { title, description, icons, deploy, imagePath, googlePlayLink }: CreateProjectProps): Project => {

    const repoTitle = title.replaceAll(' ', '-')
    const deployUrl = deploy ? deploy : `${githubHost}/${repoTitle}/`

    return {
        id: crypto.randomUUID(),
        title,
        description,
        icons,
        imagePath: imagePath ? `${cloudinary}/${imagePath}` : `${imagesHost}/${repoTitle}.png`,
        repository: `${githubRepos}/${repoTitle}`,
        deploy: deployUrl,
        googlePlayLink,
    }
}