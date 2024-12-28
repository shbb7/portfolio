import React, { useEffect, useRef } from 'react';
import { backgroundVideo } from '../constants/assets';

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Log the video path
      console.log('Video path:', backgroundVideo);
      
      // Add event listeners for debugging
      video.addEventListener('error', (e) => {
        console.error('Video error:', e.target.error);
      });

      video.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
      });

      // Try to play the video
      video.play().catch(error => {
        console.error('Video play error:', error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-dark-300">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute h-full w-full object-cover opacity-50"
      >
        <source 
          src={backgroundVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-400/80 to-dark-300/80 z-10" />
    </div>
  );
};

export default VideoBackground;