"use client";

import {
  ArrowRight,
  BadgeCheck,
  FileBadge,
  LucideIcon,
  Phone,
  ShieldCheck,
  Trophy,
  Zap,
} from "lucide-react";
import { burtonPhone } from "@/data/generalInfo";
import Link from "next/link";
import { StaggeredList } from "../motion/StaggerdList";
import { SlideDown } from "../motion/SlideDown";
import { SlideUp } from "../motion/SlideUp";
import Section from "../Section";
import { Button } from "../ui/button";
import Image from "next/image";
import { SlideInFromLeft } from "../motion/SlideInFromLeft";

const ICONSIZE = 48;
const STROKEWIDTH = 1.25;

type StatsType = { title: string; description: string; icon: LucideIcon }[];

const stats: StatsType = [
  {
    title: "Decades of Experience",
    description:
      "With over 25 years in the industry, our team brings expert knowledge and reliable craftsmanship to every project.",
    icon: Trophy,
  },
  {
    title: "Licensed & Certified",
    description:
      "Our electricians are fully licensed and certified to ensure all installations meet code and safety standards.",
    icon: FileBadge,
  },
  {
    title: "Safety & Satisfaction",
    description:
      "We prioritize safety and customer satisfaction in every job—big or small. You can trust our team to put your needs first.",
    icon: ShieldCheck,
  },
  {
    title: "Efficient & High Quality",
    description:
      "From quick troubleshooting to large-scale installs, we deliver high-quality work efficiently—saving you time and money.",
    icon: Zap,
  },
];

const Hero = () => {
  return (
    <Section className="relative h-full py-0 lg:py-0">
      <div className={`relative h-full py-44 lg:py-56`}>
        {/* Background image */}
        <div className="absolute inset-0 z-1">
          <Image
            src="/hero-bg2.jpg"
            alt="Lightbulbs in dark room"
            fill
            priority
            className="object-cover"
          />
          Overlay
          <div className="absolute inset-0 bg-black/50 z-3" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 z-2">
          <div>
            <div className="text-start mb-16 space-y-2">
              <SlideInFromLeft>
                <div className="bg-primary w-fit p-4 rounded-full text-xs text-white font-semibold flex shrink-0 items-center gap-2">
                  <BadgeCheck size={18} />
                  <div className="size-[5px] rounded-full bg-white" />
                  <p>Family-run</p>
                  <div className="size-[5px] rounded-full bg-white" />
                  <p>Licensed</p>
                  <div className="size-[5px] rounded-full bg-white" />
                  <p>Insured</p>
                </div>
              </SlideInFromLeft>
              <SlideDown>
                <h1 className="text-4xl text-white md:text-5xl lg:text-7xl font-bold mb-1">
                  Electrical work you can trust around your business.
                </h1>
              </SlideDown>
              <SlideUp>
                <p className="text-base text-white max-w-5xl">
                  From residential repairs to complex commercial installations,
                  Burton Electric LLC is built on integrity, safety, and
                  satisfaction
                </p>
              </SlideUp>
            </div>

            <StaggeredList className="flex justify-start items-center gap-4 lg:mb-48">
              <Link prefetch href="/about-us" className="group">
                <button className="flex items-center gap-1 bg-primary rounded-full p-3 text-white text-xs font-medium border-2 border-transparent group-hover:cursor-pointer">
                  <p>Learn More</p>
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform duration-[250ms] ease-in-out"
                  />
                </button>
              </Link>
              <a href={`tel:+16158301111`} className="group">
                <button className="flex items-center gap-1 bg-white rounded-full p-3 text-secondary text-xs font-medium border-2 border-muted group-hover:cursor-pointer">
                  <Phone size={15} />
                  <p>Call us: {burtonPhone}</p>
                </button>
              </a>
            </StaggeredList>
          </div>
        </div>
      </div>
      {/* Stats */}
      {/* <div className="lg:absolute -bottom-15 left-0 right-0 flex justify-center lg:mx-4 z-5">
        <StaggeredList
          amount={0.1}
          className="grid grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-4 shadow-lg bg-white lg:rounded-lg overflow-hidden w-full py-4"
        >
          {stats.map((stat, index) => {
            let borderClasses = "";

            // Mobile/tablet (2 cols): add border to items 0 and 2 (1st col of each row)
            if (index % 2 === 0) {
              borderClasses += " border-r-2 border-primary/25";
            }

            // Large screens (4 cols): add border to items 0,1,2 (all except last)
            if (index < stats.length - 1) {
              borderClasses += " lg:border-r-2 lg:border-primary/25";
            }

            return (
              <div
                key={index}
                className={`flex flex-col gap-6 items-center p-6 h-full ${borderClasses}`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="size-20 flex items-center justify-center bg-white rounded-full shadow-md">
                    <stat.icon
                      size={ICONSIZE}
                      strokeWidth={STROKEWIDTH}
                      className="text-primary"
                    />
                  </div>
                  <p className="font-medium text-center">{stat.title}</p>
                </div>
                <p className="text-sm text-center text-muted-foreground max-w-xs">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </StaggeredList>
      </div> */}
    </Section>
  );
};

export default Hero;
