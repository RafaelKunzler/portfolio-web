/* eslint-disable react/prop-types */

import { Badge } from "@/components/ui/badge"

import { BsGithub, BsWindowFullscreen } from 'react-icons/bs'

const ProjectRight = (props) => {
  return (
    <div className="w-full py-20 flex border-b-2 gap-20">
        
        <div className="flex flex-col gap-8">
            <h1 className='text-4xl font-extrabold'>{props.name}</h1>
            <p className='text-muted-foreground'>{props.description}</p>
            <div className="flex gap-6">
                <a href={props.github} target='_blank' rel="noreferrer"><BsGithub className='w-6 h-6 hover:text-primary' /></a>
                <a href={props.url} target='_blank' rel="noreferrer"><BsWindowFullscreen className='w-6 h-6 hover:text-primary'/></a>
            </div>
            <ul className="flex flex-wrap gap-4 ">
                { props.badge && props.badge.map( (badge) => 
                    <li key={badge}><Badge>{badge}</Badge></li>
                )}

            </ul>
        </div>

        <img src={props.image} alt="image of the project" className="w-1/2 border-2 hover:scale-125" />
    </div>
  )
}

export default ProjectRight