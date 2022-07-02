import React from "react";
import { MdMailOutline } from "react-icons/md";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaHandshake,
  FaAngleDoubleUp,
} from "react-icons/fa";
import { Input } from "postcss";
import Link from "next/link";

const Contact = () => {
  return (
    <div id='contact' className=' flex justify-center w-full lg:h-screen p-6'>
      <div className='max-w-[1240px] mx-auto pt-16 w-full'>
        <p className='uppercase py-2 tracking-widest text-xl text-[#D92B04] '>
          My Contact
        </p>
        <h2 className='py-4'>Holla at me!</h2>
        <div className='grid lg:grid-cols-4 gap-8 '>
          <div className='bg-white col-span-2 lg:col-span-2 w-full shadow-xl h-min shadow-gray-400 rounded-xl p-4'>
            <p className='text-center text-md md:text-xl'>
              I am available for full-time and freelance positions like
              Front-end Developer, JavaScript Developer, UI/UX Designer, Content
              Editor, HTML Email Developer.
            </p>
            <div className='flex items-center justify-center'>
              <FaHandshake size={100} className=' text-[#D92B04]' />
            </div>

            <p className='text-center text-[#D92B04] pt-2'>LET'S CONNECT</p>

            <div className='flex items-center justify-between max-w-xs m-auto py-4 '>
              <div className='rounded-full shadow-md  shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in-out duration-300 '>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/alex-larweh-5143b093/'
                >
                  <FaLinkedinIn className='md:text-2xl ' />
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
                  <MdMailOutline className='md:text-2xl ' />
                </a>
              </div>
            </div>
          </div>
          <div className='bg-gradient-to-r from-[#D92B04]  to-[#780e0e] col-span-2 lg:col-span-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div>
              <p className='text-sm md:text-2xl pb-4 text-white text-center uppercase '>
                Please submit the form below if you feel like going old-school
                😂😂😂
              </p>
              <form>
                <div className='flex flex-col'>
                  <label className='text-white  text-md py-2 active:border-none'>
                    Name
                  </label>
                  <input
                    className='flex rounded-xl  p-1 '
                    type='text'
                    placeholder='Your Full Name'
                  ></input>
                </div>
                <div className='flex flex-col'>
                  <label className='text-white  text-md py-2'>
                    Phone Number
                  </label>
                  <input
                    className='flex rounded-xl  p-1 '
                    type='tel'
                    placeholder='(+1) 123 456 7890'
                  ></input>
                </div>
                <div className='flex flex-col'>
                  <label className=' text-white text-md py-2'>Email</label>
                  <input
                    className='flex rounded-xl  p-1 '
                    type='email'
                    placeholder='email@example.com'
                  ></input>
                </div>
                <div className='flex flex-col'>
                  <label className='text-white  text-md py-2'>Subject</label>
                  <input
                    className='flex  rounded-xl  p-1 '
                    type='text'
                    placeholder="Eg. Let's collaborate on a project"
                  ></input>
                </div>
                <div className='flex flex-col'>
                  <label className='text-white  text-md py-2'>Message</label>
                  <textarea
                    className='flex  rounded-xl  p-1 '
                    type='textarea'
                    placeholder='Enter your message'
                    rows='6'
                  ></textarea>
                </div>
                <button className='text-[#D92B04] w-full p-4 bg-white rounded-xl mt-6 mb-4 hover:bg-gray-700 hover:text-white ease-in-out duration-500 '>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-16'>
          <Link href='/'>
            <div className='hover:bg-[#D92B04] text-[#D92B04]  hover:text-[#fff] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in-out  duration-1000'>
              <FaAngleDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contact;
