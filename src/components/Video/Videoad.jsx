import React, { useEffect, useState } from "react";

const VideoAd = () => {
  const [isVisible, setIsVisible] = useState(true); // Set to true to show the ad every time

  const closeVideoAd = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.8)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            controls
            autoPlay
            muted // Changed to false for audio playback
            onEnded={closeVideoAd}
            style={{
              maxWidth: "80vw",
              maxHeight: "80vh",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
            }}
          >
            <source src="./public/ads.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button
            onClick={closeVideoAd}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "2rem", // Larger button font size for visibility
              background: "none",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default VideoAd;
