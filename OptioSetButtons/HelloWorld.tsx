import * as React from "react";
import {
  lightThemeGreen,
  darkThemeGreen,
  lightThemeBlue,
  darkThemeBlue,
  lightThemeRed,
  darkThemeRed,
} from "./customThemes/themes";

import {
  FluentProvider,
  makeStyles,
  shorthands,
  ToggleButton,
} from "@fluentui/react-components";

export interface IHelloWorldProps {
  color: string;
  theme: string;
  options: ComponentFramework.PropertyHelper.OptionMetadata[] | undefined;
  value: any;
  onChange: (value: number) => void;
}
const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    ...shorthands.gap("5px"),
  },
  ToggleButton: {},
});

const HelloWorld: React.FC<IHelloWorldProps> = ({
  color,
  theme,
  options,
  value,
  onChange,
}): JSX.Element => {
  const [themeColor, setThemeColor] = React.useState<any>({});
  const [selectedValue, setSelected] = React.useState(value);

  const styles = useStyles();

  React.useEffect(() => {
    if (theme == "webLightTheme") {
      const themeColor: any = {
        green: lightThemeGreen,
        blue: lightThemeBlue,
        red: lightThemeRed,
      };
      setThemeColor(themeColor);
    } else {
      const themeColor: any = {
        green: darkThemeGreen,
        blue: darkThemeBlue,
        red: darkThemeRed,
      };
      setThemeColor(themeColor);
    }
  }, [theme]);

  const getSelectedValue = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setSelected(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  React.useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue]);

  return (
    <FluentProvider theme={themeColor[color]} className={styles.root}>
      {options?.map((option, index) => (
        <ToggleButton
          value={option.Value}
          appearance={
            selectedValue == option.Value.toString() ? "primary" : "outline"
          }
          onClick={(e) => getSelectedValue(e)}
          checked={selectedValue == option.Value.toString() ? true : false}
          style={
            selectedValue == option.Value.toString()
              ? { backgroundColor: option.Color }
              : undefined
          }
          key={index}
        >
          {option.Label}
        </ToggleButton>
      ))}
    </FluentProvider>
  );
};

export default React.memo(HelloWorld);
