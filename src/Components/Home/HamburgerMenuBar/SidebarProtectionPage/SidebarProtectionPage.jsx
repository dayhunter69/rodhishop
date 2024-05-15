import React from 'react';
import '../../../Navbar/Style/SidebarPage.css';
import Logo from '../../../images/Logo.png';
import img1 from '../../../images/phone case.png';
import img2 from '../../../images/screen protector.png';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const SidebarPageData = [
  {
    id: 1,
    Img: img1,
    MenuName: 'phone case',
  },
  {
    id: 2,
    Img: img2,
    MenuName: 'screen protector',
  },
];
const SidebarProtectionPage = () => {
  return (
    <>
      <div className="SidebarProtectionPage-Wrapper">
        <div className="SidebarPage-Logo">
          <NavLink to="/">
            <img src={Logo} alt="" className="SidebarPage-Yantram-Logo" />
          </NavLink>
        </div>
        <div className="Main_Menu_Div">
          <div className="Left_Arrow_Container">
            <Icon icon="icons8:arrows-long-left" width="32" />
          </div>
          <div className="SidebarPage_Main_Menu_Container">
            <p>main menu</p>
          </div>
        </div>
        <div className="SidebarPage-Product-Name">
          <p>protection</p>
        </div>
        <div className="SidebarProtectionPage-Container">
          {SidebarPageData.map((list, index) => {
            return (
              <div key={index}>
                <div className="SidebarProtectionPage-Icon-Btn">
                  <div className="SidebarProtectionPage-Box">
                    <img src={list.Img} alt="" width="44" height="44" />
                  </div>
                  <div className="SidebarProtctionPage-Name">
                    <p>{list.MenuName}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SidebarProtectionPage;
