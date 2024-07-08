import * as Icons from "@mui/icons-material/";
const excludedStrings = ["Outlined", "Sharped", "Rounded", "Sharp", "TwoTone"];

export const iconsForUsersArray = Object.entries(Icons)
  .filter(([name]) => {
    // Revisa si el inicio del nombre del ícono coincide con alguno en MaterialUIIcons
    //const isInMaterialUIIcons = SystemIcons.some((iconName) => name.startsWith(iconName.replace('Icon', '')))

    // Revisa si el nombre del ícono incluye alguna de las cadenas excluidas.
    const containsExcludedString = excludedStrings.some((excluded) =>
      name.includes(excluded)
    );

    // Si el ícono está en MaterialUIIcons o contiene una cadena excluida, se filtra.
    return /*!isInMaterialUIIcons &&*/ !containsExcludedString;
  })
  .map(([name, IconComponent]) => ({
    name: name,
    id: name,
    icon: IconComponent,
  }));
