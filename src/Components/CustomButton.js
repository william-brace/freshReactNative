/** @format */
import React from "react";
import { Button } from "react-native-paper";
import styles from "../Styles/styles";
import { hp, wp } from "../responsiveUnitFunctions";

const CustomButton = ({ onPressAction, text, extraStyles, icon }) => {
  return (
    <Button
      mode="contained"
      style={{
        marginTop: hp(20),

        height: hp(55),
        marginTop: hp(30),
        display: "flex",
        justifyContent: "center",
        ...extraStyles,
      }}
      icon={icon}
      onPress={onPressAction}
      fullWidth
    >
      {text}
    </Button>
  );
};

export default CustomButton;
