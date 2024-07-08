import { AdvancedDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const ElementSpacing = (
  mobile: boolean,
  laptopDesktop: boolean,
  onlyDesktop: boolean,
  onlyLaptop: boolean
): AdvancedDimensions => {
  return {
    none: dimensions[0],
    st3: dimensions[25],
    st2: mobile ? dimensions[25] : dimensions[50],
    st1: mobile ? dimensions[25] : dimensions[50],
    t2: dimensions[75],
    t1: dimensions[75],
    h5: dimensions[100],
    h4: dimensions[100],
    h3: dimensions[125],
    h2: dimensions[125],
    h1: dimensions[150],
    non_icon: {
      st3: dimensions[25],
      st2: dimensions[50],
      st1: laptopDesktop ? dimensions[100] : dimensions[75],
      t2: laptopDesktop ? dimensions[125] : dimensions[100],
      t1: laptopDesktop ? dimensions[125] : dimensions[100],
      h5: laptopDesktop ? dimensions[175] : dimensions[150],
      h4: laptopDesktop ? dimensions[150] : dimensions[125],
      h3: laptopDesktop ? dimensions[175] : dimensions[150],
      h2: laptopDesktop ? dimensions[200] : dimensions[150],
      h1: laptopDesktop ? dimensions[275] : dimensions[250],
    },
  };
};

export default ElementSpacing;
