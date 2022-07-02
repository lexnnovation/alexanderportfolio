import React from "react";
import { MdMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center '>
      // bg-hero_bg bg-cover md:bg-left
      <div className='max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-2'>H!, I'm</h1>
          <h1 className='md:text-[5rem]  text-[#D92B04]'> Alexander Teye</h1>
          <h1>
            a <span className='text-[#D92B04]'>Front-end</span> Developer.
          </h1>
          <p className='text-gray-600 md:text-2xl'> Based in Accra, Ghana.</p>

          <p className='max-w-[90%] md:max-w-[70%] text-gray-600 py-4 m-auto md:text-lg'>
            I'm the front-end web developer who focuses on creating and
            designing cutting-edge digital experiences. At the moment, I'm
            concentrating on developing responsive front-end applications while
            studying back-end technologies.
          </p>
          <p className='pt-5 mb-4  uppercase text-sm tracking-widest text-[#D92B04]'>
            Let's Build something Awesome! 👨🏾‍💻
          </p>
          <div className='flex items-center justify-between max-w-xs m-auto py-4 '>
            <div className='rounded-full shadow-md  shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in-out duration-300 '>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/alex-larweh-5143b093/'
              >
                <FaLinkedinIn className='md:text-2xl' />
              </a>
            </div>
            <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300 '>
              <a target='_blank' href='https://twitter.com/Lexnnovation'>
                <FaTwitter className='md:text-2xl' />
              </a>
            </div>
            <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in-out duration-300 '>
              <a target='_blank' href='https://github.com/lexnnovation'>
                <FaGithub className='md:text-2xl' />
              </a>
            </div>
            <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-out duration-300 '>
              <a target='_blank' href='mailto:larwehtee1@gmail.com'>
                <MdMailOutline className='md:text-2xl' />
              </a>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <button className='mt-8 box-border hover:text-[#ffffff] md:py-4 md:px-14 py-2 px-8 hover:bg-gray-700 rounded-lg  mb-4 bg-[#D92B04] text-white ease-in-out duration-300 shadow-lg shadow-gray-400 mr-6'>
              <a href='/#skills'>View Skills</a>
            </button>
            <button className='mt-8 box-border hover:text-[#ffffff] md:py-4 md:px-14 py-2 px-8 hover:bg-gray-700 rounded-lg  mb-4 bg-[#D92B04] text-white ease-in-out duration-300 shadow-lg shadow-gray-400 ml-6'>
              <a href='/#portfolio'>View Projects</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
