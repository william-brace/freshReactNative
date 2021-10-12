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

const EmailSentPage = ({ navigation }) => {
  const { colors } = useTheme();
  const [email, setEmail] = useState();

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text={"Email Has Been Sent"} />
        <SmallText
          text={
            "Check your inbox and click the received link to resest your password"
          }
        />
        <CustomButton
          text={"CHECK MY INBOX"}
          onPressAction={() => navigation.navigate("CreateNewPasswordPage")}
        />
        <Link
          to={{ screen: "HomePage" }}
          style={{ color: "white", alignSelf: "center", marginTop: hp(20) }}
        >
          DIDN'T RECIEVE THE EMAIL
        </Link>
      </PageContainer>
    </View>
  );
};

export default EmailSentPage;
