import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdMenu, MdClose, MdMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] ease-in-out duration-1000"
          : "fixed w-full h-20 z-[100] bg-[#ecf0f3]"
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 ml-2'>
        <div className='cursor-pointer flex justify-between max-w-[200px] lg:max-w-[250px]'>
          <Link href='/'>
            <Image src='/assets/navLogo1.png' alt='/' width='235' height='53' />
          </Link>
        </div>
        <div>
          <ul className='hidden md:flex mr-3 uppercase'>
            <Link href='/'>
              <li className='ml-10 text-sm  hover:text-[#D92B04]'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm  hover:text-[#D92B04]'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm  hover:text-[#D92B04]'>Skills</li>
            </Link>
            <Link href='/#portfolio'>
              <li className='ml-10 text-sm  hover:text-[#D92B04]'>Portfolio</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm  hover:text-[#D92B04]'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden mr-3'>
            <MdMenu size={40} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/50" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%]  sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500"
              : "fixed left-[-100%] blur-lg top-0 w-[75%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-1000"
          }
        >
          <div>
            <div className='flex w-full items-center justify-between '>
              <Image
                src='/assets/navLogo1.png'
                width='200'
                height='45'
                alt='/'
              />
              <div
                onClick={handleNav}
                className='hover:bg-[#D92B04]  hover:text-[#fff]   cursor-pointer hover:scale-110 ease-in-out  duration-500 rounded-full shadow-md shadow-gray-400 p-3'
              >
                <MdClose size={30} />
              </div>
            </div>
            <div className=' border-b border-gray-300 my-4'>
              <p className='py-4 text-lg text-center'>
                Let's Build something Awesome! 👨🏾‍💻
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-md'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-md'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-md'>
                  Skills
                </li>
              </Link>
              <Link href='/#portfolio'>
                <li onClick={() => setNav(false)} className='py-4 text-md'>
                  Portfolio
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-md'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className=' uppercase tracking-widest  text-md text-[#D92B04]'>
                Let's connect
              </p>
              <div className='flex items-center justify-between w-full my-4 sm:w-[80%]'>
                <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300 '>
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/in/alex-larweh-5143b093/'
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300 '>
                  <a target='_blank' href='https://twitter.com/Lexnnovation'>
                    <FaTwitter />
                  </a>
                </div>
                <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300 '>
                  <a target='_blank' href='https://github.com/lexnnovation'>
                    <FaGithub />
                  </a>
                </div>
                <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300 '>
                  <a target='_blank' href='mailto:larwehtee1@gmail.com'>
                    <MdMailOutline />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
