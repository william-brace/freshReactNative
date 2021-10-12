/** @format */

import { Link } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTheme, Button, Checkbox } from "react-native-paper";
import CustomInput from "../Components/CustomInput";
import HeaderText from "../Components/HeaderText";
import SmallText from "../Components/SmallText";
import styles from "../Styles/styles";
import CustomButton from "../Components/CustomButton";
import CustomOutlinedButton from "../Components/CustomOutlinedButton";
import { hp, wp } from "../responsiveUnitFunctions";
import PageContainer from "../Components/PageContainer";
import { signIn } from "../Adapters/AuthAdapters";

const SignInPage = ({ navigation }) => {
  const { colors } = useTheme();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signInErrors, setSignInErrors] = useState("");

  const handleSignIn = async () => {
    const userDetails = {
      email: email,
      password: password,
    };
    let response;
    try {
      response = await signIn(userDetails);
      console.log(response);

      // console.log(response.msg);
      navigation.navigate("VideoTest");
    } catch (e) {
      console.log(`catch is `, e.message);
      setSignInErrors(e.message);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text={"Welcome back, Sign in"} />
        <View styles={{ ...styles.sideMargins }}>
          <SmallText
            style={{ color: "white", marginTop: hp(30) }}
            text={signInErrors}
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

          <Link
            to={{ screen: "RecoverPasswordPage" }}
            style={{
              color: "white",
              marginTop: hp(30),
              ...styles.sideMargins,
              fontSize: hp(20),
              textDecorationLine: "underline",
            }}
          >
            Forgot your password?
          </Link>
          <CustomButton
            text={"SIGN IN"}
            onPressAction={handleSignIn}
          ></CustomButton>
          <CustomOutlinedButton
            icon={"google"}
            text={"google"}
          ></CustomOutlinedButton>
          <CustomOutlinedButton
            icon={"facebook"}
            text={"facebook"}
          ></CustomOutlinedButton>
          <CustomOutlinedButton
            icon={"apple"}
            text={"apple"}
          ></CustomOutlinedButton>
          <View
            style={{
              flexDirection: "row",
              marginTop: hp(30),
              justifyContent: "center",
            }}
          >
            <SmallText text={"Don't have an account?"} />
            <Link
              to={{ screen: "SignUpPage" }}
              style={{
                color: colors.viralBlue,
                textDecorationLine: "underline",
                fontSize: hp(15),
              }}
            >
              Sign Up
            </Link>
          </View>
        </View>
      </PageContainer>
    </ScrollView>
  );
};

export default SignInPage;
