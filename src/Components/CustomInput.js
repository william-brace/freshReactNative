/** @format */
import React from "react";
import { useTheme, TextInput } from "react-native-paper";
import styles from "../Styles/styles";
import { hp, wp } from "../responsiveUnitFunctions";
import { Keyboard, keyboardDidShow } from "react-native";

const CustomInput = ({
  label,
  data,
  setData,
  extraStyles,
  secureTextEntry = false,
  rightIcon = false,
  disabled = false,
  onPressAction,
}) => {
  const { colors } = useTheme();

  return (
    <TextInput
      label={label}
      value={data}
      theme={{ colors: { primary: colors.text } }}
      selectionColor={colors.text}
      secureTextEntry={secureTextEntry}
      right={<TextInput.Icon name={rightIcon} />}
      style={{
        backgroundColor: "#2F2F2F",
        marginTop: hp(30),
        ...extraStyles,
      }}
      onChangeText={(data) => setData(data)}
      disabled={disabled}
      onPress={onPressAction}
    />
  );
};

export default CustomInput;
