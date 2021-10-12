/** @format */

import React, { useState } from "react";
import { Text, View } from "react-native";
import { useTheme, Button, Checkbox } from "react-native-paper";
import CustomInput from "../Components/CustomInput";
import HeaderText from "../Components/HeaderText";
import SmallText from "../Components/SmallText";
import styles from "../Styles/styles";
import { hp, wp } from "../responsiveUnitFunctions";
import CustomButton from "../Components/CustomButton";
import { useAuth } from "../Contexts/AuthContext";
import { signUp } from "../Adapters/AuthAdapters";
import PageContainer from "../Components/PageContainer";

const SignUpPage = ({ navigation }) => {
  const { colors } = useTheme();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { user, setUser } = useAuth();
  const [signUpErrors, setSignUpErrors] = useState("");

  // const handleSignUp = async () => {
  //   const userDetails = {
  //     email: email,
  //     password: password,
  //   };
  //   setUser(userDetails);
  //   navigation.navigate("PhoneNumberPage");
  // };

  const handleSignUp = async () => {
    const userDetails = {
      email: email,
      password: password,
    };
    let response;
    try {
      response = await signUp(userDetails);
      console.log(response);

      // console.log(response.msg);
      navigation.navigate("AccountTypePage");
    } catch (e) {
      console.log(`catch is `, e.message);
      setSignUpErrors(e.message);
    }
  };

  //let res;
  //   try {
  //     res = await signUp(userDetails);
  //     setUser(userDetails);

  //     //history.push("/account-confirmation");
  //     navigation.navigate("VerifyAccountPage");
  //   } catch (e) {
  //     console.log(e.message);
  //     setSignUpErrors(e.message);
  //   }

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text={"Create your account"} />
        <View styles={{ ...styles.sideMargins }}>
          <SmallText
            extraStyles={{ color: "white", marginTop: hp(10) }}
            text={signUpErrors}
          />
          <CustomInput
            label={"Email"}
            data={email}
            setData={setEmail}
            extraStyles={{ marginTop: hp(20) }}
          />
          <CustomInput
            label={"Password"}
            data={password}
            setData={setPassword}
            extraStyles={{ marginTop: hp(20) }}
            rightIcon={"eye"}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            marginTop: hp(10),
            ...styles.sideMargins,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox
            status="checked"
            color={colors.viralGrey}
            syle={{ backgroundColor: "white" }}
          ></Checkbox>
          <SmallText text={"Please do not email me VA special offers"} />
        </View>
        <CustomButton
          text={"SIGN UP"}
          mode="contained"
          onPressAction={handleSignUp}
        />
      </PageContainer>
    </View>
  );
};

export default SignUpPage;
