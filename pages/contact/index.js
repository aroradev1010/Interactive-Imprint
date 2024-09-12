import Circles from "../../components/Circles.js";
import ParticlesContainer from "../../components/ParticlesContainer.js";
import { fadeIn } from "../../variants.js";
import { motion } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="relative">
      <div className="absolute z-0 h-full w-full top-3em">
        <ParticlesContainer />
      </div>
      <div className="h-full bg-primary/30 relative z-1 ">
        <div className="sm:container sm:mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full xs:mx-10">
          {/* text and form */}
          <div className="flex flex-col w-full max-w-[700px]  ">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              Lets <span className="text-accent">Connect.</span>
            </motion.h2>
            <motion.form
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              {/* group */}
              <div className="flex gap-x-6 w-full">
                {/* input group */}
                <input type="text" placeholder="name" className="input" />
                <input type="text" placeholder="email" className="input" />
              </div>
              <input type="text" placeholder="subject" className="input" />
              <textarea placeholder="message" className="textarea "></textarea>
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let's Talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transitio-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
