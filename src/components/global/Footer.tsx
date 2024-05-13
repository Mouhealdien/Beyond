import React from "react";
import FotterAndContactLogo from "./FooterAndContactLogo";
import Image from "next/image";
import aboutImage from "../../../public/assets/aboutImage3.png";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const pages = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Our Services",
      url: "/our-services",
    },
    {
      title: "Our Works",
      url: "/our-works",
    },
  ];

  const pages2 = [
    {
      title: "Help Center",
    },
    {
      title: "Privace Policy",
    },
    {
      title: "Terms and Conditions",
    },
  ];

  const social = [
    {
      icon: <FaFacebook color="white" />,
      url: "#",
    },
    {
      icon: <FaInstagram color="white" />,
      url: "#",
    },
    {
      icon: <FaXTwitter color="white" />,
      url: "#",
    },
  ];

  return (
    <div className="bg-[#1B1C1C] h-fit ">
      <div className="flex flex-row flex-wrap ">
        <Image width={1000} src={aboutImage} alt="aboutImage" />
        <div className="flex gap-16 flex-col pt-10 px-2">
          <FotterAndContactLogo />
          <div className="flex justify-between gap-10 flex-row">
            <ul className=" font-light text-sm">
              {pages.map((page, index) => {
                return (
                  <li className="pb-5" key={index}>
                    <Link
                      href={page.url}
                      className="block  px-3 text-white  md:p-0 "
                      aria-current="page"
                    >
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className=" text-white font-light text-sm">
              {pages2.map((page, index) => {
                return (
                  <li className="pb-5" key={index}>
                    {page.title}
                  </li>
                );
              })}
              <p>
                {" "}
                Follow us
                {social.map((e, i) => {
                  return (
                    <Link className="px-2 inline-block" key={i} href={e.url}>
                      {e.icon}
                    </Link>
                  );
                })}
              </p>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full justify-between py-3 px-24 text-white">
        <p>© All rights reserved</p>
        <p>Beyond Agency</p>
      </div>
    </div>
  );
};

export default Footer;
