/** @format */

// @flow
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { hp, wp } from "../responsiveUnitFunctions";

import CustomButton from "./CustomButton";

const OverlayTooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  labels,
}) => (
  <View>
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
        border: "1 solid black",
        borderRadius: wp(10),
      }}
    >
      <Text testID="stepDescription" style={{ color: "black" }}>
        {currentStep.text}
      </Text>
    </View>
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      {!isLastStep ? (
        <TouchableOpacity onPress={handleStop}>
          <CustomButton text={labels.skip || "Skip"}></CustomButton>
        </TouchableOpacity>
      ) : null}
      {!isFirstStep ? (
        <TouchableOpacity onPress={handlePrev}>
          <CustomButton text={labels.previous || "Previous"}></CustomButton>
        </TouchableOpacity>
      ) : null}
      {!isLastStep ? (
        <TouchableOpacity onPress={handleNext}>
          <CustomButton text={labels.next || "Next"}></CustomButton>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleStop}>
          <CustomButton text={labels.finish || "Finish"}></CustomButton>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default OverlayTooltip;
