import React from 'react';
import '../../../Navbar/Style/SidebarPage.css';
import Logo from '../../../images/Logo.png';
import img1 from '../../../images/cable.png';
import img2 from '../../../images/charger.png';
import img3 from '../../../images/powerbank.png';
import img4 from '../../../images/qi charger.png';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const SidebarPageData = [
  {
    id: 1,
    Img: img1,
    MenuName: 'cable',
  },
  {
    id: 2,
    Img: img2,
    MenuName: 'wall charger',
  },
  {
    id: 3,
    Img: img3,
    MenuName: 'power bank',
  },
  {
    id: 4,
    Img: img4,
    MenuName: 'qi charger',
  },
];
const SidebarChargePage = () => {
  return (
    <>
      <div className="SidebarPage-Wrapper">
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
          <p>Charge</p>
        </div>
        <div className="SidebarPage-Container">
          {SidebarPageData.map((list, index) => {
            return (
              <div key={index}>
                <div className="SidebarPage-Icon-Btn">
                  <div className="SidebarPage-Box">
                    <img src={list.Img} alt="" width="44" height="44" />
                  </div>
                  <div className="SidebarPage-Name">
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

export default SidebarChargePage;
