import { HeightDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const CellHeight = (): HeightDimensions => {
  return {
    min: dimensions[400],
  };
};

export default CellHeight;
