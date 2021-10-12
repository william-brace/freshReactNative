/** @format */

import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { useTheme, Button, Checkbox } from "react-native-paper";
import CustomButton from "../Components/CustomButton";
import CustomInput from "../Components/CustomInput";
import HeaderText from "../Components/HeaderText";
import SmallText from "../Components/SmallText";
import styles from "../Styles/styles";
import { useAuth } from "../Contexts/AuthContext";
import { hp, wp } from "../responsiveUnitFunctions";
import { signUp } from "../Adapters/AuthAdapters";
import PageContainer from "../Components/PageContainer";

const PhoneNumberPage = ({ navigation }) => {
  const { colors } = useTheme();
  const [countryCode, setCountryCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [signUpErrors, setSignUpErrors] = useState("");

  const { user, setUser } = useAuth();

  // const handleSignUp = async () => {
  //   let finalPhoneNumber = `+` + countryCode + phoneNumber;
  //   console.log(`phone number before sending is ${finalPhoneNumber}`);
  //   const userDetails = {
  //     email: user.email,
  //     password: user.password,
  //     phoneNumber: finalPhoneNumber,
  //   };

  //   let res;
  //   try {
  //     res = await signUp(userDetails);
  //     setUser(userDetails);

  //     //history.push("/account-confirmation");
  //     navigation.navigate("VerifyAccountPage");
  //   } catch (e) {
  //     console.log(e.message);
  //     setSignUpErrors(e.message);
  //   }
  // };

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text={`Enter your phone \n number`} />
        <SmallText
          text={"Please enter your phone number to get a \n verification code."}
          extraStyles={{ marginTop: hp(20) }}
        />
        <Text
          style={{ color: "white", textAlign: "center", marginTop: hp(20) }}
        >
          {signUpErrors}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 4 }}>
            <CustomInput
              label={"CC"}
              data={countryCode}
              setData={setCountryCode}
              extraStyles={{
                marginTop: hp(20),
                marginRight: wp(5),
                marginLeft: wp(0),
              }}
            />
          </View>
          <View style={{ flex: 7 }}>
            <CustomInput
              label={"Phone Number"}
              data={phoneNumber}
              setData={setPhoneNumber}
              extraStyles={{
                marginTop: hp(20),
                marginLeft: wp(5),
                marginRight: wp(0),
              }}
              rightIcon={"eye"}
              secureTextEntry={true}
            />
          </View>
        </View>
        <CustomButton
          text={"GET THE CODE"}
          onPressAction={() => navigation.navigate("VerifyAccountPage")}
        />
      </PageContainer>
    </View>
  );
};

export default PhoneNumberPage;
