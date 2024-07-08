// material-ui

import { BasicDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const ButtonHorizontalPadding = (
  laptopDesktop: boolean,
  mobile: boolean,
  desktop: boolean,
  tablet: boolean
): BasicDimensions => {
  return {
    st3: dimensions[50],
    st2: laptopDesktop ? dimensions[100] : dimensions[88],
    st1: mobile ? dimensions[100] : dimensions[113],
    t2: mobile ? dimensions[113] : dimensions[138],
    t1: mobile ? dimensions[113] : dimensions[138],
    h5: desktop ? dimensions[163] : dimensions[150],
    h4: desktop ? dimensions[163] : dimensions[150],
    h3: desktop ? dimensions[200] : mobile ? dimensions[163] : dimensions[178],
    h2: desktop
      ? dimensions[250]
      : mobile
      ? dimensions[215]
      : tablet
      ? dimensions[225]
      : dimensions[250],
    h1: mobile ? dimensions[250] : desktop ? dimensions[335] : dimensions[315],
  };
};

export default ButtonHorizontalPadding;
