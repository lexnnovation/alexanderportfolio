import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
} from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";

const Skills = () => {
  return (
    <div id='skills' className=' w-full lg:h-screen p-6 pt-[80px]'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full '>
        <p className='uppercase py-2 tracking-widest text-xl text-[#D92B04]'>
          My Skills
        </p>
        <h2 className='py-4'>Technologies I have worked with.</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>
          <div className='hover:text-white text-[#D92B04] py-6 shadow-xl rounded-2xl hover:scale-110 ease-in-out duration-500 group hover:bg-[#D92B04] '>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <AiFillHtml5 className='text-[100px] text-[#D92B04] group-hover:text-[#ecf0f3]' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML / CSS</h3>
              </div>
            </div>
          </div>
          <div className='hover:text-white py-6 shadow-xl rounded-2xl hover:scale-110 ease-in-out duration-500 group hover:bg-[#D92B04] '>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiJavascript className='text-[100px] text-[#D92B04] group-hover:text-[#ecf0f3]' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='hover:text-white text-[#D92B04] py-6 shadow-xl rounded-2xl hover:scale-110 ease-in-out duration-500 group hover:bg-[#D92B04] '>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiReact className='text-[100px] text-[#D92B04] group-hover:text-[#ecf0f3]' />
              </div>
              <div className='flex flex-col items-center justify-center '>
                <h3>React JS</h3>
              </div>
            </div>
          </div>
          <div className='hover:text-white py-6 shadow-xl rounded-2xl hover:scale-110 ease-in-out duration-500 group hover:bg-[#D92B04] '>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiNextdotjs className='text-[100px] text-[#D92B04] group-hover:text-[#ecf0f3]' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next JS</h3>
              </div>
            </div>
          </div>
          <div className='hover:text-white py-6 shadow-xl rounded-2xl hover:scale-110 ease-in-out duration-500 group hover:bg-[#D92B04] '>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiTailwindcss className='text-[100px] text-[#D92B04] group-hover:text-[#ecf0f3]' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className='hover:text-white text-[#D92B04] py-6 shadow-xl rounded-2xl hover:scale-110 ease-in-out duration-500 group hover:bg-[#D92B04] '>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <FaGitSquare className='text-[100px] text-[#D92B04] group-hover:text-[#ecf0f3]' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className='hover:text-white py-6 shadow-xl rounded-2xl hover:scale-110 ease-in-out duration-500 group hover:bg-[#D92B04] '>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiAdobephotoshop className='text-[100px] text-[#D92B04] group-hover:text-[#ecf0f3]' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PhotoShop</h3>
              </div>
            </div>
          </div>
          <div className='hover:text-white text-[#D92B04] py-6 shadow-xl rounded-2xl hover:scale-110 ease-in-out duration-500 group hover:bg-[#D92B04] '>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <CgFigma className='text-[100px]  group-hover:text-[#ecf0f3]' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>Figma</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
