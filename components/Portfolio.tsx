"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import project1 from "@/assets/proj5.png";
import project2 from "@/assets/proj6.png";
import project3 from "@/assets/proj7.png";
import { MdDescription } from "react-icons/md";
import { div, image } from "framer-motion/client";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "DD335C"];

const projects = [
  {
    id: 1,
    year: 2024,
    title: "Customer support chatbot Customer support chatbot Customer support chatbot",
    description: "qwerwqerwqerwerwqerwerwqerwqerwqerwerqwerwqerwqerwqerwqe rwqerqwerwqerqwerwqerwqerqwer qwerqwer",
    image: project1,
  },
  {
    id: 2,
    year: 2024,
    title: "Customer support chatbot",
    description: "",
    image: project2,
  },
  {
    id: 3,
    year: 2024,
    title: "Customer support chatbot",
    description: "",
    image: project3,
  },
];
const Portfolio = () => {
  const [selectProject, setSelectProject] = useState(projects[0]);
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#000 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      id="portfolio"
      className="py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-gray-400">Projects</span>
          </h2>

          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-gray-400 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${
                  selectProject.id === project.id ? "text-gray-200" : ""
                } duration-300`}
              >
                {project.title}
              </h3>
              {selectProject.id === project.id && (
                <div className="border-b-2 border-gray-200 my-4"></div>
              )}
              {selectProject.id === project.id && (
                <div className="text-gray-400 transition-all duration-500 ease-in-out ">
                  {project.description}
                </div>
              )}
            </div>
          ))}
        </div>

        <Image
          src={selectProject.image.src}
          alt={selectProject.title}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={800}
          height={450}
        />
      </div>
    </motion.section>
  );
};

export default Portfolio;
