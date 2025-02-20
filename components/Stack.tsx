import { color } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const stackItem = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
  { id: 3, name: "TpyeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 4, name: "MongoDB", icon: SiMongodb, color: "#74A248" },
  { id: 5, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
];

const Stack = () => {
  return (
    <section className="py-16 glass">
      <div className="max-w-[1200] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>
        <div className="grid sm:grid-cols2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItem.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
                <div className="mb-4 bg-white/10 p-6 rounded-xl">{React.createElement(item.icon,{
                    className: "w-32 h-32",
                    style:{color: item.color}
                })}</div>
                <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
