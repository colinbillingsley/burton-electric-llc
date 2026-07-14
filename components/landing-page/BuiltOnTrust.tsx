import { CheckCircle, Clock, FileBadge, Star, Users } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Section from "../Section";
import Link from "next/link";
import { FadeIn } from "../motion/FadeIn";
import { StaggeredList } from "../motion/StaggerdList";
import { SlideInFromLeft } from "../motion/SlideInFromLeft";
import { SlideInFromRight } from "../motion/SlideInFromRight";
import CenterDiv from "../CenterDiv";

const STROKEWIDTH: number = 1.25;

const BuiltOnTrust = () => {
  return (
    <Section className="bg-white">
      <CenterDiv>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <h2 className="text-center flex flex-col gap-2 items-center w-full font-bold text-gray-900 mb-8">
                <span className="text-base md:text-xl">
                  Locally Owned & Operated
                </span>

                <span className="text-4xl md:text-5xl">
                  Built on Trust & Excellence
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over{" "}
                <span className="text-primary font-bold">25 years</span> of
                experience in the electrical industry, Burton Electric has been
                Nashville&apos;s trusted partner for safe, reliable electrical
                solutions.
              </p>
            </FadeIn>

            <StaggeredList className="space-y-4 mb-8">
              {[
                "Licensed & fully insured professionals",
                "Commitment to safety and code compliance",
                "Transparent pricing with no hidden fees",
                "Serving Nashville and surrounding areas",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-primary/10 rounded-full p-1 mr-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </StaggeredList>

            <SlideInFromLeft>
              <Link href={"/about-us"}>
                <Button size={"lg"}>Learn More About Us</Button>
              </Link>
            </SlideInFromLeft>
          </div>

          <SlideInFromRight>
            <div className="relative">
              <div className="bg-gray-50 rounded-3xl p-8 border border-input">
                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-white flex items-center gap-2 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border-2 border-transparent hover:border-primary/10 hover:translate-x-1 hover:-translate-y-1 transition-all duration-200">
                    <div className="bg-primary/10 rounded-full p-1">
                      <Clock
                        className="text-primary rounded-full"
                        strokeWidth={STROKEWIDTH}
                        size={16}
                      />
                    </div>

                    <div>
                      <span className="text-primary font-medium">25+ </span>
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-white flex items-center gap-2 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border-2 border-transparent hover:border-primary/10 hover:translate-x-1 hover:-translate-y-1 transition-all duration-200">
                    <div className="bg-primary/10 rounded-full p-1">
                      <FileBadge
                        className="text-primary rounded-full"
                        strokeWidth={STROKEWIDTH}
                        size={16}
                      />
                    </div>

                    <div className="text-secondary">
                      <span className="text-primary font-medium">100% </span>{" "}
                      Licensed & Insured
                    </div>
                  </div>
                  <div className="bg-white flex items-center gap-2 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border-2 border-transparent hover:border-primary/10 hover:translate-x-1 hover:-translate-y-1 transition-all duration-200">
                    <div className="bg-primary/10 rounded-full p-1">
                      <Star
                        className="text-primary rounded-full"
                        strokeWidth={STROKEWIDTH}
                        size={16}
                      />
                    </div>

                    <div className="text-secondary">
                      <span className="text-primary font-medium">5.0 </span>
                      Customer Rating
                    </div>
                  </div>
                  <div className="bg-white flex items-center gap-2 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border-2 border-transparent hover:border-primary/10 hover:translate-x-1 hover:-translate-y-1 transition-all duration-200">
                    <div className="bg-primary/10 rounded-full p-1">
                      <Users
                        className="text-primary rounded-full"
                        strokeWidth={STROKEWIDTH}
                        size={16}
                      />
                    </div>
                    <div className="text-secondary">
                      <span className="text-primary font-medium">1000+ </span>
                      Happy Customers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideInFromRight>
        </div>
      </CenterDiv>
    </Section>
  );
};

export default BuiltOnTrust;
