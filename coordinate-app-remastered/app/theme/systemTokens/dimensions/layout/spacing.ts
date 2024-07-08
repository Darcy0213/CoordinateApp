import { BasicDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const LayoutSpacing = (
  mobile: boolean,
  tablet: boolean,
  laptopDesktop: boolean
): BasicDimensions => {
  return {
    none: dimensions[0],
    st1: mobile ? dimensions[150] : dimensions[175],
    st2: mobile ? dimensions[125] : dimensions[150],
    st3: dimensions[125],
    t1: mobile ? dimensions[175] : dimensions[200],
    t2: mobile ? dimensions[175] : dimensions[200],
    h1: mobile ? dimensions[375] : tablet ? dimensions[475] : dimensions[500],
    h2: mobile ? dimensions[325] : tablet ? dimensions[350] : dimensions[375],
    h3: mobile ? dimensions[250] : tablet ? dimensions[275] : dimensions[300],
    h4: laptopDesktop ? dimensions[250] : dimensions[225],
    h5: laptopDesktop ? dimensions[250] : dimensions[225],
  };
};

export default LayoutSpacing;
