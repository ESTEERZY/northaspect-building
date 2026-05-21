import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Manually force muted to fix React's muted prop bug on some browsers
    video.muted = true;

    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay blocked — video stays hidden, dark bg shown
      });
    };

    if (video.readyState >= 3) {
      tryPlay();
    } else {
      video.addEventListener('canplay', tryPlay, { once: true });
    }

    return () => video.removeEventListener('canplay', tryPlay);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
    >
      <style>{`
        .animate-kinetic-zoom {
          animation: kineticZoom 30s linear infinite alternate;
          will-change: transform;
        }
        @keyframes kineticZoom {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.08) translate(-1%, -0.5%); }
        }
        .hero-yt-wrapper {
          position: absolute;
          inset: -10%;
          width: 120%;
          height: 120%;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-yt-wrapper iframe {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: none;
        }
      `}</style>

      {/* === YouTube Background Video === */}
      {/* 
        VIDEO ID TO SWAP: Replace the ?v= value in the src below with any YouTube
        construction timelapse ID. Current video: Custom home construction timelapse.
        Parameters: autoplay=1, mute=1, loop=1, controls=0, start=8 (skips into action)
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none bg-[#0c0c0c]">
        {/* YouTube IFrame — scales to fill the full hero */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(177.78vh, 100vw)',
            height: 'max(56.25vw, 100vh)',
            opacity: 0.45,
            pointerEvents: 'none',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/T1Wc37P-9sM?autoplay=1&mute=1&loop=1&playlist=T1Wc37P-9sM&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=15&enablejsapi=1"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              pointerEvents: 'none',
            }}
            title="hero-bg"
          />
        </div>

        {/* Fallback video (plays if YouTube is blocked or iframe fails) */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loop
          muted
          playsInline
          autoPlay
          style={{ pointerEvents: 'none' }}
        >
          <source src="https://videos.pexels.com/video-files/7964907/7964907-hd_1280_720_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/6985306/6985306-hd_1280_720_25fps.mp4" type="video/mp4" />
        </video>

        {/* Rich gradient overlay for premium legibility and blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/80 via-[#0c0c0c]/20 to-[#0c0c0c] z-[1]" />
      </div>

      {/* Centered content wrapper */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          
          {/* The Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.02] animate-heading-breath">
            Structural Integrity.<br />
            <span className="text-gold">Residential Form.</span>
          </h1>

          {/* The Central Accent Line */}
          <div className="h-[2px] bg-gold mx-auto my-6 w-32" />

          {/* The Subtext Paragraph */}
          <p className="text-xl lg:text-2xl font-medium text-white/85 max-w-2xl mx-auto leading-relaxed animate-subtext-breath">
            Masterworks of modern living. Unparalleled craftsmanship. A seamless architectural journey.
          </p>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-charcoal to-transparent z-[2]" />
    </section>
  );
};

export default Hero;