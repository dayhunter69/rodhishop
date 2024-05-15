import React, { useState } from "react";
import BlogCarousel from "./BlogCarousel";
import BlogMusicCard from "./BlogMusicCard";
import BlogChargerCard from "./BlogChargerCard";
import YouMadeIt from "./YouMadeIt";

export const blogTabMenu = [
  {
    tabMenu: "all",
  },
  {
    tabMenu: " suggested by reader",
  },
  {
    tabMenu: "sound",
  },
  {
    tabMenu: "charge",
  },
  {
    tabMenu: "protection",
  },
  {
    tabMenu: "lifestyle",
  },
  {
    tabMenu: "yantram",
  },
];

const BlogPage = () => {
  const [tab, setTab] = useState(0);

  const handleClick = (index) => {
    setTab(index);
  };

  return (
    <>
      <div
        className="max-w-[1152px]	mx-auto mt-[45px] mb-[88px] mobile:mt-[28px]"
        // style={{ border: "1px solid red" }}
      >
        <p className="font-sans font-bold not-italic text-Heading text-center capitalize	mobile:text-Paragraph3">
          blogs
        </p>
        <div
          className="flex items-center	justify-around max-w-[1024px] h-10 mx-auto mb-0 mt-[44px] mobile:mt-[10px]"
          // style={{ border: "1px solid red" }}
        >
          {blogTabMenu.map((info, index) => {
            return (
              <p
                key={index}
                className={`${
                  tab === index
                    ? "font-sans not-italic font-bold capitalize text-Paragraph3 cursor-pointer border-b-2 border-black border-solid text-primary  mobile:text-Paragraph0"
                    : "font-sans not-italic font-bold capitalize text-Paragraph3 cursor-pointer border-b-2 text-secondary-lightOpacity border-transparent mobile:text-Paragraph0"
                }`}
                onClick={() => handleClick(index)}
              >
                {info.tabMenu}
              </p>
            );
          })}
        </div>
        <BlogCarousel />
        <BlogMusicCard />
        <BlogChargerCard />
        <YouMadeIt />
      </div>
    </>
  );
};

export default BlogPage;
