"use client";
import { TextSizes } from "@/components/TextSizes";
import Chip from "@/components/Chip/Chip";
import projects from "@/common/Data/projects.json";
import skills from "@/common/Data/skills.json";
import experience from "@/common/Data/experience.json";
import Image from "next/image";
import styles from "./homepage.module.css";
import ProjectCard from "@/components/Project/ProjectCard";
import { motion } from "framer-motion";
import SkillSection from "@/components/Skills/SkillSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ExperienceCard from "@/components/Experience/ExperienceCard";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />

        {/* HERO */}
        <section className={`${styles.hero} flex w-full items-center justify-center gap-36 px-10`}>
          <div className="w-fit h-screen flex flex-col justify-center items-center gap-6 z-10">
            <h2 className={`font-medium align-middle text-center ${TextSizes.MEDIUM}`}>Hey there! I&apos;m</h2>

            <h1 className={`font-medium align-middle text-center ${TextSizes.FOURXLARGE}`}>Krish Renjen</h1>
            <div className="flex gap-3 flex-wrap justify-center items-center">
              <Chip className={`${TextSizes.SMALL} bg-brand_red`}>Full Stack Developer</Chip>
              <Chip className={`${TextSizes.SMALL} bg-brand_red`}>Web Developer</Chip>
              <Chip className={`${TextSizes.SMALL} bg-brand_red`}>Java Developer</Chip>
            </div>
          </div>
        </section>

        {/* ABOUT ME */}

        <section id="about" className="my-56">
          <motion.div
            key="page"
            initial="initialState"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            variants={{
              initialState: {
                y: 30,
                opacity: 0.5,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="flex h-fit w-full justify-center items-center gap-3">
              <Chip className={`${TextSizes.STAYLARGE} bg-brand_red font-medium`}>About</Chip>
              <h2 className={`font-medium align-middle text-center ${TextSizes.STAYLARGE}`}>Me</h2>
            </div>
          </motion.div>

          <div className="flex gap-14 px-10 justify-center items-center py-10 flex-wrap">
            <div className="w-80 lg:w-96 h-fit px-7">
              <p className={TextSizes.XSMALL}>
                Hey! I&apos;m Krish and I am a freshman at Rutgers University and an aspiring full stack developer. I made my start making games on Roblox, and have transitioned to web and software
                development.
                <br />
                <br />
                Currently, I work with Next.js, Typescript, Python, and Java. Check out my{" "}
                <a target="_blank" href="/resume.pdf" className="text-brand_cyan hover:text-brand_blue underline">
                  resume
                </a>{" "}
                or{" "}
                <a href="#footer" className="text-brand_cyan underlinetext-brand_cyan hover:text-brand_blue underline">
                  contact me
                </a>
                .
              </p>
            </div>
            <div className={` bg-brand_pink w-36 h-36 md:w-80 md:h-80 lg:w-96 lg:h-96`}>
              <motion.div
                key="page"
                initial="initialState"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
                variants={{
                  initialState: {
                    y: 0,
                    x: 0,
                  },
                  visible: {
                    y: -12,
                    x: -12,
                  },
                }}
              >
                <div className={`bg-transparent w-36 h-36 md:w-80 md:h-80 lg:w-96 lg:h-96 relative`}>
                  <Image src="/profilepicture.jpg" fill={true} alt="" priority={true} quality={75} style={{ objectFit: "cover" }} className={"grayscale-[90%]"}></Image>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section id="experience" className="my-56">
          <motion.div
            key="page"
            initial="initialState"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            variants={{
              initialState: {
                y: 30,
                opacity: 0.5,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="flex h-fit w-full px-8 justify-center items-center gap-3">
              <h2 className={`font-medium align-middle text-center ${TextSizes.STAYLARGE}`}>My</h2>
              <Chip className={`${TextSizes.STAYLARGE} bg-brand_red font-medium`}>Experience</Chip>
            </div>
          </motion.div>

          <div className="py-10 h-fit flex flex-col items-center justify-center gap-5 px-16">
            {experience.map((item, index) => (
              <ExperienceCard key={index} data={item}></ExperienceCard>
            ))}
          </div>
        </section>

        {/* PROJECTS */}

        <section id="projects" className="my-56">
          <motion.div
            key="page"
            initial="initialState"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            variants={{
              initialState: {
                y: 30,
                opacity: 0.5,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="flex h-fit w-full px-8 justify-center items-center gap-3">
              <h2 className={`font-medium align-middle text-center ${TextSizes.STAYLARGE}`}>My</h2>
              <Chip className={`${TextSizes.STAYLARGE} bg-brand_red font-medium`}>Projects</Chip>
            </div>
          </motion.div>

          <div className="py-10 h-fit flex flex-wrap items-stretch justify-center gap-5 px-16">
            {projects.map((item, index) => (
              <ProjectCard key={index} data={item}></ProjectCard>
            ))}
          </div>
        </section>

        {/* SKILLS */}

        <section id="skills" className="mt-56 my-28">
          <motion.div
            key="page"
            initial="initialState"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            variants={{
              initialState: {
                y: 30,
                opacity: 0.5,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="flex h-fit w-full px-8 justify-center items-center gap-3">
              <h2 className={`font-medium align-middle text-center ${TextSizes.STAYLARGE}`}>My</h2>
              <Chip className={`${TextSizes.STAYLARGE} bg-brand_red font-medium`}>Skills</Chip>
            </div>
          </motion.div>

          <div className="py-10 h-fit flex flex-wrap items-stretch justify-center gap-5 px-16">
            <SkillSection title={"Languages"} data={skills.languages} />
            <SkillSection title={"Tools & Frameworks"} data={skills.frameworks} />
            <SkillSection title={"Other Tools"} data={skills.external} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
