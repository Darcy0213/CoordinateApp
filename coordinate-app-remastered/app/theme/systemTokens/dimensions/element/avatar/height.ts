// material-ui

import { SimpleDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const AvatarHeight = (laptopDesktop: boolean): SimpleDimensions => {
  return {
    st3: laptopDesktop ? dimensions[200] : dimensions[175],
    st2: laptopDesktop ? dimensions[250] : dimensions[200],
    t1: laptopDesktop ? dimensions[300] : dimensions[250],
    h4: laptopDesktop ? dimensions[400] : dimensions[375],
    h3: laptopDesktop ? dimensions[500] : dimensions[475],
  };
};

export default AvatarHeight;
