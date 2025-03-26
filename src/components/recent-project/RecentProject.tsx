"use client";
import { PROJECTS } from "@/shared/constants/projects.constant";
import { Languages } from "@/shared/enums/language.enum";
import Image from "next/image";
import Link from "next/link";

const RecentProject = () => {
  return (
    <div className="mt-3 md:mt-6">
      <h2 className="text-white font-bold text-2xl py-4">Recent projects</h2>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-8 lg:gap-14 space-y-0">
        {PROJECTS.map((project, i) => (
          <div
            key={`card` + i}
            className="flex gap-4 bg-slate-800 p-3 rounded-md flex-col"
          >
            <Link href={`${project.domain}`} target="_blank" className="w-full">
              <div className="relative w-full aspect-video rounded-md hover:border-[3px] cursor-pointer border-sky-700 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit="content"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            </Link>
            <div className="flex flex-col gap-2">
              <Link
                target="_blank"
                href={`${project.domain}`}
                className="text-white font-bold text-xl hover:text-sky-500"
              >
                {project.title}
              </Link>
              <div className="flex gap-2 flex-wrap">
                {project.languages.map((language, i) => {
                  return (
                    <div
                      key={`language${i}`}
                      className={`flex items-center text-slate-700 px-3 py-1 rounded-lg text-xs font-medium shadow-sm shadow-white ${
                        language.toLowerCase() === Languages.JAVASCRIPT
                          ? "bg-lime-400"
                          : language.toLowerCase() === Languages.TYPESCRIPT
                            ? "bg-teal-400"
                            : language.toLowerCase() === Languages.NEXTJS
                              ? "bg-black !text-white"
                              : language.toLowerCase() === Languages.NESTJS
                                ? "bg-red-400"
                                : language.toLowerCase() === Languages.AJAX
                                  ? "bg-cyan-400"
                                  : language.toLowerCase() ===
                                      Languages.TAILWIND
                                    ? "bg-blue-400"
                                    : language.toLowerCase() ===
                                        Languages.BOOTSTRAP
                                      ? "bg-indigo-400"
                                      : language.toLowerCase() === Languages.PHP
                                        ? "bg-slate-400"
                                        : ""
                      }`}
                    >
                      <p className="text-[9px] md:text-xs">{language}</p>
                    </div>
                  );
                })}
              </div>
              <div className="text-base lg:text-lg text-slate-300 md:leading-loose mt-2">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
