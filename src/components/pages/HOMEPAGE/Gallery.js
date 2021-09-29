import React from 'react'
import './style.css' 
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from '../../../data';


export default function Gallery() {
    return (
        <>
            <div className=" works flex flex-col items-center w-full mb-20">
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-5xl font-medium title-font mb-4 text-white text-center">
              What I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
              Some of my projects :
            </p>
          </div>
          <div className="main">
        <div className="portfolio-grid">
        {projects.map((project) => (
                          <div class="flip-card" key={project.id}>
                          <div class="flip-card-inner">
                            <div class="flip-card-front">
                              <p>x</p>
                            </div>
                            <div class="flip-card-back">
                            {/* <h2 className=" gallery text-xl title-font font-medium mb-1">
                             {project.subtitle}
                             </h2> */}
                             <h1 className="title-font text-2xl font-medium text-white mb-3">
                                              {project.title}
                              </h1>
                               <p className="text-lg ">{project.description}</p>
                               <p className="p-4"><a className=" link" href={project.link} target="_blank" rel="noreferrer" 
                               >SEE PROJECT 
                               </a></p>
                            </div>
                          </div>
                        </div> 
            ))}

</div>
</div>
</>
    )
}
