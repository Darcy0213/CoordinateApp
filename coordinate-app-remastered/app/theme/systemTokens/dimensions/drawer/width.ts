import { WidthDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const DrawerWidth = (laptopDesktop: boolean): WidthDimensions => {
  return {
    max: laptopDesktop ? dimensions[9375] : dimensions[7500],
    min: dimensions[3750],
  };
};

export default DrawerWidth;
