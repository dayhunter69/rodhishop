import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from 'Components/Navbar/Js/Navbar';
import ScrollToTop from 'Components/Home/ScrollToTop/ScrollToTop';
import Home from 'Pages/Home';
import SupportTicket from './Pages/Support/SupportTicket/SupportTicket';
import DontWorry from './Pages/Support/DontWorry/DontWorry';
import CancelOrder from './Pages/Support/CancelOrder/CancelOrder';
import WarrantyFAQs from './Pages/Support/WarrantyFAQs/WarrantyFAQs';
import SoundPage from 'Pages/SoundPage';
import ChargePage from 'Pages/ChargePage';
import ProtectionPage from 'Pages/ProtectionPage';
import LifeStylePage from 'Pages/LifeStylePage';
import EarphonePage from 'Pages/EarphonePage';
import EarbudPage from 'Pages/EarbudPage';
import HeadphonePage from 'Pages/HeadphonePage';
import CablePage from 'Pages/CablePage';
import WallChargerPage from 'Pages/WallChargerPage';
import PowerBankPage from 'Pages/PowerBankPage';
import QiChargerPage from 'Pages/QiChargerPage';
import HolderPage from 'Pages/HolderPage';
import WearPage from 'Pages/WearPage';
import ApplePage from 'Pages/ApplePage';
import SamsungPage from 'Pages/SamsungPage';
import ProfilePage from 'Pages/LoginPage';
import CheckOut from 'Pages/CheckOutPage';
import UserAccountHome from 'Pages/UserAccount';
import MyCartContainer from 'Pages/MyCart';
import SingleProductPage from 'Pages/SingleProductPage';
import RequestForWarranty from 'Pages/RequestForWarranty';
import BlogPage from 'Pages/BlogPage';
import ContactUs from 'Pages/ContactUs';
import SupportPage from 'Pages/Support';
import Footer from 'Components/Home/Footer/Footer';
import HuaweiPage from 'Pages/HuaweiPage';
import GooglePage from 'Pages/GooglePage';
import VideoAccordion from 'Pages/HowTo/HowTo';

const App = () => {
  const location = useLocation();
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: location.pathname.includes('/account')
          ? 'auto'
          : 'max-content auto',
        overflow: 'hidden',
        height: '100vh',
      }}
    >
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sound" element={<SoundPage />} />
          <Route path="/explorehowto" element={<VideoAccordion />} />
          <Route path="/charge" element={<ChargePage />} />
          <Route path="/protection" element={<ProtectionPage />} />
          <Route path="/lifestyle" element={<LifeStylePage />} />
          <Route path="/earphone" element={<EarphonePage />} />
          <Route path="/earbud" element={<EarbudPage />} />
          <Route path="/headphone" element={<HeadphonePage />} />
          <Route path="/cable" element={<CablePage />} />
          <Route path="/wallcharger" element={<WallChargerPage />} />
          <Route path="/powerbank" element={<PowerBankPage />} />
          <Route path="/qicharger" element={<QiChargerPage />} />
          <Route path="/holder" element={<HolderPage />} />
          <Route path="/wear" element={<WearPage />} />
          <Route path="/apple" element={<ApplePage />} />
          <Route path="/samsung" element={<SamsungPage />} />
          <Route path="/huawei" element={<HuaweiPage />} />
          <Route path="/google" element={<GooglePage />} />
          <Route path="/login" element={<ProfilePage />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/account" element={<UserAccountHome />} />
          <Route path="/cart" element={<MyCartContainer />} />
          <Route path="/productpage" element={<SingleProductPage />} />
          <Route path="/warrantyrequest" element={<RequestForWarranty />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/ticket" element={<SupportTicket />} />
          <Route path="/ticketdontworry" element={<DontWorry />} />
          <Route path="/cancelorder" element={<CancelOrder />} />
          <Route path="/warrantyfaq" element={<WarrantyFAQs />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Box>
  );
};

export default App;
