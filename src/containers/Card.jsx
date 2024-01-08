import React from "react";
import cardImage from "../assets/images/illustration-article.svg";
import authorImage from "../assets/images/image-avatar.webp";

export default function Card() {
  return (
    <div className="max-w-24 flex flex-col gap-6 bg-white rounded-[20px] ml-6.5 mr-6.3 p-6 border-solid border-1 border-black shadow-card">
      <img className="rounded-[10px]" src={cardImage} alt="" />
      <div className="flex flex-col gap-3">
        <span className="font-extrabold bg-yellow py-4px px-12px rounded-[4px] self-start text-xs lg:text-sm">
          Learning
        </span>
        <p className="text-xs lg:text-sm leading-normal">
          Published 21 Dec 2023
        </p>
        <h3 className="font-extrabold cursor-pointer hover:text-yellow text-xl lg:text-2xl leading-normal">
          HTML & CSS foundations
        </h3>
        <p className="text-sm lg:text-base text-grey">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="flex items-center">
        <img className="w-8 mr-3" src={authorImage} alt="" />
        <p className="font-extrabold text-sm">Greg Hopper</p>
      </div>
    </div>
  );
}
