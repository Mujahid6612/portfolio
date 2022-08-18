import React from 'react';
import keykiImg from '../public/assets/projects/keyki2.png';
import refillImg from '../public/assets/projects/refill.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full px-3'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#00df9a]'>
          Projects
        </p>
        <h2 className='py-4 text-white'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Ecommerce Video Base App'
            backgroundImg={keykiImg}
            projectUrl='/keyki'
          />
          <ProjectItem
            title='Ecommerce medical App'
            backgroundImg={refillImg}
            projectUrl='/refill'
          />
       
        </div>
      </div>
    </div>
  );
};

export default Projects;
