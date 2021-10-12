/** @format */

import React from "react";
import { ScrollView } from "react-native";
import styles from "../Styles/styles";

const PageContainer = ({ children }) => {
  return <ScrollView style={{ ...styles.sideMargins }}>{children}</ScrollView>;
};

export default PageContainer;
