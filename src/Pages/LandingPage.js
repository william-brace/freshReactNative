/** @format */

import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { useTheme, Button, ThemeProvider } from "react-native-paper";
import { Link } from "@react-navigation/native";
import { hp, wp } from "../responsiveUnitFunctions";
import styles from "../Styles/styles";
import PageContainer from "../Components/PageContainer";

const { height, width } = Dimensions.get("window");

const LandingPage = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <ScrollView style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <Text
          style={{
            color: "white",
            ...styles.header,
            marginTop: hp(30),
            ...styles.sideMargins,
          }}
        >
          Welcome to {"\n"}Viral Academy{" "}
        </Text>
        <Image
          source={require("../../assets/everton-vila-AsahNlC0VhQ-unsplash.jpg")}
          style={{
            width: width,
            resizeMode: "contain",
            height: hp(300),
            marginTop: hp(20),
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            color: "white",
            ...styles.subHeader,
            marginTop: hp(30),
            marginLeft: wp(20),
            marginRight: wp(20),
          }}
        >
          Time to Simplify Success
        </Text>
        <Text
          style={{
            color: "white",
            ...styles.slimText,
            marginLeft: wp(20),
            marginRight: wp(20),
          }}
        >
          Using Only One App.
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: wp(30),
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              color: "white",
              ...styles.smallText,
              marginTop: hp(10),
              marginLeft: wp(20),
              marginRight: wp(20),
            }}
          >
            HAVE AN ACCOUNT?
          </Text>
          <Link
            style={{
              color: "white",
              ...styles.smallTextRegular,
              marginTop: hp(10),
              marginRight: wp(5),
            }}
            to={{ screen: "SignInPage" }}
          >
            SIGN IN
          </Link>
        </View>
        <Text
          style={{
            color: "white",
            ...styles.subHeader,
            marginTop: hp(30),
            ...styles.sideMargins,
          }}
        >
          Ready to get viral?
        </Text>
        <Text
          style={{
            color: "white",
            ...styles.smallText,
            marginTop: hp(10),
            ...styles.sideMargins,
          }}
        >
          Access courses, videos, creators and VA exclusive posts. Analyze your
          growth and plan your future all within one app. Discover the power.
        </Text>
        <Button
          mode="contained"
          style={{ marginTop: hp(30), ...styles.sideMargins }}
          onPress={() => navigation.navigate("NichePage")}
        >
          GET STARTED
        </Button>
      </PageContainer>
    </ScrollView>
  );
};

export default LandingPage;
