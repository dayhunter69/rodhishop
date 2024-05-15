import React, { useRef } from "react";
import "../../Navbar/Style/OurBlog.css";

const Video = ({ pro }) => {
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
        <div className="w-[350px] h-[264px] mobile:w-[255px] mobile:h-[197px]">
          <img
            src={pro.img}
            alt=""
            className="w-[350px] h-[264px] mobile:h-[191px]"
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
          <div
            className="w-[140px] h-[66px] flex items-center justify-center 
               mb-0 mx-auto mobile:w-[107px] "
          >
            <img src={pro.bottomImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
