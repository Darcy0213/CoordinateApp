// material-ui

import { SimpleDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const SwitchPadding = (
  laptopDesktop: boolean,
  mobile: boolean
): SimpleDimensions => {
  return {
    st3: laptopDesktop ? dimensions[25] : dimensions[10],
    st2: mobile ? dimensions[10] : dimensions[25],
    t1: laptopDesktop ? dimensions[35] : dimensions[25],
    h5: laptopDesktop ? dimensions[50] : dimensions[35],
    h2: laptopDesktop ? dimensions[65] : dimensions[50],
  };
};

export default SwitchPadding;
