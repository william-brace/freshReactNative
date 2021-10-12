/** @format */
/** @format */

import React, { useState } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import HeaderText from "../Components/HeaderText";

const HomePage = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <HeaderText text={"Home Page"} />
    </View>
  );
};

export default HomePage;
