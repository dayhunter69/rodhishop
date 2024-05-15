import { Icon } from "@iconify/react";
import React from "react";
import img1 from "../../images/esewa.png";
import img2 from "../../images/khalti.png";
import img3 from "../../images/imepay.png";
import img4 from "../../images/Visa.png";
import img5 from "../../images/call.png";
import img6 from "../../images/tuddrom Birds copy.png";
import img7 from "../../images/Acefast.png";
import img8 from "../../images/ESR.png";
import { useLocation, useNavigate } from "react-router-dom";
import MobileFooter from "../MobileFooter/MobileFooter";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/account") return null;
  return <FooterUI />;
};

const FooterUI = () => {
  const navigate = useNavigate();

  const clickSound = () => {
    navigate("/sound");
  };
  const clickCharge = () => {
    navigate("/charge");
  };
  const clickProtection = () => {
    navigate("/protection");
  };
  const clickBlogs = () => {
    navigate("/blogpage");
  };
  const clickContactUs = () => {
    navigate("/contactus");
  };
  const clickSupport = () => {
    navigate("/support");
  };

  return (
    <>
      <MobileFooter />
      <div
        className="w-[100%] mx-auto border border-t-2
         border-primary border-x-0 border-b-0 mobile:hidden"
      >
        <div className="max-w-[1380px] flex flex-col mt-[13px] mb-0 mx-auto">
          <div className="w-[1300px] my-0 mx-auto flex justify-between">
            <div className="w-[110px] h-[198px] flex flex-col justify-around">
              <p className="font-Arial not-italic font-bold text-Paragraph1 uppercase text-primary">
                our story
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph1 uppercase text-primary">
                about us
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph1 uppercase text-primary">
                news
              </p>
              <p
                className="font-Arial not-italic font-normal text-Paragraph1 uppercase text-primary cursor-pointer"
                onClick={clickBlogs}
              >
                blogs
              </p>
              <p
                className="font-Arial not-italic font-normal text-Paragraph1 uppercase text-primary cursor-pointer"
                onClick={clickContactUs}
              >
                contact us
              </p>
            </div>
            <div className="w-[125px] h-[198px] flex flex-col justify-around">
              <p
                className="font-Arial not-italic font-bold text-Paragraph1 uppercase
                text-primary"
              >
                product
              </p>
              <p
                className="font-Arial not-italic font-normal text-Paragraph1 uppercase
                 text-primary cursor-pointer"
                onClick={clickSound}
              >
                sound
              </p>
              <p
                className="font-Arial not-italic font-normal text-Paragraph1 uppercase
                 text-primary cursor-pointer"
                onClick={clickCharge}
              >
                charge
              </p>
              <p
                className="font-Arial not-italic font-normal text-Paragraph1 uppercase
                 text-primary cursor-pointer"
                onClick={clickProtection}
              >
                protection
              </p>
              <p
                className="font-Arial not-italic font-normal text-Paragraph1 uppercase
               text-primary cursor-pointer"
              >
                lifestyle
              </p>
            </div>
            <div className="w-[340px] flex flex-col">
              <p className="font-Arial not-italic font-bold text-Heading uppercase text-primary text-center">
                yantram
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph1 capitalize text-primary text-center pt-[5px]">
                yantra for your daily life
              </p>
              <div className="flex items-center justify-between mt-[10px]">
                <div className="flex items-center justify-center w-[28.5px] h-[28.5px] cursor-pointer">
                  <Icon icon="iconoir:facebook" width="24" height="24" />
                </div>
                <div className="flex items-center justify-center w-[28.5px] h-[28.5px] cursor-pointer">
                  <Icon icon="ph:instagram-logo" width="24" height="24" />
                </div>
                <div className="flex items-center justify-center w-[28.5px] h-[28.5px] cursor-pointer">
                  <Icon icon="uit:linkedin-alt" width="24" height="24" />
                </div>
                <div className="flex items-center justify-center w-[28.5px] h-[28.5px] cursor-pointer">
                  <Icon icon="ph:tiktok-logo-light" width="24" height="24" />
                </div>
                <div className="flex items-center justify-center w-[28.5px] h-[28.5px] cursor-pointer">
                  <Icon icon="uit:twitter-alt" width="24" height="24" />
                </div>
                <div className="flex items-center justify-center w-[28.5px] h-[28.5px] cursor-pointer">
                  <Icon
                    icon="ant-design:youtube-outlined"
                    width="24"
                    height="24"
                  />
                </div>
                <div className="flex items-center justify-center w-[28.5px] h-[28.5px] cursor-pointer">
                  <Icon icon="basil:pinterest-outline" width="24" height="24" />
                </div>
                <div className="flex items-center justify-center w-[28.5px] h-[28.5px] cursor-pointer">
                  <Icon icon="ion:location-outline" width="24" height="24" />
                </div>
              </div>
              <div className="w-[304px] mt-[30px] mx-auto mb-0">
                <p className="font-Arial not-italic text-Paragraph1 uppercase text-primary text-center">
                  payment partner
                </p>
                <div className="w-[304px] h-[35px] flex items-center mt-[8px]">
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
            </div>
            <div className="w-[215px] h-[209px] flex flex-col justify-around">
              <p
                className="font-Arial not-italic font-bold text-Paragraph1 uppercase text-primary cursor-pointer"
                onClick={clickSupport}
              >
                support
              </p>
              <div className="flex items-center justify-between w-[105px] h-[25px]">
                <img src={img5} alt="" width="17" height="17" />
                <p className="font-Arial not-italic font-normal text-Paragraph1 uppercase text-primary">
                  9812345678
                </p>
              </div>
              <div className="flex items-center justify-between w-[105px] h-[25px]">
                <img src={img5} alt="" width="17" height="17" />
                <p className="font-Arial not-italic font-normal text-Paragraph1 uppercase text-primary">
                  9812345678
                </p>
              </div>

              <p className="font-Arial not-italic font-normal text-Paragraph1 uppercase text-primary">
                sinamangal-9, kathmandu
              </p>

              <p className="font-Arial not-italic font-normal text-Paragraph1 text-primary">
                hello@yantram.com
              </p>
            </div>
          </div>
          {/* No one Read This Start*/}
          <div className="w-[1300px]  h-[146px] flex justify-between mt-[30px] mb-0 mx-auto">
            <div className="w-[110px] h-[161px] flex flex-col justify-around"></div>
            <div className="w-[125px] h-[198px] flex flex-col justify-around"></div>
            <div className="w-[340px]">
              <p className="font-Arial not-italic font-normal text-Paragraph1 uppercase text-primary text-center">
                delivery partner
              </p>
            </div>
            <div className="w-[215px] h-[145px] flex flex-col justify-between">
              <p className="font-Arial not-italic font-bold text-Paragraph1 uppercase text-primary">
                no one read this
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph1 text-primary">
                Privacy Policy
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph1 text-primary">
                Term And Conditions
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph1 text-primary">
                Cookies
              </p>
            </div>
          </div>
          {/* No one Read This End */}
          <div className="w-[1300px] flex mx-auto my-0">
            <div className="w-[671px] flex items-center justify-between mx-auto my-0">
              <div className="w-[90px] h-[90px] rounded-[50%]">
                <img src={img6} alt="" width="88" height="88" />
              </div>
              <div className="w-[90px] h-[90px] rounded-[50%]">
                <img src={img7} alt="" width="88" height="88" />
              </div>
              <div className="w-[90px] h-[90px] rounded-[50%]">
                <img src={img8} alt="" width="88" height="88" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
