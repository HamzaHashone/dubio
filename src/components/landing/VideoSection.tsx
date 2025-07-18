"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedButton from "../ui/AnimatedButton";
import bgwave from "../../../public/images/bgwave.png";
import bgwaveright from "../../../public/images/bgwaveright.png";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileControls, setShowMobileControls] = useState(false);
  const [justTouched, setJustTouched] = useState(false);

  // Detect if device is mobile/touch
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Hide mobile controls after delay
  useEffect(() => {
    if (showMobileControls && isPlaying) {
      const timer = setTimeout(() => {
        setShowMobileControls(false);
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showMobileControls, isPlaying]);

  // Reset justTouched flag after short delay
  useEffect(() => {
    if (justTouched) {
      const timer = setTimeout(() => {
        setJustTouched(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [justTouched]);

  // Play video on button click
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsPlaying(true); // Immediately set playing state
      setShowMobileControls(false); // Hide controls when playing starts
      videoRef.current.play().catch((error) => {
        console.error('Error playing video:', error);
        setIsPlaying(false); // Reset if play fails
      });
    }
  };

  // Pause video
  const handlePause = () => {
    if (videoRef.current) {
      setIsPlaying(false); // Immediately set paused state first
      videoRef.current.pause();
      setShowMobileControls(false); // Hide controls after pause
    }
  };

  // Handle mobile screen touch to pause directly
  const handleMobileTouch = (e: React.TouchEvent) => {
    if (isMobile && isPlaying) {
      e.preventDefault();
      e.stopPropagation();
      handlePause(); // Direct pause on touch
    }
  };

  // Handle container click - for mobile only
  const handleContainerClick = (e: React.MouseEvent) => {
    // Only handle clicks on mobile
    if (isMobile && isPlaying) {
      e.preventDefault();
      e.stopPropagation();
      handlePause();
      return;
    }
    // Desktop: do nothing, let hover handle pause button
  };

  // Listen for play/pause events to update overlay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const onPlay = () => {
      console.log('Video started playing'); // Debug log
      setIsPlaying(true);
    };
    const onPause = () => {
      console.log('Video paused'); // Debug log
      setIsPlaying(false);
    };
    // const onEnded = () => {
    //   console.log('Video ended'); // Debug log
    //   setIsPlaying(false);
    // };
    
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    // video.addEventListener('ended', onEnded);
    
    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      // video.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <div className="max-w-[1920px] mx-auto py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Wave Effects - Hidden on mobile for better performance */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        {/* Left Wave */}
        <div className="absolute -left-32 lg:-left-32 xl:-left-20 top-1/2 -translate-y-1/2 opacity-20">
          <Image
            src={bgwave}
            alt="background wave"
            width={1200}
            height={400}
            className="w-full h-auto max-w-[800px] lg:max-w-[1200px]"
          />
        </div>

        {/* Right Wave */}
        <div className="absolute -right-32 lg:-right-32 xl:-right-20 top-1/2 -translate-y-1/2 opacity-15">
          <Image
            src={bgwaveright}
            alt="background wave right"
            width={1200}
            height={600}
            className="w-full h-auto max-w-[800px] lg:max-w-[1200px]"
          />
        </div>

        {/* Additional floating elements - Only on larger screens */}
        <div className="absolute top-10 left-1/4 w-3 h-3 lg:w-4 lg:h-4 bg-purple-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-1/4 w-2 h-2 lg:w-3 lg:h-3 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 lg:w-2 lg:h-2 bg-cyan-400/40 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-[90%] sm:max-w-[85%] mx-auto relative z-10 px-4 sm:px-0">
        <div>
          {/* Teaser Coming Soon Container - Increased Size */}
          <div className="relative w-full max-w-[98%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto aspect-auto lg:aspect-auto bg-gradient-to-br from-[#2A1F3A]/90 to-[#1A1630]/90 rounded-2xl sm:rounded-3xl border border-[#7C3AED]/30 overflow-hidden backdrop-blur-sm">
            {/* Enhanced Background Gradient Effects - Responsive sizing */}
            <div className="absolute inset-0">
              {/* Multiple layered gradients for depth */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
              <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/15 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-blue-500/15 rounded-full blur-xl sm:blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-cyan-400/10 rounded-full blur-lg sm:blur-xl"></div>

              {/* Moving gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-center">
              {/* Header Text */}
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-8 px-2">
                See Dubio in Action
              </h2>

              {/* Enhanced Video Player with Controls - Increased Size */}
              <div
                className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl h-[240px] sm:h-full aspect-video bg-gradient-to-br from-[#0a0724] via-[#1a1530] to-[#0a0724] rounded-xl sm:rounded-2xl border border-[#7C3AED]/40 mb-6 sm:mb-8 flex items-center justify-center overflow-hidden shadow-xl sm:shadow-2xl shadow-purple-500/20"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchEnd={handleMobileTouch}
                onClick={handleContainerClick}
              >
                <video
                  ref={videoRef}
                  src="/images/dubiovideos.mp4"
                  playsInline
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-75"
                >
                  <source src="/images/dubiovideos.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Custom Play/Pause Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-20" onClick={handlePlay}>
                    <div className="bg-[#7C3AED] rounded-full md:p-8 p-3 flex items-center justify-center">
                      {/* Play Icon */}
                      <div
                        className="w-0 h-0 border-l-[25px] md:border-l-[40px] border-l-white border-t-[14px] md:border-t-[24px] border-t-transparent border-b-[14px] md:border-b-[24px] border-b-transparent"
                        style={{ marginLeft: '6px' }}
                      ></div>
                    </div>
                  </div>
                )}
                {/* Pause button - Desktop only */}
                {isPlaying && !isMobile && isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-20" onClick={handlePause}>
                    <div className="bg-[#7C3AED] rounded-full md:p-8 p-4 flex items-center justify-center">
                      {/* Pause Icon */}
                      <div className="flex space-x-2">
                        <div className="md:w-3 w-1 h-5 md:h-8 bg-white rounded-sm"></div>
                        <div className="md:w-3 w-1 h-5 md:h-8 bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom CTA Overlay */}
                {!isMobile && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                  <div className="text-center">
                    <p className="text-white text-sm sm:text-base font-semibold mb-1">
                      Join the Dubio Waitlist →{" "}
                      <span className="text-purple-400">
                        Early Access Coming Soon
                      </span>
                    </p>
                  </div>
                </div>
                )}

                {/* Enhanced Animated pulse effects - Responsive */}
                <div className="absolute inset-0 border border-[#7C3AED]/40 sm:border-2 rounded-xl sm:rounded-2xl animate-pulse"></div>
              </div>

              {/* Tagline - Responsive */}
              <p className="text-white/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-md px-2">
                Your voice. Any language. One click.
              </p>

              {/* CTA Button */}
              <div className="flex items-center justify-center mb-4 sm:mb-0">
                <Button className="bg-transparent hover:bg-transparent p-0 scale-90 sm:scale-100">
                  <AnimatedButton onClick={() => {
                // Scroll to the footer smoothly
                const footer = document.querySelector("footer");
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" });
                }
              }} />
                </Button>
              </div>

              {/* Additional Info - Responsive */}
              <p className="text-white/60 text-xs sm:text-sm mt-4 sm:mt-6 max-w-xs sm:max-w-lg px-2 leading-relaxed">
                Experience the magic of AI-powered dubbing that preserves your
                unique voice across any language. Coming soon to revolutionize
                content creation.
              </p>
            </div>

            {/* Enhanced Decorative Elements - Responsive */}
            <div className="absolute top-3 sm:top-6 right-3 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#7C3AED] rounded-full animate-ping shadow-md sm:shadow-lg shadow-purple-500/50"></div>
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse shadow-md sm:shadow-lg shadow-blue-500/50"></div>
            <div className="absolute top-1/3 left-4 sm:left-8 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-bounce hidden sm:block"></div>
            <div className="absolute bottom-1/3 right-4 sm:right-8 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-ping hidden sm:block"></div>

            {/* Floating orbs - Hidden on mobile */}
            <div className="absolute top-4 left-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-sm animate-pulse hidden md:block"></div>
            <div className="absolute bottom-4 right-1/4 w-5 h-5 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-md animate-bounce hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
