// material-ui

import { SimpleDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const TextIconGap = (laptopDesktop: boolean): SimpleDimensions => {
  return {
    st3: "1px" /* dimensions[0] */,
    st2: "3px" /* dimensions[0] */,
    st1: "3px" /* dimensions[0], */,
    t2: "3px" /* dimensions[10], */,
    t1: "3px" /* dimensions[10], */,
    h5: dimensions[10],
    h4: dimensions[10],
    h3: laptopDesktop ? dimensions[35] : dimensions[25],
    h2: laptopDesktop ? dimensions[65] : dimensions[50],
    h1: laptopDesktop ? dimensions[75] : dimensions[50],
  };
};

export default TextIconGap;
