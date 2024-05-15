import React from "react";
import { Icon } from "@iconify/react";
import img1 from "../../images/esewa.png";
import img2 from "../../images/khalti.png";
import img3 from "../../images/imepay.png";
import img4 from "../../images/Visa.png";
import img5 from "../../images/call.png";
import img6 from "../../images/nepalcan.png";
import img7 from "../../images/tuddrom Birds copy.png";
import img8 from "../../images/Acefast.png";
import img9 from "../../images/ESR.png";
import { useNavigate } from "react-router-dom";

const MobileFooter = () => {
  const navigate = useNavigate();

  const clickContactUs = () => {
    navigate("/contactus");
  };
  const clickSupport = () => {
    navigate("/support");
  };
  const clickBlogs = () => {
    navigate("/blogpage");
  };
  return (
    <>
      <div className="max-w-[389px] w-[100%] mt-[60px] mb-[10px] mx-auto hidden mobile:block">
        <div className="font-Arial not-italic font-bold text-Subheading1 text-center uppercase text-primary">
          <p>Yantram</p>
        </div>
        <div className="mt-[10px]">
          <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-center text-secondary-darkOpacity">
            yantra for your daily life
          </p>
        </div>
        <div className="flex items-center justify-around mt-[10px]">
          <div className="w-[28.5px] h-[28.5px] flex items-center justify-center cursor-pointer">
            <Icon icon="iconoir:facebook" width="24" height="24" />
          </div>
          <div className="w-[28.5px] h-[28.5px] flex items-center justify-center cursor-pointer">
            <Icon icon="ph:instagram-logo" width="24" height="24" />
          </div>
          <div className="w-[28.5px] h-[28.5px] flex items-center justify-center cursor-pointer">
            <Icon icon="uit:linkedin-alt" width="24" height="24" />
          </div>
          <div className="w-[28.5px] h-[28.5px] flex items-center justify-center cursor-pointer">
            <Icon icon="ph:tiktok-logo-light" width="24" height="24" />
          </div>
          <div className="w-[28.5px] h-[28.5px] flex items-center justify-center cursor-pointer">
            <Icon icon="uit:twitter-alt" width="24" height="24" />
          </div>
          <div className="w-[28.5px] h-[28.5px] flex items-center justify-center cursor-pointer">
            <Icon icon="ant-design:youtube-outlined" width="24" height="24" />
          </div>
          <div className="w-[28.5px] h-[28.5px] flex items-center justify-center cursor-pointer">
            <Icon icon="basil:pinterest-outline" width="24" height="24" />
          </div>
          <div className="w-[28.5px] h-[28.5px] flex items-center justify-center cursor-pointer">
            <Icon icon="ion:location-outline" width="24" height="24" />
          </div>
        </div>
        <div className="max-w-[315px] flex justify-between mt-[20px] mx-auto">
          <div className="w-[115px] h-[150px] flex flex-col gap-y-[11px]">
            <p className="font-Arial not-italic font-bold text-Paragraph0 uppercase text-primary">
              our story
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary">
              about us
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary">
              news
            </p>
            <p
              className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary"
              onClick={clickBlogs}
            >
              blogs
            </p>
            <p
              className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary"
              onClick={clickContactUs}
            >
              contact us
            </p>
          </div>
          <div className="w-[120px] h-[150px] flex flex-col gap-y-[11px]">
            <p className="font-Arial not-italic font-bold text-Paragraph0 uppercase text-primary">
              product
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary">
              sound
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary">
              charge
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary">
              protection
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary">
              lifestyle
            </p>
          </div>
        </div>
        <div className="max-w-[315px] flex justify-between mt-[25px] mx-auto">
          <div className="h-[160px] flex flex-col gap-y-[11px]">
            <p
              className="font-Arial not-italic font-bold text-Paragraph0 uppercase text-primary"
              onClick={clickSupport}
            >
              support
            </p>
            <div className="flex items-center justify-between w-[100px] h-[25px]">
              <div className="flex items-center justify-center">
                <img src={img5} alt="" width="17" height="17" />
              </div>
              <div className="font-Arial not-italic font-normal text-Paragraph1 uppercase text-primary">
                <p>9812345678</p>
              </div>
            </div>
            <div className="flex items-center justify-between w-[100px] h-[25px]">
              <div className="flex items-center justify-center">
                <img src={img5} alt="" width="17" height="17" />
              </div>
              <p className="font-Arial not-italic font-normal text-Paragraph1 uppercase text-primary">
                9812345678
              </p>
            </div>
            <p className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary">
              sinamangal-9, kathmandu
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph0 text-primary">
              hello@yantram.com
            </p>
          </div>
          <div className="w-[120px] h-[119px] flex flex-col gap-y-[11px]">
            <p className="font-Arial not-italic font-bold text-Paragraph0 uppercase text-primary">
              no one read this
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-primary">
              Privacy Policy
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-primary">
              Term and conditions
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-primary">
              cookies
            </p>
          </div>
        </div>
        <div className="mt-[30px] mb-0 mx-auto">
          <p className="font-Arial not-italic font-bold text-Paragraph1 text-center uppercase text-primary">
            payment partner
          </p>
          <div className=" h-[35px] mt-[5px] flex items-center justify-around">
            <div className="flex items-center justify-center w-[76px] h-[30px]">
              <img src={img1} alt="" width="53" height="20" />
            </div>
            <div className="flex items-center justify-center w-[76px] h-[30px]">
              <img src={img2} alt="" width="53" height="20" />
            </div>
            <div className="flex items-center justify-center w-[76px] h-[30px]">
              <img src={img3} alt="" width="53" height="20" />
            </div>
            <div className="flex items-center justify-center w-[76px] h-[30px]">
              <img src={img4} alt="" width="53" height="22" />
            </div>
          </div>
        </div>
        <div className="mt-[15px]">
          <p className="font-Arial not-italic font-bold text-Paragraph1 text-center uppercase text-primary">
            delivery partner
          </p>
        </div>
        <div className="w-[157px] h-[81px] mt-[20px] mb-0 mx-auto">
          <img src={img6} alt="" className="nepalcanImg" />
        </div>
        <div className="flex items-center justify-around mt-[10px] mb-0 mx-auto">
          <div className="w-[79px] h-[79px] rounded-[50%]">
            <img src={img7} alt="" width="79" height="79" />
          </div>
          <div className="w-[79px] h-[79px] rounded-[50%]">
            <img src={img8} alt="" width="79" height="79" />
          </div>
          <div className="w-[79px] h-[79px] rounded-[50%]">
            <img src={img9} alt="" width="79" height="79" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
