/** @format */

import React from "react";
import { Text } from "react-native";
import styles from "../Styles/styles";
import { hp, wp } from "../responsiveUnitFunctions";

const HeaderText = ({ text, extraStyles }) => {
  return (
    <Text
      style={{
        ...styles.header,
        color: "white",
        marginTop: hp(30),
        fontSize: hp(30),
        textAlign: "center",
        ...extraStyles,
      }}
    >
      {text}
    </Text>
  );
};

export default HeaderText;
