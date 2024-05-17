import React, { useRef } from 'react';
import '../../Navbar/Style/OurBlog.css';

const VideoPlayer = ({ pro }) => {
  const videoRef = useRef([]);
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <div
        className="HomeVideo-card"
        onMouseEnter={() => handlePlay(pro.video)}
        onMouseLeave={() => handlePause(pro.video)}
      >
        <div className="w-[350px] h-[195px] mobile:w-[255px] mobile:h-[137px]">
          <img
            src={pro.img}
            alt=""
            className="w-[350px] h-[195px] mobile:h-[131px]"
          />
        </div>
        <div className="middle">
          <video width="350" height="264" ref={videoRef} loop controls>
            <source src={pro.video} type="video/mp4" />
          </video>
        </div>
        <div className="w-[350px] h-[210px] flex-col flex items-center justify-around mobile:w-[255px]">
          <div className="mobile:w-[240px] mx-auto">
            <p
              className="font-Arial not-italic font-normal text-Paragraph3 text-secondary-darkOpacity 
              text-center mobile:text-Paragraph1"
            >
              {pro.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
