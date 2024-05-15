import React from "react";
import { Icon } from '@iconify/react';
import '../../../../../Navbar/Style/Pre-Arrow.css'

const PreviousArrow = ({ onClick }) => {
  return (
    <>
      <div className="Pre_Arrow" onClick={onClick}>
        <Icon icon="ic:sharp-keyboard-arrow-right" rotate={2} width="60" height="60"/>
      </div>
    </>
  );
};

export default PreviousArrow;
