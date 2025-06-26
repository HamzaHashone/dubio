import Image from "next/image";
import React from "react";
import sound from "../../../public/images/sound.png";
import language from "../../../public/images/countryname.png";

const VideoSection = () => {
  return (
    <div className="max-w-[1920px] mx-auto py-20 relative">
      <div className="max-w-[85%] mx-auto">
        <div>
          {/* Main Video Container */}
          <div className="relative max-w-[85%] mx-auto aspect-[16/9] bg-[#1A1630] rounded-3xl">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-contain"
            />
            {/* Overlay UI Elements */}
            <div className="absolute inset-2 pointer-events-none z-10">
              {/* Top Left - Waveform */}
              <div className="absolute lg:top-[10%] -left-[10%] top-12 z-50 lg:w-[291px] lg:h-[60px] md:w-[160px] md:h-[40px] w-[100px] h-[30px]">
                <Image src={sound} alt="video" width={291} height={60} className="w-full h-full" />
              </div>

              {/* Right Side - Language Selection Panel */}
              <div className="absolute xl:top-[10%] lg:top-16 top-5 sm:top-14 xl:right-5 lg:-right-[13%] md:-right-40 -right-68 sm:-right-56 w-80">
                <Image
                  src={language}
                  alt="language"
                  width={291}
                  height={60}
                  unoptimized
                  className="xl:w-[291px] xl:h-auto lg:w-[200px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto w-[50px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
