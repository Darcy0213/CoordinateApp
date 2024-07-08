import { BasicDimensions } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

const Radius = (): BasicDimensions => ({
  none: dimensions[0],
  st3: dimensions[50],
  st2: dimensions[50],
  st1: dimensions[50],
  t2: dimensions[75],
  t1: dimensions[75],
  h5: dimensions[100],
  h4: dimensions[100],
  h3: dimensions[100],
  h2: dimensions[125],
  h1: dimensions[125],
  round: dimensions[1000],
});

export default Radius;
