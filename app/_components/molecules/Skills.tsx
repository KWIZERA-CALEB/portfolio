import React from 'react'

interface Types {
  image: any,
  label: any
}

const Skills = () => {
  const frontend_skills: Types[] = [
      {
        image:"/images/react.png",
        label:"Reactjs"
      },
      {
        image:"/images/tailwind.svg",
        label:"Tailwindcss"
      },
      {
        image:"/images/next.png",
        label:"Nextjs"
      },
      {
        image:"/images/html.svg",
        label:"HTML"
      },
      {
        image:"/images/css.svg",
        label:"CSS"
      },
      {
        image:"/images/ts.svg",
        label:"TypeScript"
      },
      {
        image:"/images/jquery.png",
        label:"Jquery"
      }
  ]

  const backend_skills: Types[] = [
    {
      image:"/images/php.svg",
      label:"PHP"
    },
    {
      image:"/images/laravel.png",
      label:"Laravel"
    },
    {
      image:"/images/python.jfif",
      label:"Python"
    },
    {
      image:"/images/django.png",
      label:"Django"
    },
    {
      image:"/images/rest-framework.png",
      label:"Django Rest Framework"
    },
    {
      image:"/images/node.svg",
      label:"Nodejs"
    },
    {
      image:"/images/express.png",
      label:"Expressjs"
    },
    {
      image:"/images/sql.jfif",
      label:"SQL"
    },
  ]

  const other_skills: Types[] = [
    {
      image:"/images/blender.svg",
      label:"Blender"
    },
    {
      image:"/images/figma.svg",
      label:"Figma"
    },
    {
      image:"/images/pytorch.png",
      label:"Pytorch"
    },
    {
      image:"/images/git.svg",
      label:"Git"
    }
  ]

  const renderedFrontendSkills = frontend_skills.map((frontend_skill, index)=> (
      <div key={index} className="bg-slate-700 p-[15px] rounded-[8px] flex flex-row items-center space-x-[20px]">
          <img src={frontend_skill.image} className='w-[30px] h-[30px] rounded-[6px] object-cover object-center' alt="Skill image" />
          <h3 className="text-gray-300 pr-[15px] pl-[15px] select-none font-md text-[18px] text-center md:text-start">{frontend_skill.label}</h3>
      </div>
  ))

  const renderedBackendSkills = backend_skills.map((backend_skill, index)=> (
    <div key={index} className="bg-slate-700 p-[15px] rounded-[8px] flex flex-row items-center space-x-[20px]">
        <img src={backend_skill.image} className='w-[30px] h-[30px] rounded-[6px] object-cover object-center' alt="Skill image" />
        <h3 className="text-gray-300 pr-[15px] pl-[15px] select-none font-md text-[18px] text-center md:text-start">{backend_skill.label}</h3>
    </div>
  ))

  const renderedOtherSkills = other_skills.map((other_skill, index)=> (
    <div key={index} className="bg-slate-700 p-[15px] rounded-[8px] flex flex-row items-center space-x-[20px]">
        <img src={other_skill.image} className='w-[30px] h-[30px] rounded-[6px] object-cover object-center' alt="Skill image" />
        <h3 className="text-gray-300 pr-[15px] pl-[15px] select-none font-md text-[18px] text-center md:text-start">{other_skill.label}</h3>
    </div>
  ))

  return (
    <div className='pt-[60px] pb-[60px] pr-[12px] pl-[12px] md:pr-[70px] md:pl-[70px]'>
      <div className="mb-[40px]">
        <h3 className="font-bold custom text-[25px] text-slate-800 text-center">Frontend</h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {renderedFrontendSkills}
        </div>
      </div>

      <div className="mb-[40px]">
        <h3 className="font-bold custom text-[25px] text-slate-800 text-center">Backend</h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {renderedBackendSkills}
        </div>
      </div>

      <div>
        <h3 className="font-bold custom text-[25px] text-slate-800 text-center">Others</h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {renderedOtherSkills}
        </div>
      </div>
      
    </div>
  )
}

export default Skills
