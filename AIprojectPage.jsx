import React from 'react'
import AIprojectCard from './AIprojectCard'
import AI_projects from '../../aiProjects.js'
const AIprojectPage = () => {
  return (
    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 px-5 gap-3 justify-center items-center h-full w-full py-10'>
        {
          AI_projects.map((project) => <AIprojectCard key={project.id} {...project}/>)
        }
    </div>
  )
}

export default AIprojectPage
