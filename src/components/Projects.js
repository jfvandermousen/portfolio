import React from 'react'

import { projects } from '../data';
import Footer from './Footer';


export default function Projects() {
    return (
        <div>
        <section id="projects" className="text-gray-400  body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-0 md:mb-20">

        <h1 className="text-4xl  font-medium title-font mb-8 text-white">
          All projects
        </h1>

      </div>
      <div className="flex flex-wrap -m-4">
        {projects.map((project) => (
          <a
            href={project.link} target="_blank"
            rel="noreferrer"
            key={project.id}
            className="sm:w-1/2 w-100 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full project-h object-contain object-center"
                src={project.image}
              />
              <div className="px-4 py-10  project-h relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-2xlfont-medium text-white mb-3">
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
        <Footer />
    </div>
    )
}
