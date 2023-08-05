//Global Imports
import Image from "next/image";
import { motion } from "framer-motion";

//Local Imports
import { fadeIn } from "../variants";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* txt */}
      <div>
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h1">
            Tranforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality!</span>
          </h1>
          {/* subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb10 xl:mb-16">
            Lorem ipsum dolor shiver blop and adisciptin eitl. Itacue nostrum
            erosh vero, tenetar voluptatem nulla aut esperantor dolores ut.
          </p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/* image */}
      <div>image</div>
    </div>
  );
};

export default Home;
