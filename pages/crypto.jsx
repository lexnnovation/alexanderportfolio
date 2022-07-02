import Image from "next/image";
import React from "react";
import cryptto from "../public/assets/projects/crypto.jpg";
import {
  MdOutlineRadioButtonChecked,
  MdKeyboardBackspace,
} from "react-icons/md";
import Link from "next/link";

const crypto = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-[#641515]/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cryptto}
          alt='/'
        />
        <div className='pl-6 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%]  translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Crypto Rank App</h2>
          <h3>HTML | CSS | JavaScript | Solidity</h3>
        </div>
      </div>
      <dv className=' max-w-[1240px] m-auto  lg:grid grid-cols-5 gap-8 pt-8 p-2 '>
        <div className='pl-6 col-span-4'>
          <p className='uppercase tracking-widest text-xl text-[#D92B04]'>
            Project
          </p>
          <h2>Overview</h2>
          <p>
            This project was build using ReactJS and is hosted on firebase. The
            app enables its users to search for any proiperty of their choicehe
            app enables its users to search for any proiperty of their choicehe
            app enables its users to search for any proiperty of their choicehe
            app enables its users to search for any proiperty of their choicehe
            app enables its users to search for any proiperty of their choicehe
          </p>
          <button className='mt-8 box-border hover:text-[#D92B04] py-2 px-8 hover:bg-white rounded-lg  mb-4 bg-[#D92B04] text-white ease-in-out duration-300 shadow-lg shadow-gray-400 mr-8'>
            Dev Code
          </button>
          <button className='hover:text-[#D92B04] py-2 px-8 hover:bg-white rounded-lg mt-6 mb-4 bg-[#D92B04] text-white ease-in-out duration-300  shadow-lg shadow-gray-400'>
            Live Demo
          </button>
        </div>
        <div className='md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <h4 className='text-[#D92B04] pb-2'>Technologies</h4>
            <div className='grid grid-cols-3 lg:grid-cols-1'>
              <p className='flex md:items-center pb-2'>
                <MdOutlineRadioButtonChecked className='pr-1 text-2xl' />
                HTML
              </p>
              <p className='flex md:items-center pb-2'>
                <MdOutlineRadioButtonChecked className='pr-1 text-2xl' />
                CSS
              </p>
              <p className='flex md:items-center pb-2'>
                <MdOutlineRadioButtonChecked className='pr-1 text-2xl' />
                JavaScript
              </p>
              <p className='flex md:items-center pb-2'>
                <MdOutlineRadioButtonChecked className='pr-1 text-2xl' />
                Solidity
              </p>
            </div>
          </div>
        </div>
        <Link href='/#portfolio'>
          <p className='m-8 text-[#D92B04]  hover:underline cursor-pointer flex items-center'>
            <MdKeyboardBackspace />
            Back
          </p>
        </Link>
      </dv>
    </div>
  );
};

export default crypto;
