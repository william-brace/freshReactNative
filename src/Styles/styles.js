/** @format */
import { StyleSheet } from "react-native";
import { hp, wp } from "../responsiveUnitFunctions";

const styles = StyleSheet.create({
  header: {
    fontSize: hp(40),
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: hp(35),
    fontWeight: "300",
  },
  slimText: {
    fontSize: hp(35),
    fontWeight: "200",
  },
  smallText: {
    fontSize: hp(15),
    fontWeight: "200",
  },
  smallTextRegular: {
    fontSize: hp(15),
    fontWeight: "400",
  },
  sideMargins: {
    marginLeft: wp(20),
    marginRight: wp(20),
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
  },
});

export default styles;
