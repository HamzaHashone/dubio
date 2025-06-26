import React from "react";
import circle1 from "@/images/circle.gif";
import Image from "next/image";
import play from "@/images/Play.gif";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import playLeft from "@/images/Playleft.png";
import playRight from "@/images/playRight.png";
import AnimatedButton from "../ui/AnimatedButton";

const HeroSection = () => {
  return (
    <div className="max-w-[1920px] mx-auto h-[100vh] flex items-center">
      <div className="max-w-[85%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-40 ">
          <div className="my-auto">
            <h1 className="text-white 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold">
              Dub Your Content into Any Language In Your Own Voice
            </h1>
            <p className="text-white md:text-base text-sm font-normal lg:mt-8 mt-4">
              Expand your audience, grow global revenue, and own your voice.
              Dubio lets you instantly transform your videos into any language
              using AI dubbing and voice cloning — all in seconds.
            </p>

            {/* Email Input and Join Waitlist Button ,*/}
            <div className="relative mt-10">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="w-full relative bg-[#2A1F3A] border-[#3D2A50] text-white placeholder:text-gray-400 h-12 sm:h-14 md:h-16 lg:h-[70px] px-6 rounded-full"
              />
              <Button className="md:absolute justify-self-center m-auto w-max right-5 lg:right-4 h-max top-1/2 md:mt-0 mt-4 md:-translate-y-1/2 bg-transparent hover:bg-transparent p-0">
              <AnimatedButton />
            </Button>
              {/* <Button className=" absolute right-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent">
                <AnimatedButton />
              </Button> */}
            </div>
          </div>
          <div className="relative w-[1010px] ">
            <div className="absolute -z-10 2xl:-top-[420px] -top-[200px] left-[130%] -translate-x-1/2 2xl:w-[2010px] 2xl:h-[1217px] w-[1010px] h-[717px] object-cover">
              <div className="relative">
                <div className="absolute top-[50%] -left-96 z-10">
                  <Image src={playLeft} alt="Hero" width={230} height={100} />
                </div>
                <div className="absolute top-[35%] left-10 z-10">
                  <Image src={playRight} alt="Hero" width={320} height={150} />
                </div>
                <Image
                  src={circle1}
                  alt="AI Video Editor Animation"
                  width={1010}
                  height={717}
                  className=" 2xl:-top-[420px] -top-[200px] left-[38%] -translate-x-1/2 2xl:w-[2010px] 2xl:h-[1217px] w-[1010px] h-[717px] object-cover"
                  //   className="-z-10 absolute 2xl:-top-[420px] -top-[200px] left-[38%] -translate-x-1/2 2xl:w-[2010px] 2xl:h-[1217px] w-[1010px] h-[717px] object-cover"
                />
              <div className="absolute top-10 right-[6%] z-10 w-full h-full flex justify-start items-center ml-[25%] bg-transparent">
                <Image
                  src={play}
                  alt="Play"
                  width={250}
                  height={250}
                  className="bg-transparent "
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
