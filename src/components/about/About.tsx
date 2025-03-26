"use client";
import React, { useTransition, useState, ReactNode } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-slate-300 mt-4 md:mt-8">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
        <div className="w-full h-full flex items-center">
          <div className="relative">
            <Image
              src="/images/about2.png"
              layout="intrinsic"
              alt=""
              width={1000}
              height={1000}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="text-left flex flex-col h-full mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-slate-300 md:leading-loose">
            I am a skilled full-stack programmer with{" "}
            <span className="font-semibold text-white">3 years</span> of
            experience in web development. My strong foundation in programming
            has deepened my expertise in the web development ecosystem, with a
            particular focus on JavaScript. I am passionate about building
            efficient, user-friendly solutions, collaborating effectively with
            teams, and continuously enhancing my skills to deliver high-quality
            projects.
          </p>
          {/* <div className="flex flex-row justify-start mt-8"> */}
          {/*   <TabButton */}
          {/*     selectTab={() => handleTabChange("skills")} */}
          {/*     active={tab === "skills"} */}
          {/*   > */}
          {/*     {" "} */}
          {/*     Skills{" "} */}
          {/*   </TabButton> */}
          {/*   <TabButton */}
          {/*     selectTab={() => handleTabChange("education")} */}
          {/*     active={tab === "education"} */}
          {/*   > */}
          {/*     {" "} */}
          {/*     Education{" "} */}
          {/*   </TabButton> */}
          {/*   <TabButton */}
          {/*     selectTab={() => handleTabChange("certifications")} */}
          {/*     active={tab === "certifications"} */}
          {/*   > */}
          {/*     {" "} */}
          {/*     Certifications{" "} */}
          {/*   </TabButton> */}
          {/* </div> */}
          {/* <div className="mt-8"> */}
          {/*   {TAB_DATA.find((t) => t.id === tab)?.content} */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
