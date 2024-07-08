// material-ui

import { BasicDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const ButtonVerticalPadding = (
  mobile: boolean,
  desktop: boolean
): BasicDimensions => {
  return {
    st3: mobile ? dimensions[10] : dimensions[25],
    st2: mobile ? dimensions[35] : dimensions[50],
    st1: dimensions[50],
    t2: mobile ? dimensions[65] : dimensions[75],
    t1: mobile ? dimensions[65] : dimensions[75],
    h5: desktop ? dimensions[100] : dimensions[75],
    h4: desktop ? dimensions[100] : dimensions[75],
    h3: desktop ? dimensions[125] : mobile ? dimensions[100] : dimensions[113],
    h2: desktop ? dimensions[163] : mobile ? dimensions[138] : dimensions[150],
    h1: desktop ? dimensions[225] : mobile ? dimensions[163] : dimensions[215],
  };
};

export default ButtonVerticalPadding;
