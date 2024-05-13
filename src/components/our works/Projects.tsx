"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import work from "../../../public/assets/works.png";
import { FaArrowRight } from "react-icons/fa";
import useMediaQuery from "@/lib/hooks/hooks/useMediaQuery";
const Projects = () => {
  const arr = [1, 2, 3];
  const istab = useMediaQuery("(min-width: 1025px)");

  return (
    <div className="flex flex-row  gap-5  justify-center xl:justify-end flex-wrap ">
      {arr.map((e, i) => {
        let mt = istab ? `${(i % 3) + 1}rem` : `${(i % 2) + 1}rem`;

        return (
          <div
            key={i}
            style={{ marginTop: `${mt}` }}
            className=" pb-5 sm:pb-1  max-w-[200px] sm:max-w-[300px] md:max-w-[260px] xl:max-w-[270px] h-[250px] sm:h-[400px]  "
          >
            <div className=" rounded-xl overflow-hidden h-[80%] ">
              <Image
                style={{ transform: "scale(2.5)" }}
                className="rounded-t-lg "
                src={work}
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-base md:text-[18px]  lg:text-[24px]   font-bold">
                Brand awareness
              </h1>
              <Link
                className="text-primary px-5 text-[14px] md:text-base"
                href={"#"}
              >
                show full project
                <FaArrowRight className="   inline-block" />{" "}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

{
  /* <div key={i} style={{marginTop:`${mt}`}} className={`flex flex-col`}>
                  <div className="overflow-hidden rounded-md max-w-[9rem] md:max-w-[16rem] lg:max-w-[350px] h-[15rem]  lg:h-[25rem] ">
                    <Image
                      style={{ transform: "scale(2.5)" }}
                      className="   "
                      src={work}
                      alt="work"
                    />
                  </div>
                  <h1 className="text-[20px]  sm:text-green-700 md:text-blue-700 lg:text-red-500 font-bold">hello world</h1>
                  <Link className="text-primary px-5" href={"#"}>
                    show full project{" "}
                    <FaArrowRight width={3} className="inline-block" />{" "}
                  </Link>
                </div>  */
}
