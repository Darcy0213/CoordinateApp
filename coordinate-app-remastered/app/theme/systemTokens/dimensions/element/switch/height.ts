// material-ui

import { SimpleDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const SwitchHeight = (
  laptopDesktop: boolean,
  mobile: boolean,
  tablet: boolean
): SimpleDimensions => {
  return {
    st3: mobile ? dimensions[150] : dimensions[200],
    st2: mobile ? dimensions[200] : dimensions[250],
    t1: laptopDesktop
      ? dimensions[350]
      : tablet
      ? dimensions[300]
      : dimensions[250],
    h5: laptopDesktop
      ? dimensions[400]
      : tablet
      ? dimensions[350]
      : dimensions[300],
    h2: mobile ? dimensions[400] : dimensions[500],
  };
};

export default SwitchHeight;
