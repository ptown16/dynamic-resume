import React from 'react';
import { ReactComponent as Logo } from '../PTLogo.svg'

function LogoBox({
  size,
  logoColor,
  boxColor
}) {
  console.log(size)
  return (
      <Logo className="logo-box" style={{backgroundColor: boxColor}} width={size+"px"} height={size+"px"} fill={logoColor}/>
  );
}

export default LogoBox;
