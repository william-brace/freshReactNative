/** @format */

import React, { useState } from "react";
import { Text, View } from "react-native";
import { useTheme, Button, Checkbox } from "react-native-paper";
import CustomInput from "../Components/CustomInput";
import HeaderText from "../Components/HeaderText";
import SmallText from "../Components/SmallText";
import CustomButton from "../Components/CustomButton";
import { Link } from "@react-navigation/native";
import styles from "../Styles/styles";
import { hp, wp } from "../responsiveUnitFunctions";
import PageContainer from "../Components/PageContainer";

const PasswordChangedPage = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text={"Your password has changed"} />
        <SmallText
          text={
            "Your password has successfully changed. \n You can continue enjoying all the perks \n Viral Academy offers."
          }
          extraStyles={{ marginTop: hp(20) }}
        />
        <CustomButton
          text={"GO TO SIGN IN"}
          onPressAction={() => navigation.navigate("SignInPage")}
        />
      </PageContainer>
    </View>
  );
};

export default PasswordChangedPage;
