import { BasicDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const ElementHeight = (
  mobile: boolean,
  tablet: boolean,
  laptopDesktop: boolean
): BasicDimensions => {
  return {
    st3: mobile ? dimensions[125] : dimensions[150],
    st2: mobile ? dimensions[150] : dimensions[175],
    st1: mobile ? dimensions[150] : dimensions[200],
    t2: mobile ? dimensions[200] : dimensions[250],
    t1: mobile ? dimensions[200] : dimensions[250],
    h5: laptopDesktop
      ? dimensions[300]
      : mobile
      ? dimensions[250]
      : dimensions[275],
    h4: laptopDesktop
      ? dimensions[300]
      : mobile
      ? dimensions[250]
      : dimensions[275],
    h3: laptopDesktop
      ? dimensions[350]
      : mobile
      ? dimensions[300]
      : dimensions[325],
    h2: laptopDesktop
      ? dimensions[400]
      : mobile
      ? dimensions[350]
      : dimensions[375],
    h1: laptopDesktop
      ? dimensions[600]
      : mobile
      ? dimensions[500]
      : dimensions[550],
  };
};

export default ElementHeight;
