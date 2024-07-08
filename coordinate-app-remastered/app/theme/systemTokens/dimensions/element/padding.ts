// material-ui

import { AdvancedDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const ElementPadding = (
  laptopDesktop: boolean,
  desktop: boolean,
  laptop: boolean
): AdvancedDimensions => {
  return {
    st3: dimensions[25],
    st2: dimensions[25],
    st1: dimensions[50],
    t2: dimensions[75],
    t1: dimensions[75],
    h5: dimensions[100],
    h4: dimensions[100],
    h3: dimensions[125],
    h2: dimensions[125],
    h1: dimensions[150],
    non_icon_side: {
      st3: laptopDesktop ? dimensions[50] : dimensions[25],
      st2: dimensions[50],
      st1: laptopDesktop ? dimensions[100] : dimensions[75],
      t2: laptopDesktop ? dimensions[125] : dimensions[100],
      t1: laptopDesktop ? dimensions[125] : dimensions[100],
      h5: laptopDesktop ? dimensions[150] : dimensions[125],
      h4: laptopDesktop ? dimensions[150] : dimensions[125],
      h3: laptopDesktop ? dimensions[175] : dimensions[150],
      h2: laptopDesktop ? dimensions[200] : dimensions[150],
      h1: laptopDesktop ? dimensions[275] : dimensions[250],
    },
  };
};

export default ElementPadding;
