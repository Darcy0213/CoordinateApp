import { CellWidthDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const CellWidth = (laptopDesktop: boolean): CellWidthDimensions => {
  return {
    max: laptopDesktop ? dimensions[1000] : dimensions[900],
    min: {
      sm: dimensions[425],
      md: dimensions[1200],
      lg: dimensions[2500],
    },
  };
};

export default CellWidth;
