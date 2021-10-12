/** @format */

import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { useTheme, Button, Checkbox } from "react-native-paper";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import HeaderText from "../Components/HeaderText";
import SmallText from "../Components/SmallText";
import styles from "../Styles/styles";
import { hp, wp } from "../responsiveUnitFunctions";
import PageContainer from "../Components/PageContainer";

const VerifyAccountPage = ({ navigation }) => {
  const { colors } = useTheme();
  const [digit1, setDigit1] = useState();
  const [digit2, setDigit2] = useState();
  const [digit3, setDigit3] = useState();
  const [digit4, setDigit4] = useState();

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text={`Verify your account`} />
        <SmallText
          text={"Please enter the 4 digit code sent to \n your phone"}
          extraStyles={{ marginTop: hp(20) }}
        />
        <View
          style={{
            ...styles.flexRow,
          }}
        >
          <View style={{ flex: 1 }}>
            <CustomInput
              data={digit1}
              setData={setDigit1}
              extraStyles={{
                marginTop: hp(20),
                marginRight: wp(5),
                marginLeft: wp(0),
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <CustomInput
              data={digit2}
              setData={setDigit2}
              extraStyles={{
                marginTop: hp(20),
                marginRight: wp(5),
                marginLeft: wp(0),
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <CustomInput
              data={digit3}
              setData={setDigit3}
              extraStyles={{
                marginTop: hp(20),
                marginRight: wp(5),
                marginLeft: wp(0),
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <CustomInput
              data={digit4}
              setData={setDigit4}
              extraStyles={{
                marginTop: hp(20),
                marginRight: wp(5),
                marginLeft: wp(0),
              }}
            />
          </View>
        </View>
        <CustomButton
          text={"VERIFY"}
          onPressAction={() => navigation.navigate("AccountTypePage")}
        />
      </PageContainer>
    </View>
  );
};

export default VerifyAccountPage;
