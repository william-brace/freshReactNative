/** @format */
/** @format */

import React, { useState } from "react";
import { Text, View } from "react-native";
import { useTheme, Button, Checkbox } from "react-native-paper";
import CustomInput from "../Components/CustomInput";
import HeaderText from "../Components/HeaderText";
import SmallText from "../Components/SmallText";
import styles from "../Styles/styles";
import CustomButton from "../Components/CustomButton";
import { hp, wp } from "../responsiveUnitFunctions";
import PageContainer from "../Components/PageContainer";

const CreateNewPasswordPage = ({ navigation }) => {
  const { colors } = useTheme();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text={"Create a new password"} />
        <SmallText
          text={
            "Your password must be different from the \n previous used password."
          }
        />
        <View styles={{ ...styles.sideMargins }}>
          <CustomInput
            label={"Password"}
            data={password}
            setData={setPassword}
            extraStyles={{ marginTop: hp(20) }}
            rightIcon={"eye"}
            secureTextEntry={true}
          />
          <CustomInput
            label={"Confirm Password"}
            data={repeatPassword}
            setData={setRepeatPassword}
            extraStyles={{ marginTop: hp(20) }}
            rightIcon={"eye"}
            secureTextEntry={true}
          />
        </View>
        <CustomButton
          text={"RESET MY PASSWORD"}
          onPressAction={() => navigation.navigate("PasswordChangedPage")}
        />
      </PageContainer>
    </View>
  );
};

export default CreateNewPasswordPage;
