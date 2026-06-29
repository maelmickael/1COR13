'use client';

import React from 'react';
import { behanceProjects } from '../data/behanceProjects';

const Realise = () => {

    const projects = behanceProjects;

     const categorys = [
        { id: 1, name: 'All' },
        { id: 2, name: 'Motion Studio' },
        { id: 3, name: 'Brand Studio' },
        { id: 4, name: 'Digital Studio' },
        { id: 5, name: 'Editing Studio' },
    ];

    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    
    <>
    
        <div className="flex items-center justify-center gap-3">
          {categorys.map((category) => (
            <button
              className={`cursor-pointer uppercase text-[12px] ${
                category.name === 'All'
                  ? 'bg-[#FF3300] text-white px-6 py-1'
                  : selectedCategory === category.name
                    ? 'bg-[#FF3300] text-white border-[#FF3300] px-4 py-1'
                    : 'border-1 border-[#0E1C2C] px-4 py-1 text-[#0B253C] hover:bg-[#FF3300] hover:text-white hover:border-[#FF3300] transition-colors duration-200'
              }`}
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:gap-3 auto-rows-[220px] sm:auto-rows-[240px] lg:auto-rows-[280px] grid-flow-dense mb-32">
          {filteredProjects.map((project) => {
            const sizeClass = project.size === 'wide' ? 'sm:col-span-2' : project.size === 'tall' ? 'row-span-2' : '';

            return (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className={`project-card block group relative overflow-hidden border border-[#0E1C2C]/10 bg-white h-full ${sizeClass}`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-transparent transition duration-150 delay-75 group-hover:bg-black group-hover:text-white group-hover:opacity-60">
                    <h2 className="w-[200px] text-center text-[12px]">{project.title}</h2>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
    
    </>

  )
}

export default Realise