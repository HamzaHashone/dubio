import Image from "next/image";
import React from "react";
import step2 from "../../../public/images/section2.png";
import step1 from "../../../public/images/section1.png";
import step3 from "../../../public/images/section3.png";

const HowItsWork = () => {
  // const steps = [
  //   {
  //     number: 1,
  //     title: "Paste Your Video URL",
  //     description: "Paste your YouTube link and dub it now.",
  //     image: step2,
  //     alt: "Paste video URL step",
  //   },
  //   {
  //     number: 2,
  //     title: "Choose Languages",
  //     description:
  //       "Select your target language(s), your cloned voice, and subtitle format.",
  //     image: step1,
  //     alt: "Choose languages step",
  //   },
  //   {
  //     number: 3,
  //     title: "Get Magic Back",
  //     description:
  //       "Get 1080p MP4 + .srt / .vtt files — optimized for every platform.",
  //     image: step3,
  //     alt: "Get results step",
  //   },
  // ];
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="max-w-[85%] mx-auto">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          How It&apos;s Work
        </h2>

        <div className="grid lg:grid-cols-3 gap-10 md:gap-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center justify-between gap-2 lg:gap-5 ">
            <div className="flex flex-col items-center mb-5">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-6">
                <span className="text-white text-lg lg:text-2xl font-bold">1</span>
              </div>
              <h3 className="text-white lg:text-2xl md:text-xl text-lg text-center font-bold mb-2 lg:mb-4">
                Paste Your Video URL
              </h3>
              <p className="text-white font-normal text-center text-sm md:text-base">
                Paste your YouTube link and dub it now.
              </p>
            </div>
            <Image
              src={step2}
              alt="step1"
              width={480}
              height={450}
              className=""
            />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center justify-between gap-2 lg:gap-5">
            <div className="flex flex-col items-center mb-5">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-6">
                <span className="text-white text-lg lg:text-2xl font-bold">2</span>
              </div>
              <h3 className="text-white lg:text-2xl md:text-xl text-lg text-center font-bold mb-2 lg:mb-4">
                Choose Languages
              </h3>
              <p className="text-white font-normal text-center text-sm md:text-base">
                Select your target language(s), your cloned voice, and subtitle
                format.
              </p>
            </div>

            <Image
              src={step1}
              alt="step2"
              width={450}
              height={390}
              className=""
            />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center justify-between gap-2 lg:gap-5">
            <div className="flex flex-col items-center mb-5">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-6">
                <span className="text-white text-lg lg:text-2xl font-bold">3</span>
              </div>
              <h3 className="text-white lg:text-2xl md:text-xl text-lg text-center font-bold mb-2 lg:mb-4">
                Get Magic Back
              </h3>
              <p className="text-white font-normal text-center text-sm md:text-base">
                Get 1080p MP4 + .srt / .vtt files — optimized for every
                platform.
              </p>
            </div>
            <Image
              src={step3}
              alt="step3"
              width={450}
              height={390}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
    // <div className="w-full py-12 md:py-16 lg:py-20">
    //   <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
    //     {/* Section Header */}
    //     <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
    //       How It Works
    //     </h2>

    //     {/* Steps Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-1">
    //       {steps.map((step, index) => (
    //         <div
    //           key={step.number}
    //           className="flex flex-col items-center justify-between text-center group mx-auto"
    //         >
    //           <div className="flex flex-col items-center  mb-6 md:mb-8 mx-auto">
    //             <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-[#6D28D9] transition-colors duration-300">
    //               <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">
    //                 {step.number}
    //               </span>
    //             </div>

    //             <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-tight">
    //               {step.title}
    //             </h3>

    //             <p className="text-white/80 font-normal text-sm sm:text-sm leading-relaxed max-w-xs">
    //               {step.description}
    //             </p>
    //           </div>

    //           <div className="relative w-full max-w-sm  mx-auto group-hover:scale-105 transition-transform duration-300">
    //             <Image
    //               src={step.image || "/placeholder.svg"}
    //                 alt={step.alt}
    //                 width={480}
    //                 height={450}
    //               className="w-full h-auto rounded-lg shadow-lg object-contain"
    //             />

    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Bottom CTA or Additional Info */}
    //     <div className="text-center mt-12 md:mt-16 lg:mt-20">
    //       <p className="text-white/60 text-sm md:text-base">
    //         Ready to transform your content? Get started in just 3 simple steps.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HowItsWork;
