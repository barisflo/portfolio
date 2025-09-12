import { projects } from '~/data/projects'
import type { Project } from '~/data/projects'

export const useProjects = () => {
  const { language } = useLanguage()

  const getProjects = (): Project[] => {
    return projects
  }

  const getProject = (id: string): Project | undefined => {
    return projects.find(project => project.id === id)
  }

  const getLocalizedDescription = (project: Project, long: boolean = false): string => {
    const descriptions = long ? project.longDescription : project.description
    return descriptions[language.value] || descriptions.en
  }

  return {
    getProjects,
    getProject,
    getLocalizedDescription
  }
}
