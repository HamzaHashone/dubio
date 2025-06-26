import React from "react";
import T1 from "../../public/images/t1.png";
import T2 from "../../public/images/icon2.png";
import T3 from "../../public/images/T3.png";
import T4 from "../../public/icon4.png";
import TestimonialCard from "./landing/Testimonial Card";
const ResilienceSection = () => {
  const cardData = [
    {
      image: T1,
      title: "End-to-End Dubbing",
      description:
        "Smart infrastructure to keep creators stress-free, even on viral days",
    },
    {
      image: T2,
      title: "Upload Size Handling",
      description:
        "4GB+ Files · Chunked Upload · S3 Multipart",
    },
    {
      image: T3,
      title: "Voice Clone Ethics",
      description:
        "Consent-Only · 60s Max Sample · Encrypted + Erasable",
    },
    {
      image: T4,
      title: "Viral Load Spikes",
      description:
        "Autoscaling · Spot Instances · Budget Capping",
    },
  ];
  return (
    // <div className="max-w-[1920px] mx-auto py-20 relative">
    //   <div className="max-w-[85%] mx-auto">
    //     <h1 className="text-white text-5xl text-center font-bold mb-6">
    //       Built-In Resilience — At a Glance
    //     </h1>
    //     <p className="text-white/80 text-center text-xl font-normal max-w-3xl mx-auto mb-16">
    //       Smart infrastructure to keep creators stress-free, even on viral days
    //     </p>
    //     <div className="flex items-center justify-between gap-5">
    //       {cardData.map((card, index) => (
    //         <TestimonialCard
    //           key={index}
    //           image={card.image}
    //           title={card.title}
    //           description={card.description}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="w-full py-12 md:py-16 lg:py-20 relative">
    <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
          Built-In Resilience — At a Glance
        </h1>
        <p className="text-white/80 text-sm sm:text-base font-normal max-w-3xl mx-auto leading-relaxed">
          Smart infrastructure to keep creators stress-free, even on viral days
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
        {cardData.map((card, index) => (
          <TestimonialCard key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default ResilienceSection;
