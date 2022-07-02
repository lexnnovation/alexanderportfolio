import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItems = ({
  projectTitle,
  projectBGImg,
  projectBuiltWith,
  projectUrl,
}) => {
  return (
    <diiv className='relative flex items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#D92B04]  to-[#780e0e] '>
      <Image
        src={projectBGImg}
        alt='/ '
        className='rounded-xl group-hover:opacity-10  ease-in-out duration-1000'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-[white] text-2xl tracking-wider text-center'>
          {projectTitle}
        </h3>
        <p className='pb-4 text-[white] text-center'>{projectBuiltWith}</p>
        <div className='flex  flex-col-2 justify-evenly gap-3'>
          <Link href={projectUrl}>
            <p className='text-center py-2 px-5 sm:py-4 sm:px-8 sm:text-lg bg-white rounded-xl cursor-pointer'>
              View Project
            </p>
          </Link>
        </div>
      </div>
    </diiv>
  );
};

export default ProjectItems;
