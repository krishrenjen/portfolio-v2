"use client";
import { Hyperlink } from "@/common/Interfaces/Hyperlink";
import { Tag } from "@/common/Interfaces/Tag";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { FiArrowUpRight, FiBriefcase } from "react-icons/fi";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import { MarkDownBlock } from "@/common/Interfaces/Markdown";
import MarkDownDiv from "../Markdown/MarkDownDiv";

interface ProjectCardProps {
  data: {
    title: string;
    alt_titles?: string[];
    company: string;
    description: string | MarkDownBlock[];
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
      className="flex w-full items-center justify-center"
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
      <div className="group  md:w-[60%] w-[95%] rounded-lg py-5 flex  items-center flex-col gap-2">
        <div className="flex justify-between flex-col flex-wrap items-start w-full gap-[0.125rem]">
          <div className="flex gap-3 items-center justify-start">
            <IconContext.Provider
              value={{
                className: "w-7 h-7  text-brand_pink",
              }}
            >
              <div>
                <FiBriefcase />
              </div>
            </IconContext.Provider>

            <div className="flex flex-col">
              <div className="text-2xl font-medium font-title text-white">{data.title}</div>
              {data.alt_titles && (
                <div className="flex flex-row gap-1 items-center justify-start">
                  {data.alt_titles.flatMap((item, index, array) => [
                    <span className="w-fit text-xl text-center align-middle" key={index}>
                      {item}
                    </span>,
                    index < array.length - 1 ? (
                      <span className="w-fit text-xl text-center align-middle" key={`dot${index}`}>
                        •
                      </span>
                    ) : null,
                  ])}
                </div>
              )}
              <h1 className="text-xl font-medium text-brand_blue">{data.company}</h1>
              <h1 className="text-md align-middle">{data.date}</h1>
            </div>

            {/* <a href={data.primaryHref} target="_blank" className="text-2xl font-medium font-title text-white">
              {data.title}
            </a> */}
          </div>
        </div>

        <div className="h-full flex flex-col justify-between items-center gap-5">
          <div className="py-3">{typeof data.description === "string" ? data.description : <MarkDownDiv blocks={data.description} />}</div>
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
