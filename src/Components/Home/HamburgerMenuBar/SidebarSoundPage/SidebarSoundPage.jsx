import React from 'react';
import '../../../Navbar/Style/SidebarPage.css';
import Logo from '../../../images/Logo.png';
import img1 from '../../../images/earphone.png';
import img2 from '../../../images/earbud.png';
import img3 from '../../../images/headphone.png';
import img4 from '../../../images/speaker.png';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const SidebarPageData = [
  {
    id: 1,
    Img: img1,
    MenuName: 'earphone',
  },
  {
    id: 2,
    Img: img2,
    MenuName: 'earbud',
  },
  {
    id: 3,
    Img: img3,
    MenuName: 'headphone',
  },
  {
    id: 4,
    Img: img4,
    MenuName: 'speaker',
  },
];
const SidebarSoundPage = ({ tab, setTab }) => {
  return (
    <>
      <div className="SidebarPage-Wrapper">
        <div className="SidebarPage-Logo">
          <NavLink to="/">
            <img src={Logo} alt="" className="SidebarPage-Yantram-Logo" />
          </NavLink>
        </div>
        <div className="Main_Menu_Div" onClick={() => setTab('')}>
          <div className="Left_Arrow_Container">
            <Icon icon="icons8:arrows-long-left" width="32" />
          </div>
          <div className="SidebarPage_Main_Menu_Container">
            <p>main menu</p>
          </div>
        </div>
        <div className="SidebarPage-Product-Name">
          <p>Sound</p>
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

export default SidebarSoundPage;
