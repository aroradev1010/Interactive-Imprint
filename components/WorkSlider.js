import { motion } from "framer-motion";
const workSlider = {
  slides: [
    {
      videos: [
        {
          title: "title",
          path: "/project1.mp4",
          link: "https://thunderous-pegasus-3b214e.netlify.app/",
        },
      ],
    },
    {
      videos: [
        {
          title: "title",
          path: "/project2.mp4",
          link: "https://65b1a587b273e30922de7c25--stellar-sunflower-a5ba44.netlify.app/",
        },
      ],
    },
    {
      videos: [
        {
          title: "title",
          path: "/project3.mp4",
          link: "https://devarora.vercel.app/",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";

import { Pagination, Autoplay } from "swiper";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

// data

const WorkSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      grabCursor={true}
      spaceBetween={10}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="sm:h-[480px] xs:h-[450px] md:h-[530px] w-[100%] "
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className="">
            <div className="grid grid-cols-1 grid-rows-1 gap-4 cursor-pointer h-full px-10 ">
              {slide.videos.map((video, index) => {
                return (
                  <motion.div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group bg-yellow "
                    whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
                  >
                    <div
                      className="flex items-center justify-center relative overflow-hidden group "
                      key={index}
                    >
                      <video
                        src={video.path}
                        loop
                        autoPlay
                        muted
                        width={750}
                        height={400}
                        alt=""
                        className="slideimg rounded-[40px]  "
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-10 group-hover:opacity-80 transition-all duration-700 rounded-[40px]"></div>
                      {/* title  */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-20 group-hover:xl:-translate-y-20 transition-all duration-500">
                        <Link target="_blank" href={video.link}>
                          <div className=" flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                            {/* title part 1 */}
                            <div className="delay-100">LIVE</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-275">
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
