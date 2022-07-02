import React from "react";
import property from "../public/assets/projects/property.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import cryptto from "../public/assets/projects/crypto.jpg";
import twitch from "../public/assets/projects/twitch.jpg";
import ProjectItems from "./ProjectItems";

const Portfolio = () => {
  return (
    <div
      id='portfolio'
      className='pt-[80px] flex justify-center w-full md:h-screen p-6 '
    >
      <div className='max-w-[1240px] mx-auto flex flex-col lg:pt-[80px]  justify-center h-full'>
        <p className='uppercase py-2 tracking-widest text-xl text-[#D92B04]'>
          My Portfolio
        </p>
        <h2 className='py-2'>Projects I have built</h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItems
            projectTitle='Property Finder App '
            projectBGImg={property}
            projectBuiltWith='React JS'
            projectUrl='/property'
          />
          <ProjectItems
            projectTitle='Netflix App'
            projectBGImg={netflixImg}
            projectBuiltWith='HTML, CSS, JavaScript'
            projectUrl='/netflix'
          />
          <ProjectItems
            projectTitle='Crypto App'
            projectBGImg={cryptto}
            projectBuiltWith='HTML, CSS, JavaScript, Solidity'
            projectUrl='/crypto'
          />
          <ProjectItems
            projectTitle='Twitch App'
            projectBGImg={twitch}
            projectBuiltWith='Next JS, Tailwind, MySQL'
            projectUrl='/twitch'
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
