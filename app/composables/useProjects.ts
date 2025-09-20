import { projects } from '~/data/projects'
import type { Project } from '~/data/projects'

export const useProjects = () => {
  const { language } = useLanguage()

  const getProjects = (): Project[] => {
    return projects.sort((a, b) => {
      // Define category priority order
      const categoryOrder = ['Web Development', 'Games', 'Content Creation']
      const aIndex = categoryOrder.indexOf(a.category)
      const bIndex = categoryOrder.indexOf(b.category)
      
      // First sort by category priority
      if (aIndex !== bIndex) {
        return aIndex - bIndex
      }
      // Then sort by year (newest first)
      return parseInt(b.year) - parseInt(a.year)
    })
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
