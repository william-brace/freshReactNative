/** @format */

import React from "react";
import { Text } from "react-native";
import styles from "../Styles/styles";

const SmallText = ({ text, extraStyles }) => {
  return (
    <Text
      style={{
        color: "white",
        ...styles.smallTextRegular,
        ...styles.sideMargins,
        textAlign: "center",
        ...extraStyles,
      }}
    >
      {text}
    </Text>
  );
};

export default SmallText;
