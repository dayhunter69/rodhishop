import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../Navbar/Style/HamburgerMenuBar.css';
import Logo from '../../../Components/images/Logo.png';
import SidebarSoundPage from './SidebarSoundPage/SidebarSoundPage';
// import SidebarChargePage from '../HamburgerMenuBar/SidebarChargePage/SidebarChargePage';
// import SidebarProtectionPage from './SidebarProtectionPage/SidebarProtectionPage';
// import SidebarLifeStylePage from './SidebarLifeStylePage/SidebarLifeStylePage';
import { Box, ClickAwayListener } from '@mui/material';
import { Icon } from '@iconify/react';

export const HamburgerMenuList = [
  {
    id: 1,
    MenuName: 'Music',
    value: 'music',
  },
  {
    id: 2,
    MenuName: 'Charge',
    value: 'charge',
  },
  {
    id: 3,
    MenuName: 'Protection',
    value: 'protection',
  },
  {
    id: 4,
    MenuName: 'Lifestyle',
    value: 'lifestyle',
  },
  {
    id: 5,
    MenuName: 'Brand',
    value: 'brand',
  },
  {
    id: 6,
    MenuName: 'Support',
    value: 'support',
  },
];

const HamburgerMenuBar = ({ openmenu, setOpenMenu }) => {
  // const myref = useRef();
  const [tab, setTab] = useState('');

  const handleClickMe = (info) => {
    setTab(info);
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        setOpenMenu(false);
        setTab('');
      }}
    >
      <Box className="hidden mobile:flex">
        <div
          className="w-[30px] h-[30px] hidden mobile:flex mobile:items-center mobile:justify-center"
          onClick={() => setOpenMenu(true)}
        >
          <Icon
            icon="ic:baseline-menu"
            width="29"
            height="29"
            color="rgba(0, 0, 0, 0.63)"
          />
        </div>
        <>
          {openmenu && !tab ? (
            <div className="HamburgerMenuBar-Container">
              <div className="MenuBar-Button-Container">
                <div className="HamburgerMenuBar-Logo">
                  <NavLink to="/">
                    <img
                      src={Logo}
                      alt=""
                      className="HamburgerMenuBar-Yantram-Logo"
                    />
                  </NavLink>
                </div>
                <div className="Parent-Button-div">
                  {HamburgerMenuList.map((info, index) => {
                    return (
                      <div key={index}>
                        <div className="Child-Button-div">
                          <button
                            className="HamburgerMenuBar-Button"
                            onClick={() => handleClickMe(info.value)}
                          >
                            {info.MenuName}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="HamburgerMenuBar-Register-Btn">
                  <button className="HamburgerMenuBar-Last-Button">
                    sign in / register
                  </button>
                </div>
              </div>
            </div>
          ) : openmenu && !!tab ? (
            <>
              {tab === 'music' && (
                <SidebarSoundPage tab={tab} setTab={setTab} />
              )}
            </>
          ) : null}
          {/* {(() => {
            if (tab === "music") {
              return ;
            } else if (tab === "charge") {
              return <SidebarChargePage />;
            } else if (tab === "protection") {
              return <SidebarProtectionPage />;
            } else if (tab === "lifestyle") {
              return <SidebarLifeStylePage />;
            }
          })()} */}
        </>
      </Box>
    </ClickAwayListener>
  );
};

export default HamburgerMenuBar;
