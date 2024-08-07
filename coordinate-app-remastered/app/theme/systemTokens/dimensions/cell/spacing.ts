import { BasicDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const CellSpacing = (laptopDesktop: boolean): BasicDimensions => {
  return {
    none: dimensions[0],
    st1: laptopDesktop ? dimensions[100] : dimensions[50],
    st2: laptopDesktop ? dimensions[50] : dimensions[25],
    st3: laptopDesktop ? dimensions[50] : dimensions[25],
    t1: laptopDesktop ? dimensions[150] : dimensions[125],
    t2: laptopDesktop ? dimensions[150] : dimensions[125],
    h1: laptopDesktop ? dimensions[300] : dimensions[275],
    h2: laptopDesktop ? dimensions[250] : dimensions[225],
    h3: laptopDesktop ? dimensions[250] : dimensions[225],
    h4: dimensions[200],
    h5: dimensions[200],
  };
};

export default CellSpacing;
