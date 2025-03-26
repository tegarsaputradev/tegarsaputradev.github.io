import React, { ReactNode } from "react";
import { FaMobileScreenButton } from "react-icons/fa6";
import {
  SiDocker,
  SiGit,
  SiLaravel,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";

interface Skills {
  iconColor: string;
  name: string;
  icon: ReactNode;
}

export const Skills = () => {
  const skills: Skills[] = [
    {
      name: "Nest Js",
      iconColor: "text-red-500",
      icon: <SiNestjs />,
    },
    {
      iconColor: "text-black",
      name: "Next Js",
      icon: <SiNextdotjs />,
    },
    {
      iconColor: "text-sky-600",
      name: "React",
      icon: <SiReact />,
    },
    {
      iconColor: "text-purple-600",
      name: "React Native",
      icon: <FaMobileScreenButton />,
    },
    {
      iconColor: "text-red-700",
      name: "Laravel",
      icon: <SiLaravel />,
    },
    {
      iconColor: "text-sky-400",
      name: "Docker",
      icon: <SiDocker />,
    },
    {
      iconColor: "text-orange-700",
      name: "Git",
      icon: <SiGit />,
    },
    {
      iconColor: "text-yellow-500",
      name: "Linux Server",
      icon: <SiLinux />,
    },
  ];

  return (
    <div className="mt-4 md:mt-8">
      <h2 className="font-semibold text-white text-2xl pb-2">Current skills</h2>
      <div className="w-full md:flex mt-4 md:justify-between grid grid-cols-4">
        {skills.map((skill, i) => (
          <div className="flex flex-col justify-center items-center" key={i}>
            <p
              className={`${skill.iconColor} text-4xl bg-slate-700 w-[60px] h-[60px] rounded-full flex items-center justify-center`}
            >
              {skill.icon}
            </p>
            <p className="text-slate-300 font-semibold mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
