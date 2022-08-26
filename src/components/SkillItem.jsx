import React from 'react'

const SkillItem = ({skillname, skillLogo}) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={skillLogo} alt={`{${skillname} icon}`} />
        <p className="my-4">{skillname}</p>
    </div>
  )
}

export default SkillItem