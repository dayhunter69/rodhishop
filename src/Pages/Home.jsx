import React from 'react';
import '../index.css';
import Banner from 'Components/Navbar/Js/Banner';
import ShopFilter from 'Components/Home/Shop-Filter';
// import SeamlessShopping from 'Components/Home/Seamless-Shopping/SeamlessShopping';
// import OurBrand from 'Components/Home/Our Brand/OurBrand';
// import ShopAll from 'Components/Home/Shop All/ShopAll';
// import Series from 'Components/Home/Series-Section/Series';
// import TrendingProduct from 'Components/Home/TrendingProduct/TrendingProduct';
// import HomeChargerSection from 'Components/Home/Home-Charger-Section';
// import HomeWallCharger from 'Components/Home/HomeWallcharger/HomeWallcharger';
// import HomeAccessories from 'Components/Home/HomeAccessories/HomeAccessories';
// import HomePhoneHolder from 'Components/Home/HomePhoneHolder/HomePhoneHolder';
// import ProductSeries from 'Components/Home/ProductSeries/ProductSeries';
// import HomeVideo from 'Components/Home/HomeVideo/HomeVideo';
// import OurStory from 'Components/Home/OurStory/OurStory';
import OurBlog from 'Components/Home/OurBlogs/OurBlog';
import Support from 'Components/Home/Support/Support';
import HowTo from 'Components/Home/HowTo/HowTo';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import ExclusiveDiscount from './ExclusiveDiscountPage/discount';

// import NewsLetter from "Components/Home/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <>
      <Banner />
      <ShopFilter />
      {/* <SeamlessShopping /> */}
      {/* <OurBrand /> */}
      {/* <ShopAll /> */}
      {/* <Series /> */}
      <HowTo />

      {/* <TrendingProduct /> */}
      {/* <HomeChargerSection /> */}
      {/* <HomeWallCharger /> */}
      {/* <HomeAccessories /> */}
      {/* <HomePhoneHolder /> */}
      {/* <ProductSeries /> */}
      {/* <HomeVideo /> */}
      {/* <OurStory /> */}
      <ExclusiveDiscount />
      <PhotoGallery />
      <Support />
      <OurBlog />
      {/* <NewsLetter /> */}
    </>
  );
};
export default Home;
