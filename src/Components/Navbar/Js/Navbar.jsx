import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import 'Components/Navbar/Style/Navbar.css';
import Profile from './Profile';
import Logo from 'Components/images/Logo.png';
import HamburgerMenuBar from 'Components/Home/HamburgerMenuBar/HamburgerMenuBar';
import MenuHoverUI from '../MenuHoverUI';

import {
  Badge,
  Box,
  ClickAwayListener,
  Popper,
  Tooltip,
  tooltipClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { headerMenuList } from '../setup';

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'black',
    boxShadow: theme.shadows[1],
    // border: "1px solid black",
    fontSize: 11,
  },
}));

const CartBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -6,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: 'red',
    color: 'white',
  },
}));
const ProfileBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 4,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: 'red',
    color: 'white',
  },
}));
const WishListBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -4,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: 'red',
    color: 'white',
  },
}));

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === '/account') return null;
  return <NavbarUI />;
};

const NavbarUI = ({}) => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [visib, setVisib] = useState(true);
  const [menuhover, setMenuHover] = useState('');
  const [openmenu, setOpenMenu] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleClickMe = () => {
    setShowSearchBar((prev) => !prev);
  };

  const handleSearch = (e) => {
    console.log('Search is >>', e.target.value);
  };

  const handleClickUserAccount = () => {
    navigate('/account');
  };
  return (
    <>
      <div
        className="flex h-[100px] bg-white shadow-custom3 z-[3]
          mobile:flex mobile:items-center mobile:justify-center mobile:h-[60px]"
      >
        <div className="w-[93%] mx-auto my-0">
          <nav className="flex items-center justify-between">
            <HamburgerMenuBar
              openmenu={openmenu}
              setOpenMenu={setOpenMenu}
              setVisib={setVisib}
              visib={visib}
            />
            <div
              className="w-[122px] mobile:w-[120px] h-[45px] flex items-center mobile:items-center 
               mobile:justify-center mobile:hidden"
            >
              <NavLink to="/">
                <img src={Logo} alt="" className="mobile:w-[115px] w-[118px]" />
              </NavLink>
            </div>
            {!openmenu && !showSearchBar ? (
              <div className="hidden mobile:block">
                <NavLink to="/">
                  <img
                    src={Logo}
                    alt=""
                    className="mobile:w-[115px] w-[118px]"
                  />
                </NavLink>
              </div>
            ) : null}
            {/* Main_Menu_Start */}
            {!showSearchBar ? (
              <Box
                className="flex items-center justify-center h-[100px] mobile:hidden"
                onMouseEnter={(e) => {
                  setAnchorEl(e.currentTarget);
                }}
                onMouseLeave={(e) => {
                  if (window.localStorage.isNavbarItemSelected) return;
                  setAnchorEl(null);
                  setMenuHover('');
                }}
              >
                {headerMenuList.map((item) => {
                  return (
                    <div
                      key={item.value}
                      className={`${
                        menuhover === item.value
                          ? 'h-[100px] flex cursor-pointer px-[22px] py-[40px] border-b-[3px] border-solid border-primary font-Arial not-italic font-normal text-Paragraph2 text-primary uppercase'
                          : 'font-Arial not-italic font-normal text-Paragraph2 text-primary uppercase h-[100px] flex cursor-pointer px-[22px] py-[40px]'
                      }`}
                      onMouseEnter={(e) => {
                        window.localStorage.isNavbarItemSelected = '';
                        setMenuHover(item.value);
                      }}
                    >
                      <NavLink to={item.url}>{item.title}</NavLink>
                    </div>
                  );
                })}
                <Popper
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  placement="bottom"
                  sx={{ zIndex: 100, pt: 0.1, boxShadow: 3 }}
                >
                  <MenuHoverUI
                    menuHover={menuhover}
                    setMenuHover={setMenuHover}
                    handleClose={() => {
                      window.localStorage.isNavbarItemSelected = '';
                      setMenuHover('');
                    }}
                  />
                </Popper>
              </Box>
            ) : (
              <ClickAwayListener onClickAway={handleClickMe}>
                <Box
                  flex={1}
                  className="relative flex items-center justify-end cursor-pointer mr-[20px] mobile:mr-0 "
                  // sx={{ pl: "150px" }}
                >
                  <input
                    type="text"
                    placeholder="explore here..."
                    className="bg-white outline-0 pl-[40px] rounded-[10px] w-[100%] h-[50px] border-solid 
                    border border-secondary-extraDarkOpacity font-Arial not-italic font-normal text-Paragraph1 uppercase
                    mobile:h-[33px] mobile:font-bold mobile:text-[8px] mobile:pl-[12px] mobile:w-[90%] mobile:rounded-[4px]"
                    onChange={handleSearch}
                  />
                  <Icon
                    icon="ic:outline-search"
                    onClick={handleClickMe}
                    className="absolute right-[21px] w-[45px] h-[45px] text-secondary-mediumOpacity 
                      mobile:w-[24px] mobile:h-[24px] mobile:right-[1px]"
                  />
                </Box>
              </ClickAwayListener>
            )}
            {/*Right_Menu_start */}
            <Box className="flex h-[100px] mobile:h-[48px] mobile:mr-[7px]">
              {!showSearchBar && (
                <div
                  className="mobile:p-0 pr-[25px] flex items-center justify-center cursor-pointer pl-0"
                  onClick={handleClickMe}
                >
                  <Icon
                    icon="ic:outline-search"
                    className="w-[34px] h-[34px] mobile:w-[22px]  mobile:h-[22px]"
                  />
                </div>
              )}
              <div className="dropdown-menu">
                <ProfileBadge badgeContent={1}>
                  <Icon
                    icon="material-symbols:person-outline"
                    width="34"
                    height="34"
                    onClick={handleClickUserAccount}
                  />
                </ProfileBadge>
                <div className="dropdown-profile">
                  <Profile />
                </div>
              </div>
              <div className="mobile:pl-[13px] mobile:pr-[0px] pr-[25px] flex items-center justify-center cursor-pointer">
                <WishListBadge badgeContent={2}>
                  <Icon
                    icon="mdi:cards-heart-outline"
                    width="34"
                    height="34"
                    className="mobile:w-[22px] mobile:h-[22px]"
                  />
                </WishListBadge>
              </div>
              <div className="dropdown-menu2">
                <BootstrapTooltip title="Oops, It's empty">
                  <CartBadge badgeContent={3}>
                    <Icon
                      icon="bi:cart-check"
                      width="34"
                      height="34"
                      className="mobile:w-[22px] mobile:h-[22px]"
                    />
                  </CartBadge>
                </BootstrapTooltip>
              </div>
            </Box>
            {/*Right_Menu_End */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
