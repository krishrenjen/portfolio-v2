"use client";
import { Hyperlink } from "@/common/Interfaces/Hyperlink";
import { Tag } from "@/common/Interfaces/Tag";
import React from "react";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

interface ProjectCardProps {
  data: {
    title: string;
    image?: string;
    description: string;
    primaryHref: string;
    date?: string;
    links: Hyperlink[];
    tags?: Tag[];
  };
}

function getColor(type: string | undefined) {
  const tool_color = "bg-brand_cyan";
  const lang_color = "bg-brand_blue";
  const misc_color = "bg-brand_pink";

  if (type === undefined || type === null) {
    return misc_color;
  }
  if (type === "Language") {
    return lang_color;
  }
  if (type === "Tool") {
    return tool_color;
  }
  return misc_color;
}

export default function ProjectCard({ data }: ProjectCardProps) {
  return (
    <motion.div
      key="page"
      initial="initialState"
      whileInView="visible"
      className="flex"
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      variants={{
        initialState: {
          opacity: 0.5,
          y: 5,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      <div className="group w-[28rem] rounded-lg bg-[#2A2927]  shadow-lg shadow-[#2A292780] px-5 py-5 flex  items-center flex-col gap-2 md:hover:scale-[1.01] transition-transform duration-200 md:hover:z-30">
        {data.image && (
          <div className="" >
            <Image src={data.image} alt={""} width={480} height={480} priority={false} quality={50} className={"rounded-md"}></Image>
          </div>
        )}

        <div className="flex justify-between flex-wrap items-center w-full">
          <a href={data.primaryHref} target="_blank" className={"flex gap-1 w-fit justify-center  items-center text-2xl text-center font-medium font-title text-white"}>
            {data.title}
            <IconContext.Provider
              value={{
                className: "relative transition-transform duration-200 w-5 h-5 md:-translate-x-1 md:translate-y-1 md:group-hover:translate-x-0 md:group-hover:translate-y-0 ",
              }}
            >
              <div>
                <FiArrowUpRight />
              </div>
            </IconContext.Provider>
          </a>
          <h1 className="text-lg align-middle">{data.date}</h1>
        </div>

        <div className="h-full flex flex-col justify-between items-center gap-5">
          {data.description}
          <div className="flex flex-col gap-5">
            <h1 className="flex gap-x-4 gap-y-1 flex-wrap text-white items-center justify-center ">
              {data.links.map((item, index) => (
                <a key={index} className=" hover:text-brand_blue flex items-center font-title font-light justify-center gap-1" target="_blank" href={item.href}>
                  <IconContext.Provider value={{ className: "w-5 h-5" }}>
                    <div>
                      <AiOutlineLink />
                    </div>
                  </IconContext.Provider>
                  {item.text}
                </a>
              ))}
            </h1>
            <span className="flex flex-wrap gap-2 justify-center items-center">
              {data.tags?.map((item, index) => (
                <div key={index} className={"rounded-lg px-2 py-[2px] text-white " + getColor(item.type)}>
                  {item.title}
                </div>
              ))}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
