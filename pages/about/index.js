import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
  FaFlask,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiPostgresql,
} from "react-icons/si";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import CountUp from "react-countup";


export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front End",
        icons: [
          // eslint-disable-next-line react/jsx-key
          <FaHtml5 />,
          // eslint-disable-next-line react/jsx-key
          <FaCss3 />,
          // eslint-disable-next-line react/jsx-key
          <FaJs />,
          // eslint-disable-next-line react/jsx-key
          <FaReact />,
          // eslint-disable-next-line react/jsx-key
          <FaFigma />,
          // eslint-disable-next-line react/jsx-key
          <FaPython />,
          // eslint-disable-next-line react/jsx-key
          <SiNextdotjs />,
          // eslint-disable-next-line react/jsx-key
          <SiFramer />,
        ],
      },
      {
        title: "Back End",
        // eslint-disable-next-line react/jsx-key
        icons: [<FaPython />, <SiPostgresql />, <FaFlask />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: " Independent Life/Health Agent - Family First Life",
        stage: "2022 – Current ",
      },
      {
        title: "Licensed Lending Officer - loanDepot",
        stage: "2021 – 2022",
      },
      {
        title: "Technical Sales Specialist - Office-1 Technologies",
        stage: " 2018 – 2020",
      },
      {
        title: "Technical Sales Specialist - Xerox",
        stage: "2016 – 2018",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Software Engineering - FlatIron University, NY New York",
        stage: "2023",
      },
      {
        title: "BS Business Economics - Oneonta State",
        stage: "2009",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      {/* Bottom Right Pulse Animation */}
      <Circles />
      {/* Avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Txt */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {" "}
            <span className="text-accent">Software Engineer</span>, Tech Sales
            and Business<span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            {" "}
            I am a Software Engineer with a unique blend of technical expertise
            and a background in Sales and Business.{" "}
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 ">
              {/* experience */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience tranforming lives through tech
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
          className="flex flex-col w-full xl:max-w-[48%] h-[300px] "
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* Titles */}
                  <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                  <div className="hidden md:flex ">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4 ">
                    {/* Icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white" key={itemIndex}>
                          {icon}
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
