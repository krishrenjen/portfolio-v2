import React from "react";
import FooterItem from "./FooterItem";
import FooterItems from "@/common/Data/footeritems.json";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id="footer" className="w-full flex justify-center items-center flex-col px-[10%]">
      <hr className="opacity-20  w-[90%]"></hr>
      <div className="flex justify-center items-center h-16 gap-7 my-5">
        {FooterItems.map((item, index) => (
          <FooterItem key={index} info={item} />
        ))}
      </div>
      <h1 className="text-sm font-title text-white font-normal mb-5 text-center">
        <span>{"©" + year + " Krish Renjen | Built using "}</span>
        <a className="underline hover:text-slate-300" target="_blank" href="https://www.nextjs.org">
          Next.js
        </a>
        <span>{" ("}</span>
        <a className="underline hover:text-slate-300" target="_blank" href="https://react.dev/">
          React.js
        </a>
        <span>{"), "}</span>
        <a className="underline hover:text-slate-300" target="_blank" href="https://www.typescriptlang.org/">
          Typescript
        </a>
        <span>{", "}</span>
        <a className="underline hover:text-slate-300" target="_blank" href="https://tailwindcss.com/">
          TailwindCSS
        </a>
        <span>{", and other "}</span>
        <a className="underline hover:text-slate-300" target="_blank" href="https://github.com/krishrenjen/portfolio/blob/main/package.json/#L11">
          dependencies
        </a>
        <span>{" | Visit project on "}</span>
        <a className="underline hover:text-slate-300" target="_blank" href="https://github.com/krishrenjen/portfolio">
          GitHub
        </a>
      </h1>
    </div>
  );
}
