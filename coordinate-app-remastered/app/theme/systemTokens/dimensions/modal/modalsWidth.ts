// material-ui

import { ModalWidth } from "@mui/material";
import { dimensions } from "@theme/referenceTokens/dimensions";

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const ModalsWidth = (laptopDesktop: boolean): ModalWidth => {
  return {
    object: laptopDesktop ? dimensions[10000] : dimensions[3750],
    dialog: laptopDesktop ? dimensions[3750] : dimensions[2500],
  };
};

export default ModalsWidth;
