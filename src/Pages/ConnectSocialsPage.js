/** @format */

import { Link } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useTheme, Button, ThemeProvider, Icon } from "react-native-paper";
import CustomButton from "../Components/CustomButton";
import CustomOutlinedButton from "../Components/CustomOutlinedButton";
import HeaderText from "../Components/HeaderText";
import SmallText from "../Components/SmallText";
import { hp, wp } from "../responsiveUnitFunctions";
import PageContainer from "../Components/PageContainer";

const ConnectSocialsPage = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText
          text={"Connect your socials"}
          extraStyles={{ marginTop: hp(40) }}
        />
        <SmallText
          text={
            "Connect your Social Media Accounts to grow your audience and get recognized instantly."
          }
          extraStyles={{ marginTop: 15 }}
        />
        <CustomOutlinedButton icon="instagram" text={"CONNECT INSTAGRAM"} />
        <CustomOutlinedButton icon="facebook" text={"CONNECT FACEBOOK"} />
        <CustomOutlinedButton icon="twitter" text={"CONNECT TWITTER"} />
        <CustomOutlinedButton icon="youtube" text={"CONNECT YOUTUBE"} />
        <CustomButton
          text={"GO TO DASHBOARD"}
          onPressAction={() => navigation.navigate("VideoTest")}
        />
        <Link
          to={{ screen: "HomePage" }}
          style={{ color: "white", alignSelf: "center", marginTop: hp(20) }}
        >
          SKIP FOR NOW
        </Link>
      </PageContainer>
    </View>
  );
};

export default ConnectSocialsPage;
