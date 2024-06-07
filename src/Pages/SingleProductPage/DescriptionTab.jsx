import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

const contentData = [
  {
    subtitle: 'Simple Setup, Easy to Use',
    description:
      "With just three easy steps, you'll have your studio box ready to go: expand it, pull down the support plate from the top, plug it in, and you're all set to take professional-quality photos with your mobile phone.",
    src: 'https://giphy.com/embed/2FpSKsvx3RjeWfaOwa',
  },
  {
    subtitle:
      'Adjustable Lighting: White, Yellow, or Both, with 10 Brightness Levels',
    description:
      'Choose the right lighting for your products from three options: white, warm yellow, or a mix of both. Adjust brightness easily using the USB-connected controller, with 10 levels for each lighting choice.',
    src: 'https://rodhishop.b-cdn.net/DSC09601.webp',
  },
  {
    subtitle: 'Personalize Your Background with 12 Color Options',
    description:
      "6 PVC backdrops with 12 colors let you choose the perfect background to complement your product's color scheme.",
    src: 'https://giphy.com/embed/2FpSKsvx3RjeWfaOwa',
  },
  {
    subtitle: 'Capture Multi-angle Shots ',
    description:
      'Easily photograph your products from various angles using the top and open sides of the box, giving you the flexibility to choose the perfect angle for showcasing your products. ',
    src: 'https://giphy.com/embed/zBHLiiJKbirY9vdrRM',
  },
  {
    subtitle: 'Minimize Reflection with Diffuser Cloth',
    description:
      'For highly reflective products, utilize the included diffuser cloth at the top to reduce unwanted reflections and achieve optimal image quality. ',
    src: 'https://giphy.com/embed/zBHLiiJKbirY9vdrRM',
  },
  {
    subtitle: 'Built to Last',
    description:
      'Superior Quality Materials, Strong Stitching, and Durable Finishing',
    src: 'https://giphy.com/embed/zBHLiiJKbirY9vdrRM',
  },
  {
    subtitle: 'Versatile open Space: Ideal for Capturing Various Products',
    description:
      'With 40cm of open space, you can photograph a wide range of products including Shoes,Jewellery, Watches, Handbags, Sunglasses, Hats, Small electronic devices, Stationery items, Cosmetics,Small home decor items,Food and Culinary, And many more.',
    src: 'https://giphy.com/embed/zBHLiiJKbirY9vdrRM',
  },
  {
    subtitle: 'Portable, Foldable, and Easy to Carry Anywhere',
    description:
      'With its lightweight and foldable design, this studio effortlessly fits into the included carry bag. Take it with you wherever you go and set up for shooting on any flat surface',
    src: 'https://giphy.com/embed/aY1rt9MXcUIMAeSMeE',
  },
  {
    subtitle: "Inside the Package, You'll Receive:",
    description:
      'For highly reflective products, utilize the included diffuser cloth at the top to reduce unwanted reflections and achieve optimal image quality. ',
    src: 'https://giphy.com/embed/zBHLiiJKbirY9vdrRM',
  },
];

const ContentBlock = ({ title, subtitle, description, src, reverse }) => {
  const isImage = src.split('/').at(-1).includes('.');

  return (
    <div
      className={`flex px-20 mt-10 pb-10 ${reverse ? 'flex-row-reverse' : ''}`}
    >
      <div className="mobile:w-1/2 w-full px-10 text-center items-center justify-center pt-[7rem]">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <h3 className="text-2xl font-semibold mb-6">{subtitle}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="mobile:w-1/2 w-full mx-auto">
        {isImage ? (
          <div className="flex justify-center items-center rounded-xl">
            <img
              src={src}
              alt="Content"
              className="w-[470px] h-[470px] rounded-xl object-cover"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center rounded-xl">
            <iframe
              src={src}
              frameBorder="0"
              className="giphy-embed pointer-events-none w-[470px] h-[470px] rounded-xl"
              allowFullScreen
              title="Giphy GIF"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

const DescriptionTab = () => {
  return (
    <>
      {contentData.map((content, index) => (
        <ContentBlock
          key={index}
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          src={content.src}
          type={content.type}
          reverse={index % 2 !== 0}
        />
      ))}
    </>
  );
};

export default DescriptionTab;
