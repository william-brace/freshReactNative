/** @format */

import React, { useState } from "react";
import { Text, View } from "react-native";
import { useTheme, Button, Checkbox } from "react-native-paper";
import CustomInput from "../Components/CustomInput";
import HeaderText from "../Components/HeaderText";
import SmallText from "../Components/SmallText";
import CustomButton from "../Components/CustomButton";
import styles from "../Styles/styles";
import { hp, wp } from "../responsiveUnitFunctions";
import PageContainer from "../Components/PageContainer";

const RecoverPasswordPage = ({ navigation }) => {
  const { colors } = useTheme();
  const [email, setEmail] = useState();

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text={"Recover your password"} />
        <SmallText
          text={
            "We will send you an email with instruction to \n reset your password."
          }
        />

        <CustomInput
          label={"Email"}
          data={email}
          setData={setEmail}
          extraStyles={{ marginTop: hp(20) }}
        />

        <CustomButton
          text={"RESET MY PASSWORD"}
          onPressAction={() => navigation.navigate("EmailSentPage")}
        />
      </PageContainer>
    </View>
  );
};

export default RecoverPasswordPage;
