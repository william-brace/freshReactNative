/** @format */

import React, { useState } from "react";
import { View } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { hp, wp } from "../responsiveUnitFunctions";
import styles from "../Styles/styles";

const CustomDropdown = ({
  marginTop = 0,
  marginBottom = 0,
  label,
  mode = "contained",
  data,
  setData,
  dropdownOptions,
  multiSelect = false,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);

  return (
    <React.Fragment>
      <View style={{ height: marginTop }}></View>
      {multiSelect ? (
        <DropDown
          label={label}
          mode={"contained"}
          visible={showMultiSelectDropDown}
          showDropDown={() => setShowMultiSelectDropDown(true)}
          onDismiss={() => setShowMultiSelectDropDown(false)}
          value={data}
          setValue={setData}
          list={dropdownOptions}
          multiSelect
          
        />
      ) : (
        <DropDown
          label={label}
          mode={"contained"}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={data}
          setValue={setData}
          list={dropdownOptions}
        />
      )}

      <View style={{ height: marginBottom }}></View>
    </React.Fragment>
  );
};

export default CustomDropdown;
