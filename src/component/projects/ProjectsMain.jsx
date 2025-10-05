import React from 'react'
import  ProjectsText  from './ProjectsText'
import  SingleProjects  from './SingleProjects'


const projects=[{
    name:"PortFolio",
    description:"this project is maded in react framwork",
    align:"right",
    link:"#",
    image: require("../../image/website-img-1.jpg"),
},

{
    name:"PortFolio",
    description:"this project is maded in react framwordk",
    align:"left",
    link:"#",
    image: require("../../image/website-img-2.webp")

},
{
    name:"PortFolio",
    description:"this project is maded in react framwordk",
    align:"right",
    link:"#",
    image:require("../../image/website-img-3.jpg"),
},
{
    name:"PortFolio",
    description:"this project is maded in react framwordk",
    align:"left",
    link:"#",
    image:require("../../image/website-img-4.jpg"),
}]
export default function ProjectsMain() {

  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <ProjectsText/>
        <div className="flex flex-col gap20 max-w-[1200px] mx-auto mt-12">
            {projects.map((e, index) => (
                <SingleProjects key={index} name={e.name} description={e.description} align={e.align} link={e.link} image={e.image} />
            ))}
        </div>
    </div>
  )
}
