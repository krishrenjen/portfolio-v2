import clsx from "clsx";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: String;
}

export default function Chip(props: Props) {
  
  return (
    <div
      className={
        clsx("rounded-lg px-2 py-[4px] w-fit h-fit text-center",
            props.className ?? ""   
        )
      }
    >
      {props.children}
    </div>
  );
}
