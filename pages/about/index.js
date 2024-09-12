import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// icons
import { TbBrandCpp } from "react-icons/tb";
import {
  SiExpress,
  SiFirebase,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPrismic,
  SiRedux,
  SiRender,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
  FaJava,
} from "react-icons/fa";

import { SiNextdotjs, SiFramer } from "react-icons/si";

import CountUp from "react-countup";
//  data
const aboutData = [
  {
    info: [
      {
        title: "tech stack",
        icons: [
          <FaHtml5 />,
          <SiPrismic />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiTypescript />,
          <SiNetlify />,
          <TbBrandCpp />,
          <SiNextdotjs />,
          <SiMongodb />,
          <FaPython />,
          <SiFramer />,
          <SiVercel />,
          <SiRender />,
          <SiFirebase />,
          <SiJquery />,
          <SiRedux />,
          <SiTailwindcss />,
          <SiThreedotjs />,
          <SiVite />,
          <SiExpress />,
          <SiMysql />,
          <SiMongodb />,
          <FaJava />,
        ],
      },
    ],
  },
];

import Avatar from "../../components/Avatar.js";
import Circles from "../../components/Circles.js";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-40 text-center xl:text-left">
      <Circles />
      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className=" hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="sm:container sm:mx-auto mx-10 xs:mt-10 h-full flex flex-col items-center xl:flex-row gap-x-6 ">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center xl:justify-start md:items-center xl:items-start">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xs:text-[30px] h1 sm:text-[35px]"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificient designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-16 px-2 xl:px-0 xs:text-[13px] sm:text-[15px] lg:text-[17pxheader] mt-5"
          >
            Embarking on a journey into the digital realm just a year ago, I've
            rapidly evolved from a novice coder to an aspiring freelancer. Each
            line of code I write is a testament to my dedication and passion for
            web development.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-uto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:top-right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:top-right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col items-center justify-center xl:justify-start w-full xl:max-w-[48%] h-[200px]"
        >
          <div className="cursor-pointer flex gap-x-4 xl:gap-x-8 xl:mx-0 mb-4"></div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* Circular Icon Container */}
                  <div className="rounded-full p-4">
                    {item.icons?.map((icon, iconIndex) => {
                      // Define the number of icons and circle radius
                      const totalIcons = item.icons.length;
                      const radius = 220; // Adjust this radius for the circle size

                      // Calculate angle for each icon (in radians)
                      const angle = (iconIndex / totalIcons) * (2 * Math.PI);

                      // Calculate x and y positions based on angle and radius
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;

                      return (
                        <div
                          key={iconIndex}
                          className="absolute"
                          style={{
                            transform: `translate(${x}px, ${y}px)`,
                          }}
                        >
                          <div className="flex justify-center items-center w-12 h-12 rounded-full">
                            <div className="text-2xl text-white text-[30px]">
                              {icon}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
