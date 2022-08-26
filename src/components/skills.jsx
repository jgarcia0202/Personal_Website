import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-cyan-400 ">Skills</p>
                <p className="py-4">// These are the technologies I've Worked With</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <SkillItem skillname='HTML' skillLogo={HTML}/>
                <SkillItem skillname='CSS' skillLogo={CSS}/>
                <SkillItem skillname='JavaScript' skillLogo={JavaScript}/>
                <SkillItem skillname='React' skillLogo={ReactImg}/>
                <SkillItem skillname='Github' skillLogo={GitHub}/>
                <SkillItem skillname='Tailwind' skillLogo={Tailwind}/>
            </div>
        </div>
    </div>
  )
}

export default Skills