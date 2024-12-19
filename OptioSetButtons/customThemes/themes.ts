import {
    BrandVariants,
    createDarkTheme,
    createLightTheme,
    Theme,
  } from "@fluentui/react-components";
  
  const greenTheme: BrandVariants = {
    10: "#010402",
    20: "#0F1C0F",
    30: "#132F18",
    40: "#153D1D",
    50: "#164B21",
    60: "#165A26",
    70: "#14692B",
    80: "#107931",
    90: "#158838",
    100: "#3C954D",
    110: "#57A262",
    120: "#6FAF76",
    130: "#87BC8C",
    140: "#9EC9A1",
    150: "#B5D6B7",
    160: "#CCE3CD",
  };
  
  const blueTheme: BrandVariants = {
    10: "#020305",
    20: "#111820",
    30: "#182738",
    40: "#1D334B",
    50: "#20405F",
    60: "#244D74",
    70: "#265B8A",
    80: "#2969A0",
    90: "#2A77B7",
    100: "#2A86CF",
    110: "#2A95E7",
    120: "#53A2ED",
    130: "#75B0F0",
    140: "#91BEF3",
    150: "#ABCCF6",
    160: "#C4DAF9",
  };
  
  const redTheme: BrandVariants = {
    10: "#060201",
    20: "#26110A",
    30: "#411811",
    40: "#581C15",
    50: "#6F2019",
    60: "#88231C",
    70: "#A12620",
    80: "#BB2823",
    90: "#D52927",
    100: "#EC332E",
    110: "#F35444",
    120: "#F96E5B",
    130: "#FE8672",
    140: "#FF9E8B",
    150: "#FFB4A5",
    160: "#FFCABF",
  };
  
  export const lightThemeGreen: Theme = {
    ...createLightTheme(greenTheme),
    colorBrandForeground1: greenTheme[90],
    colorBrandForeground2: greenTheme[140],
  };
  
  export const darkThemeGreen: Theme = {
    ...createDarkTheme(greenTheme),
  };
  
  lightThemeGreen.colorBrandForeground1 = greenTheme[110];
  lightThemeGreen.colorBrandForeground2 = greenTheme[120];
  
  export const lightThemeBlue: Theme = {
    ...createLightTheme(blueTheme),
  };
  
  export const darkThemeBlue: Theme = {
    ...createDarkTheme(blueTheme),
  };
  
  lightThemeBlue.colorBrandForeground1 = blueTheme[110];
  darkThemeBlue.colorBrandForeground2 = blueTheme[120];
  
  export const lightThemeRed: Theme = {
    ...createLightTheme(redTheme),
  };
  
  export const darkThemeRed: Theme = {
    ...createDarkTheme(redTheme),
  };
  
  lightThemeRed.colorBrandForeground1 = redTheme[110];
  darkThemeRed.colorBrandForeground2 = redTheme[120];
  