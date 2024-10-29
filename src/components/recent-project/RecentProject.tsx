"use client";
import { PROJECTS } from "@/shared/constants/projects.constant";
import { Languages } from "@/shared/enums/language.enum";
import Image from "next/image";
import Link from "next/link";

const RecentProject = () => {
  return (
    <div className="mt-10">
      <h2 className="text-white font-bold text-2xl py-4">Recent projects</h2>
      {PROJECTS.map((project, i) => (
        <div
          key={`card` + i}
          className="flex gap-4 mt-10 bg-slate-800 p-3 rounded-md"
        >
          <div className="min-w-max">
            <div className="relative w-52 h-32 rounded-lg border-[3px] border-sky-700 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                objectFit="content"
                layout="fill"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              target="_blank"
              href={`${project.domain}`}
              className="text-white font-bold text-xl hover:text-sky-500"
            >
              {project.title}
            </Link>
            <div className="flex gap-2">
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
                        : language.toLowerCase() === Languages.TAILWIND
                        ? "bg-blue-400"
                        : language.toLowerCase() === Languages.BOOTSTRAP
                        ? "bg-indigo-400"
                        : language.toLowerCase() === Languages.PHP
                        ? "bg-slate-400"
                        : ""
                    }`}
                  >
                    <p>{language}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-sm text-slate-300 mt-2">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentProject;
