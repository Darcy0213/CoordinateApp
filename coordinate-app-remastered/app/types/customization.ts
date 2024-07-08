export type ThemeMode = "light" | "dark";
export type FontFamily =
  | `'Inter', sans-serif`
  | `'Poppins', sans-serif`
  | `'Roboto', sans-serif`
  | `'Public Sans', sans-serif`
  | `'Arial', sans-serif`
  | `'Open Sans', sans-serif`;
export type PresetColor = "default";
export type I18n = "en" | "fr" | "ro" | "zh"; // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese

// ==============================|| CONFIG TYPES  ||============================== //

export type DefaultConfigProps = {
  fontFamily: FontFamily;
  i18n: I18n;
  mode: ThemeMode;
  presetColor: PresetColor;
};

export type CustomizationProps = {
  fontFamily: FontFamily;
  i18n: I18n;
  mode: ThemeMode;
  presetColor: PresetColor;
  onChangeLocalization: (lang: I18n) => void;
  onChangeMode: (mode: ThemeMode) => void;
  onChangePresetColor: (theme: PresetColor) => void;
  onChangeFontFamily: (fontFamily: FontFamily) => void;
};
