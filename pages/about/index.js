import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import Avatar from "../../components/Avatar.js";
import Circles from "../../components/Circles.js";
import { IconCloudDemo } from "@/components/IconCloudDemo";

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
        className=" hidden xl:flex absolute bottom-0 -left-[370px] z-0"
      >
        <Avatar />
      </motion.div>
      <div className="sm:container sm:mx-auto mx-10 xs:mt-10 h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center xl:justify-start md:items-center xl:items-start">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xs:text-[30px] h1 sm:text-[35px] z-20"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificient designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-16 px-2 xl:px-0 xs:text-[13px] sm:text-[15px] lg:text-[17pxheader] mt-5 z-20"
          >
            Embarking on a journey into the digital realm just a year ago, I&apos;ve
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
          className="flex items-center justify-center xl:justify-start w-full xl:max-w-[48%] h-[500px]"
        >
          <div className="py-2  flex flex-col gap-y-2 items-center justify-center">
            <IconCloudDemo />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
