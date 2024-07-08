// material-ui

import { SimpleDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const SwitchWidth = (
  laptopDesktop: boolean,
  mobile: boolean,
  tablet: boolean
): SimpleDimensions => {
  return {
    st3: mobile ? dimensions[250] : dimensions[300],
    st2: laptopDesktop
      ? dimensions[400]
      : tablet
      ? dimensions[350]
      : dimensions[300],
    t1: laptopDesktop
      ? dimensions[500]
      : tablet
      ? dimensions[500]
      : dimensions[400],
    h5: laptopDesktop ? dimensions[700] : dimensions[600],
    h2: laptopDesktop
      ? dimensions[900]
      : tablet
      ? dimensions[800]
      : dimensions[700],
  };
};

export default SwitchWidth;
