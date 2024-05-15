import React from "react";
import img1 from "../../Components/images/review-profile-pic.png";
import img2 from "../../Components/images/review-profile-pic2.png";
import ReviewCard from "./ReviewCard";
import RespondCard from "./RespondCard";
import { Icon } from "@iconify/react";

export const reviewinfo = [
  {
    id: 1,
    profileImg: img1,
    name: "Arbin Khadka",
    address: "kapan, Kathmandu",
    date: "10 sep",
    starRating: "ic:outline-star",
    paragraph:
      "I recently purchased the Acefast T2 Earbud and I must say, I'm thoroughly impressed! The sound quality is amazing and the earbud fits snugly in my ear without any discomfort. The touch controls are easy to use and the Bluetooth connectivity is seamless. The battery life is great too, lasting for hours on a single charge. Overall, a great purchase!",
    likeIocn: "fluent:thumb-like-48-regular",
    likeCount: 10,
    dislikeCount: 0,
    dislikeIocn: "fluent:thumb-like-48-regular",
  },
  {
    id: 2,
    profileImg: img1,
    name: "pradeep adhikari",
    address: "baneshwor, kathmandu",
    date: "10 sep",
    starRating: "ic:outline-star",
    paragraph:
      "I've been using the Acefast T2 Earbud for a few weeks now and I'm loving it. The noise-cancelling feature is a game-changer, allowing me to block out ambient noise and fully immerse myself in my music. The earbud is also sweat-proof, making it perfect for my workouts. The sound quality is great and the battery life is impressive too. Highly recommended!",
    likeIocn: "fluent:thumb-like-48-regular",
    likeCount: 10,
    dislikeCount: 0,
    dislikeIocn: "fluent:thumb-like-48-regular",
  },
  {
    id: 3,
    profileImg: img1,
    name: "Ritu Karki",
    address: "Mulpani, Kathmandu",
    date: "10 sep",
    starRating: "ic:outline-star",
    paragraph:
      "The Acefast T2 Earbud is a great value for money. It has all the features that you would expect from a high-end wireless earbud, including touch controls, noise-cancelling technology, and long battery life. The earbud fits comfortably in my ear and the sound quality is fantastic. I would definitely recommend this to anyone looking for a reliable and affordable wireless earbud.",
    likeIocn: "fluent:thumb-like-48-regular",
    likeCount: 10,
    dislikeCount: 0,
    dislikeIocn: "fluent:thumb-like-48-regular",
  },
];

export const respondedinfo = [
  {
    id: 1,
    profileImg: img2,
    name: "suraj subin",
    address: "anamnagar, Kathmandu",
    date: "10 sep",
    starRating: "ic:outline-star",
    paragraph:
      "The Acefast T2 Earbud is one of the best wireless earbuds that I've used. The sound quality is crystal clear and the noise-cancelling feature is amazing. The earbud is also very comfortable to wear, even for long periods of time. The battery life is great too, lasting for hours on a single charge. I highly recommend this product to anyone looking for a high-quality wireless earbud.",
    likeIocn: "fluent:thumb-like-48-regular",
    likeCount: 10,
    dislikeCount: 0,
    dislikeIocn: "fluent:thumb-like-48-regular",
  },
];
const Review = () => {
  return (
    <>
      <p className="font-Arial not-italic font-bold uppercase text-Heading text-primary text-center pt-[61px]">
        review and rating{" "}
      </p>
      <div className="flex w-[245px] mx-auto justify-between my-[18px] ">
        <Icon
          icon="ic:outline-star"
          width="41"
          height="41"
          className="cursor-pointer"
        />
        <Icon
          icon="ic:outline-star"
          width="41"
          height="41"
          className="cursor-pointer"
        />
        <Icon
          icon="ic:outline-star"
          width="41"
          height="41"
          className="cursor-pointer"
        />
        <Icon
          icon="ic:outline-star"
          width="41"
          height="41"
          className="cursor-pointer"
        />
        <Icon
          icon="ic:outline-star"
          width="41"
          height="41"
          className="cursor-pointer"
        />
      </div>
      <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize text-secondary-darkOpacity text-center">
        4.40 (10 review)
      </p>
      <div className="w-[520px] mx-auto mb-[24px] mt-[14px]">
        <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize text-primary">
          rating snapshot
        </p>
      </div>
      <div className="w-[510px] mx-auto flex justify-between mb-[34px]">
        <div className="flex flex-col">
          <div className="flex cursor-pointer">
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon icon="ic:outline-star" width="18" height="18" />
          </div>
          <div className="flex cursor-pointer mt-[16px]">
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon
              icon="ic:outline-star"
              width="18"
              height="18"
              color="#D9D9D9"
            />
          </div>
          <div className="flex cursor-pointer mt-[16px]">
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon
              icon="ic:outline-star"
              width="18"
              height="18"
              color="#D9D9D9"
            />
            <Icon
              icon="ic:outline-star"
              width="18"
              height="18"
              color="#D9D9D9"
            />
          </div>
          <div className="flex cursor-pointer mt-[16px]">
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon
              icon="ic:outline-star"
              width="18"
              height="18"
              color="#D9D9D9"
            />
            <Icon
              icon="ic:outline-star"
              width="18"
              height="18"
              color="#D9D9D9"
            />
            <Icon
              icon="ic:outline-star"
              width="18"
              height="18"
              color="#D9D9D9"
            />
          </div>
          <div className="flex cursor-pointer mt-[16px]">
            <Icon icon="ic:outline-star" width="18" height="18" />
            <Icon
              icon="ic:outline-star"
              width="18"
              height="18"
              color="#D9D9D9"
            />
            <Icon
              icon="ic:outline-star"
              width="18"
              height="18"
              color="#D9D9D9"
            />
            <Icon
              icon="ic:outline-star"
              width="18"
              height="18"
              color="#D9D9D9"
            />
            <Icon
              icon="ic:outline-star"
              width="18"
              height="18"
              color="#D9D9D9"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-[320px] h-[17px] bg-black"></div>
          <div className="w-[320px] h-[17px] bg-[#D9D9D9]"></div>
          <div className="w-[320px] h-[17px] bg-[#D9D9D9]"></div>
          <div className="w-[320px] h-[17px] bg-[#D9D9D9]"></div>
          <div className="w-[320px] h-[17px] bg-[#D9D9D9]"></div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-[40px] h-[17px] flex items-center">
            <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize text-primary ">
              7
            </p>
          </div>
          <div className="w-[40px] h-[17px] flex items-center">
            <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize text-primary ">
              4
            </p>
          </div>
          <div className="w-[40px] h-[17px] flex items-center">
            <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize text-primary ">
              0
            </p>
          </div>
          <div className="w-[40px] h-[17px] flex items-center">
            <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize text-primary ">
              0
            </p>
          </div>
          <div className="w-[40px] h-[17px] flex items-center">
            <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize text-primary ">
              0
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-w-[1280px] mt-[59px] mx-auto mb-0">
        {reviewinfo.map((info, index) => {
          return <ReviewCard info={info} key={index} />;
        })}
      </div>
      <div className="flex max-w-[1280px] mt-[60px] mx-auto mb-[100px]">
        {respondedinfo.map((list, index) => {
          return <RespondCard list={list} key={index} />;
        })}
      </div>
    </>
  );
};

export default Review;
