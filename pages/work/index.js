import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb.js";
import Circles from "../../components/Circles.js";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="flex justify-center items-center">
      <h2
        style={{ transform: "translate(-50%, -50%)" }}
        className="absolute text-[150px] h-[100%] w-[100%] top-[65%] left-[55%] opacity-[0.03] leading-loose md:text-[250px] md:top-[55%] xs:text-[150px] xs:top-[55%] sm:text-[200px] sm:top-[40%]  md:leading-normal lg:text-[275px] xl:text-[300px] xl:top-[105%]"
      >
        Projects
      </h2>
      <div className="h-full bg-primary/30 py-36 flex items-center justify-center w-full ">
        <Circles />
        <div className="xs:w-[500px] sm:w-full sm:h-full sm:container sm:mx-auto">
          <div className="flex gap-x-8 ">
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h-full w-full flex items-center justify-center"
            >
              {/* slider */}

              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </div>
  );
};

export default Work;
