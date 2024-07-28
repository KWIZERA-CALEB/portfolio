import React from 'react'
import SocialMediaLinks from '../atoms/Links'


const About = () => {
  return (
    <div className='flex justify-center items-center pt-[90px] pb-[60px]'>
      <div className="flex flex-col items-center space-y-[30px] md:space-x-[60px] justify-center md:flex-row">
          <div>
              <img src="/images/yoo.jpg" className='w-[200px] h-[200px] rounded-[50%] object-cover object-center outline outline-offset-8 outline-sky-500 cursor-pointer image md:w-[300px] md:h-[300px] md:rounded-[30px]' alt="Image of Owner" />
          </div>
          <div>
            <h3 className="font-bold custom text-[32px] text-slate-800 text-center md:text-start">About Page</h3>
            <h3 className="text-gray-300 pr-[15px] pl-[15px] select-none font-md text-[18px] text-center md:text-start">
            Passionate and skilled <span className="bg-gradient bg-clip-text text-transparent font-bold">Backend Developer</span> with 2 years of <br></br>hands-on experience in developing robust<br></br> web applications using modern technologies. Proficient in PHP, Laravel, Python, SQL, MongoDB, Django,<br></br> ReactJS, Node.js, Tailwind CSS, and JavaScript.<br></br> 
            Known for creating user-friendly interfaces and efficient backend solutions.
            </h3>
            <div className="hidden w-[220px] justify-start md:flex md:justify-center mt-[60px]">
                <SocialMediaLinks />
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
