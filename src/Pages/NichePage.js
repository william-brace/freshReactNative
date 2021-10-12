/** @format */

import { useFocusEffect } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import { useTheme, Button, ThemeProvider } from "react-native-paper";
import HeaderText from "../Components/HeaderText";
import SmallText from "../Components/SmallText";
import CustomButton from "../Components/CustomButton";
import CustomOutlinedButton from "../Components/CustomOutlinedButton";
import styles from "../Styles/styles";
import { hp, wp } from "../responsiveUnitFunctions";
import PageContainer from "../Components/PageContainer";
import SelectList from "../Components/SelectList";

const NichePage = ({ navigation }) => {
  const { colors } = useTheme();

  const [niches, setNiches] = useState([
    { name: "PARENTING", selected: false },
    { name: "FOOD", selected: false },
    { name: "FITNESS", selected: false },
    { name: "BEAUTY", selected: false },
    { name: "PETS", selected: false },
    { name: "ENTERTAINMENT", selected: false },
    { name: "TRAVEL", selected: false },
    { name: "ARTS & CRAFTS", selected: false },
    { name: "GAMING", selected: false },
    { name: "AUTOMOTIVE", selected: false },
    { name: "FASHION", selected: false },
  ]);

  const [selectedAmount, setSelectedAmount] = useState(0);

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text={"Tell us what you are \n interested in"} />
        <SmallText text={"You can choose up to 5 niches"} />
        <SelectList
          itemList={niches}
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}
        />
        <CustomButton
          text={"NEXT"}
          onPressAction={() =>
            selectedAmount > 0 && navigation.navigate("SignUpMethodPage")
          }
        />
      </PageContainer>
    </View>
  );
};

export default NichePage;
