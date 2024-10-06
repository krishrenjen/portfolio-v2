"use client";
import Chip from "../Chip/Chip";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { TextSizes } from "@/components/TextSizes";

interface Props {
  words: string[];
}

export default function ChipGroup(props: Props) {
  const gradient = "bg-brand_pink";

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.words.length);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [props.words.length]);

  return (
    <div className="flex gap-3 flex-wrap justify-center items-center">
      {props.words.map((item, index) => (
        <Chip
          key={index}
          className={clsx(
            TextSizes.SMALL,
            currentIndex === index ? gradient : "bg-brand_red"
          )}
        >
          {item}
        </Chip>
      ))}
    </div>
  );
}
