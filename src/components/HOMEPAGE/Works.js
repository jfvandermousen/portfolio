import React from 'react';
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from '../../data';

export default function Works() {
    return (
        <div>
            <section id="projects" className="text-gray-400  body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className=" works flex flex-col w-full mb-20">
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-5xl font-medium title-font mb-4 text-white">
              What I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-4">
              Some of my projects :
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link} target="_blank"
                rel="noreferrer"
                key={project.id}
                className="sm:w-1/2 w-100 p-4">
                <div className=" flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 project-h w-full  object-contain object-center"
                    src={project.image}
                  />
                  <div className=" project-h  px-4 py-5 relative z-10 project-h border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-2xl font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="text-lg leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
            
        </div>
    )
}
