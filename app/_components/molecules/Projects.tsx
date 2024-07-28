import React from 'react'
import Link from "next/link"

interface Types {
  image: any,
  project_name: string,
  tech_stack: string,
  link: any
}

const Projects = () => {

  const projects: Types[] = [
    {
      image: "/images/estate.png",
      project_name:"Ben Estate",
      tech_stack: "PHP & HTML & Tailwindcss",
      link: "http://benestate.infinityfreeapp.com/"
    },
    {
      image: "/images/todoment.png",
      project_name:"Todo Ment",
      tech_stack: "Reactjs & Mysql & Django",
      link: "https://todoment.vercel.app/"
    },
    {
      image: "/images/placeholder.png",
      project_name:"Gilles",
      tech_stack: "Reactjs & Nodejs & Mongodb",
      link: ""
    },
    {
      image: "/images/placeholder.png",
      project_name:"Mwalimu.ai",
      tech_stack: "Reactjs & Django & Mysql",
      link: ""
    },
    {
      image: "/images/placeholder.png",
      project_name:"React Shop",
      tech_stack: "Reactjs & Laravel & Mysql",
      link: ""
    },
    {
      image: "/images/placeholder.png",
      project_name:"Tour",
      tech_stack: "Nextjs",
      link: ""
    },
    {
      image: "/images/model.png",
      project_name:"Rough Face Model",
      tech_stack: "Blender",
      link: ""
    },
    {
      image: "/images/files-dashboard.jpg",
      project_name:"Files Dashboard",
      tech_stack: "Figma",
      link: ""
    }
  ]

  const renderedProjects = projects.map((project, index)=> (
      <div key={index} className="p-[30px] border-[2px] border-solid border-slate-800 cursor-pointer hover:border-sky-500 rounded-[6px] bg-black">
          <div className="h-[250px] mb-[20px]">
            <Link href={project.link}>
              <img src={project.image} className="w-full h-full object-cover object-center rounded-[6px]" alt="Project Image" />
            </Link>
          </div>
          <div>
              <h3 className="text-gray-300 pr-[15px] pl-[15px] select-none font-md text-[18px] text-start md:text-start">{project.project_name}</h3>
              <p className="pr-[15px] pl-[15px] text-sky-500">{project.tech_stack}</p>
          </div>
      </div>
  ))


  return (
    <div className='pt-[40px] pb-[60px] pr-[12px] pl-[12px] md:pr-[70px] md:pl-[70px]'>
      <h3 className="font-bold custom text-[32px] text-slate-800 text-center">My Projects</h3>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {renderedProjects}
      </div>
    </div>
  )
}

export default Projects
