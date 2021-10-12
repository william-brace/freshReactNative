/** @format */
import React from "react";
import { Button } from "react-native-paper";
import styles from "../Styles/styles";
import { hp, wp } from "../responsiveUnitFunctions";

const CustomOutlinedButton = ({
  onPressAction,
  text,
  extraStyles,
  icon = false,
  mode = "outlined",
}) => {
  return (
    <Button
      mode={mode}
      style={{
        marginTop: hp(20),
        borderColor: "white",
        height: hp(55),
        display: "flex",
        justifyContent: "center",
        fontSize: hp(20),
        ...extraStyles,
      }}
      icon={icon}
      onPress={onPressAction}
      fullWidth
      color="white"
    >
      {text}
    </Button>
  );
};

export default CustomOutlinedButton;
