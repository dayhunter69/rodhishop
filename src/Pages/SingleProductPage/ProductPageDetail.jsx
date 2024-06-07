import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// import {
//   Avatar,
//   Box,
//   ClickAwayListener,
//   Divider,
//   ListItemIcon,
//   Menu,
//   MenuItem,
//   Tooltip,
//   tooltipClasses,
// } from '@mui/material';
// import { Logout, PersonAdd, Settings } from '@mui/icons-material';

const ProductPageDetail = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleClick = () => {
    navigate('/checkout');
  };
  // const handleTooltipOpen = () => {
  //   setOpen(true);
  // };
  // const handleTooltipClose = () => {
  //   setOpen(false);
  // };
  // const handleShareClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <>
      <div className="w-[413px] h-[462px] flex flex-col items-center justify-around">
        <div className="w-[334.79px]">
          <p className="font-Arial not-italic font-normal text-Heading text-primary">
            Puluz 40cm Foldable and Portable Studio Box with Ring Light
          </p>
        </div>
        {/* <div className="flex items-center w-[334.79px]">
          <div className="w-[106px] flex justify-between">
            <div className="w-[20px] h-[20px] cursor-pointer">
              <Icon icon="ic:sharp-star-purple500" width="18" height="18" />
            </div>
            <div className="w-[20px] h-[20px] cursor-pointer">
              <Icon icon="ic:sharp-star-purple500" width="18" height="18" />
            </div>
            <div className="w-[20px] h-[20px] cursor-pointer">
              <Icon icon="ic:sharp-star-purple500" width="18" height="18" />
            </div>
            <div className="w-[20px] h-[20px] cursor-pointer">
              <Icon icon="ic:sharp-star-purple500" width="18" height="18" />
            </div>
            <div className="w-[20px] h-[20px] cursor-pointer">
              <Icon icon="ic:sharp-star-purple500" width="18" height="18" />
            </div>
          </div>
          <div className="ml-[17px]">
            <p className="font-Arial not-italic text-Paragraph0 text-secondary-darkOpacity capitalize">
              10 review
            </p>
          </div>
          <div className="w-[78px] flex items-center justify-between ml-auto">
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <Tooltip title="share">
                <div
                  className="w-[24px] h-[24px] cursor-pointer"
                  onClick={handleShareClick}
                >
                  <Icon
                    icon="material-symbols:share-outline"
                    width="24"
                    height="24"
                    background="rgba(0, 0, 0, 0.71)"
                    onClick={handleTooltipOpen}
                  />
                </div>
              </Tooltip>
            </ClickAwayListener>
            <div className="w-[24px] h-[24px] cursor-pointer">
              <Icon
                icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
                width="24"
                height="24"
                background="rgba(0, 0, 0, 0.71)"
              />
            </div>
          </div>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
          </Menu>
        </div> */}
        <p className="font-Arial not-italic font-bold text-Heading capitalize text-primary">
          rs. 4999
        </p>
        {/* <div className="w-[87px] flex items-center justify-between">
          <div className="w-[32.02px] h-[32.02px] bg-white shadow-custom1 rounded-[50%] cursor-pointer"></div>
          <div className="w-[32.02px] h-[32.02px] bg-black shadow-custom1 rounded-[50%] cursor-pointer"></div>
        </div> */}
        <div
          className="flex items-center justify-evenly w-[80.93px] h-[31.7px] bg-white border 
           border-solid border-secondary-darkOpacity"
        >
          <Icon
            icon="ri:subtract-fill"
            width="18"
            height="18"
            className="cursor-pointer text-secondary-darkOpacity"
            onClick={handleDecrement}
          />
          <div className="w-[20px]">
            <p
              className="font-Arial not-italic font-normal text-Paragraph2 uppercase 
              text-center text-secondary-darkOpacity"
            >
              {count}
            </p>
          </div>
          <Icon
            icon="material-symbols:add"
            width="18"
            height="18"
            className="cursor-pointer text-secondary-darkOpacity"
            onClick={handleIncrement}
          />
        </div>
        <button
          className="w-[255px] h-[50px] bg-black border border-solid border-primary 
           font-Arial not-italic font-normal text-Paragraph3 uppercase text-secondary-white"
          onClick={handleClick}
        >
          buy now
        </button>
        <button
          className="w-[255px] h-[50px] bg-white border border-solid border-secondary-darkOpacity 
           font-Arial not-italic font-normal text-Paragraph3 uppercase text-secondary-darkOpacity"
        >
          add to cart
        </button>
      </div>
    </>
  );
};

export default ProductPageDetail;
