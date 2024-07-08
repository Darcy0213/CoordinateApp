// material-ui

import { SimpleDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const IconButtonPadding = (
  mobile: boolean,
  laptopDesktop: boolean
): SimpleDimensions => {
  return {
    st3: laptopDesktop ? dimensions[25] : dimensions[50],
    st2: mobile
      ? dimensions[50]
      : laptopDesktop
      ? dimensions[35]
      : dimensions[65],
    st1: mobile
      ? dimensions[65]
      : laptopDesktop
      ? dimensions[50]
      : dimensions[75],
    t2: mobile ? dimensions[100] : dimensions[75],
    t1: mobile ? dimensions[100] : dimensions[75],
    h5: mobile
      ? dimensions[113]
      : laptopDesktop
      ? dimensions[100]
      : dimensions[75],
    h4: mobile ? dimensions[113] : dimensions[100],
    h3: dimensions[125],
    h2: laptopDesktop ? dimensions[163] : dimensions[150],
    h1: laptopDesktop
      ? dimensions[225]
      : mobile
      ? dimensions[163]
      : dimensions[215],
  };
};

export default IconButtonPadding;
