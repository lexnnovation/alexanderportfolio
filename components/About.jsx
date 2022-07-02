import React from "react";
import Image from "next/image";
import alexImage from "../public/assets/alexander_teye_web_developer.jpg";

const About = () => {
  return (
    <div
      id='about'
      className=' w-full h-screen p-6 flex justify-center pt-[80px]'
    >
      <div className='max-w-[1240px] m-auto  md:grid grid-cols-3 gap-8'>
        <div className=' col-span-2'>
          <p className='uppercase py-2 tracking-widest text-xl text-[#D92B04]'>
            About Me
          </p>
          <h2 className='py-2'>Nice e-meeting you! Get to know me.</h2>
          <p className='pb-4 md:w-[85%] text-justify'>
            I'm a front-end web developer who focuses on creating and designing
            engaging digital experiences. At the moment, I'm concentrating on
            developing responsive front-end applications while studying back-end
            technologies. Coming from a back ground of Graphic Design with an
            extensive experience in Visual Design, I endeavour to connect the
            dots between Design and Code.
          </p>
        </div>
        <div className='w-full h-auto border-8 border-[#D92B04]  shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-110 easy-in-out duration-500'>
          <Image className='rounded-full' src={alexImage} alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
