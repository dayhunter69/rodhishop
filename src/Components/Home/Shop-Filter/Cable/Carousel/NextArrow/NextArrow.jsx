import React from "react";
import { Icon } from '@iconify/react';
import '../../../../../Navbar/Style/Next-Arrow.css'
const NextArrow = ({ onClick }) => {
  return (
    <>
      <div className="Next_Arrow" onClick={onClick}>
        <Icon icon="ic:sharp-keyboard-arrow-right" width="60" height="60"/>
      </div>
    </>
  );
};

export default NextArrow;