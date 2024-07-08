import { SvgIcon } from "@mui/material";

/**
 * Generates a Material Design Icon (MDI) based on the provided iconName, color, width, and height.
 *
 * @param {string} iconName - The name of the icon to generate.
 * @param {string} color - The color for the icon.
 * @param {string} width - The width of the icon.
 * @param {string} height - The height of the icon.
 * @returns JSX.Element - A Material-UI SvgIcon component with the specified icon.
 */
const generateMDIIcon = (
  iconName: string,
  color: string,
  width: string,
  height: string
): JSX.Element => {
  // Initializes the icon variable as an empty fragment.
  let icon: JSX.Element = <></>;

  // Determines which SVG to use based on the iconName parameter.
  switch (iconName) {
    case "HomeFilled":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={color} // Sets the fill color of the SVG.
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3 4 9v12h5v-7h6v7h5V9z" />
        </svg>
      );
      break;
    case "DeployedCode":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill={color} // Sets the fill color of the SVG.
        >
          <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z" />
        </svg>
      );
      break;
    case "Search":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color} // Sets the fill color of the SVG.
          viewBox="0 -960 960 960"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      );
      break;
    case "Star":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color} // Sets the fill color of the SVG.
          viewBox="0 -960 960 960"
        >
          <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
        </svg>
      );
      break;
    case "SupervisorAccount":
      icon = (
        <svg
          fill={color}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="supervisor_account">
            <mask
              id="mask0_1055_1353"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect id="Bounding box" width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1055_1353)">
              <path
                id="supervisor_account_2"
                d="M1.66663 16.6666V14.3333C1.66663 13.861 1.78468 13.427 2.02079 13.0312C2.2569 12.6353 2.58329 12.3333 2.99996 12.1249C3.83329 11.7083 4.69788 11.3888 5.59371 11.1666C6.48954 10.9444 7.40274 10.8333 8.33329 10.8333C8.68052 10.8333 9.02774 10.8576 9.37496 10.9062C9.72218 10.9548 10.0694 11.0138 10.4166 11.0833V12.3958C9.79163 12.7013 9.28815 13.1041 8.90621 13.6041C8.52427 14.1041 8.33329 14.7569 8.33329 15.5624V16.6666H1.66663ZM9.99996 16.6666V15.4999C9.99996 15.1666 10.0868 14.8576 10.2604 14.5728C10.434 14.2881 10.6805 14.0833 11 13.9583C11.5 13.7499 12.0173 13.5937 12.552 13.4895C13.0868 13.3853 13.625 13.3333 14.1666 13.3333C14.7083 13.3333 15.2465 13.3853 15.7812 13.4895C16.3159 13.5937 16.8333 13.7499 17.3333 13.9583C17.6527 14.0833 17.8993 14.2881 18.0729 14.5728C18.2465 14.8576 18.3333 15.1666 18.3333 15.4999V16.6666H9.99996ZM14.1666 12.4999C13.5833 12.4999 13.0902 12.2985 12.6875 11.8958C12.2847 11.493 12.0833 10.9999 12.0833 10.4166C12.0833 9.83325 12.2847 9.3402 12.6875 8.93742C13.0902 8.53464 13.5833 8.33325 14.1666 8.33325C14.75 8.33325 15.243 8.53464 15.6458 8.93742C16.0486 9.3402 16.25 9.83325 16.25 10.4166C16.25 10.9999 16.0486 11.493 15.6458 11.8958C15.243 12.2985 14.75 12.4999 14.1666 12.4999ZM8.33329 9.99992C7.41663 9.99992 6.6319 9.67353 5.97913 9.02075C5.32635 8.36797 4.99996 7.58325 4.99996 6.66659C4.99996 5.74992 5.32635 4.9652 5.97913 4.31242C6.6319 3.65964 7.41663 3.33325 8.33329 3.33325C9.24996 3.33325 10.0347 3.65964 10.6875 4.31242C11.3402 4.9652 11.6666 5.74992 11.6666 6.66659C11.6666 7.58325 11.3402 8.36797 10.6875 9.02075C10.0347 9.67353 9.24996 9.99992 8.33329 9.99992Z"
                fill="#626262"
              />
            </g>
          </g>
        </svg>
      );
      break;
    case "LeftPanelOpen":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill={color}
        >
          <path d="M500-640v320l160-160-160-160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm200-80h360v-560H400v560Z" />
        </svg>
      );
      break;

    case "RightPanelOpen":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill={color}
        >
          <path d="M460-320v-320L300-480l160 160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm360-80v-560H200v560h360Z" />
        </svg>
      );
      break;

    case "RightPanelClose":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill={color}
        >
          <path d="M300-640v320l160-160-160-160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm360-80v-560H200v560h360Z" />
        </svg>
      );
      break;
    case "Update":
      icon = (
        <svg
          viewBox="0 0 16 16"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="update">
            <mask
              id="mask0_1620_4117"
              maskUnits="userSpaceOnUse"
              x="0"
              y="-1"
              width="16"
              height="17"
            >
              <rect
                id="Bounding box"
                y="-0.000183105"
                width="16"
                height="16"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_1620_4117)">
              <path
                id="update_2"
                d="M8 13.9998C7.16667 13.9998 6.38611 13.8415 5.65833 13.5248C4.93056 13.2082 4.29722 12.7804 3.75833 12.2415C3.21944 11.7026 2.79167 11.0693 2.475 10.3415C2.15833 9.61371 2 8.83315 2 7.99982C2 7.16648 2.15833 6.38593 2.475 5.65815C2.79167 4.93037 3.21944 4.29704 3.75833 3.75815C4.29722 3.21926 4.93056 2.79148 5.65833 2.47482C6.38611 2.15815 7.16667 1.99982 8 1.99982C8.91111 1.99982 9.775 2.19426 10.5917 2.58315C11.4083 2.97204 12.1 3.52204 12.6667 4.23315V2.66648H14V6.66648H10V5.33315H11.8333C11.3778 4.71093 10.8167 4.22204 10.15 3.86648C9.48333 3.51093 8.76667 3.33315 8 3.33315C6.7 3.33315 5.59722 3.78593 4.69167 4.69148C3.78611 5.59704 3.33333 6.69982 3.33333 7.99982C3.33333 9.29982 3.78611 10.4026 4.69167 11.3082C5.59722 12.2137 6.7 12.6665 8 12.6665C9.16667 12.6665 10.1861 12.2887 11.0583 11.5332C11.9306 10.7776 12.4444 9.82204 12.6 8.66648H13.9667C13.8 10.1887 13.1472 11.4582 12.0083 12.4748C10.8694 13.4915 9.53333 13.9998 8 13.9998ZM9.86667 10.7998L7.33333 8.26648V4.66648H8.66667V7.73315L10.8 9.86648L9.86667 10.7998Z"
                fill="black"
              />
            </g>
          </g>
        </svg>
      );
      break;
    case "Capture":
      icon = (
        <svg
          viewBox="0 -960 960 960"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm80-80h480v-320H240v320Zm-80 80v-480 480Z" />
        </svg>
      );
      break;
    default:
      // Handles cases where iconName doesn't match any case.
      break;
  }
  // Returns a SvgIcon component with the selected SVG icon.
  // The viewBox is adjusted to match the dimensions of the SVG for proper scaling.
  return (
    <SvgIcon
      viewBox="0 0 34 34"
      sx={{ height: height, width: width }} // Sets the size of the icon based on the provided width and height.
    >
      {icon}
    </SvgIcon>
  );
};

export default generateMDIIcon;
