/** @format */

import { NavigationHelpersContext } from "@react-navigation/core";
import React, { useState } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import CustomButton from "../Components/CustomButton";
import CustomInput from "../Components/CustomInput";
import HeaderText from "../Components/HeaderText";
import styles from "../Styles/styles";
import { hp, wp } from "../responsiveUnitFunctions";
import PageContainer from "../Components/PageContainer";

const AddPaymenInfoPage = ({ navigation }) => {
  const { colors } = useTheme();
  const [cardHolderName, setCardHolderName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cardExpirationDate, setCardExpirationDate] = useState();
  const [cardCCV, setCardCCV] = useState();

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text="Add your payment info"></HeaderText>
        <CustomInput
          label={"Card Holder Name"}
          data={cardHolderName}
          setData={setCardHolderName}
        />
        <CustomInput
          label={"Card Number"}
          data={cardNumber}
          setData={setCardNumber}
        />
        <View style={{ ...styles.flexRow }}>
          <CustomInput
            label={"Expiration Date"}
            data={cardExpirationDate}
            setData={setCardExpirationDate}
            extraStyles={{ flex: 1, marginRight: wp(10) }}
          />
          <CustomInput
            label={"CCV"}
            data={cardCCV}
            setData={setCardCCV}
            extraStyles={{ flex: 1, marginLeft: wp(10) }}
          />
        </View>
        <CustomButton
          text={"CONFIRM"}
          onPressAction={() => navigation.navigate("AddProfilePhotoPage")}
        />
      </PageContainer>
    </View>
  );
};

export default AddPaymenInfoPage;
