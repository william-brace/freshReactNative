/** @format */

import React, { useState, useEffect } from "react";
import { ScrollView, View, FlatList } from "react-native";
import CustomOutlinedButton from "./CustomOutlinedButton";
import { hp, wp } from "../responsiveUnitFunctions";

const SelectList = ({ itemList, selectedAmount, setSelectedAmount }) => {
  const [items, setItems] = useState(itemList);

  useEffect(() => {
    let count = 0;
    items.forEach((item) => {
      if (item.selected) count++;
    });
    setSelectedAmount(count);
  }, [items]);

  const updateItem = (index) => {
    const updatedItems = [...items];

    //If the number of selected Items is greater than equal to 5, only allow de-selects to occur, no more selections
    if (selectedAmount >= 5) {
      if (updatedItems[index].selected) {
        updatedItems[index].selected = !updatedItems[index].selected;
        setItems(updatedItems);
      }
    }
    //If the number of selected Items is less 5, allow for both deselections and selections
    else {
      updatedItems[index].selected = !updatedItems[index].selected;
      setItems(updatedItems);
    }
  };
  return (
    <View
      style={{
        marginTop: hp(20),
        marginLeft: wp(20),
        marginRight: wp(20),
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        contentContainerStyle: "flex row flexStart",
      }}
    >
      {items.map((item, itemIndex) => {
        return (
          <CustomOutlinedButton
            text={item.name}
            mode={item.selected ? "contained" : "outlined"}
            onPressAction={() => updateItem(itemIndex)}
            extraStyles={{
              flexShrink: 0,
              marginLeft: wp(10),
              marginRight: wp(10),
            }}
          />
        );
      })}
    </View>
  );
};

export default SelectList;
