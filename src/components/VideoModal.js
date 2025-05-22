import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ videoUrl, onClose, thumbnail }) => {
  const videoRef = useRef(null);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto pause when closing
  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-4 rounded-2xl w-[90%] max-w-xl relative shadow-xl animate-fade-in"
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <video
          ref={videoRef}
          controls
          autoPlay
          className="w-full rounded-lg mt-2"
          poster={thumbnail}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
