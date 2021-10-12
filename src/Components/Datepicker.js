/** @format */

import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { Button } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import CustomInput from "./CustomInput";

const Datepicker = ({ label, data, setData }) => {
  //   const [date, setDate] = (React.useState < Date) | (undefined > undefined);
  const [open, setOpen] = React.useState(false);
  const [displayData, setDisplayData] = useState(null);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setData(params.date);
      setDisplayData(params.date.toString());
    },
    [setOpen, setData]
  );

  return (
    <>
      {/* <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
        Pick single date
      </Button> */}
      <Pressable onPress={() => setOpen(true)}>
        <View pointerEvents="none">
          <CustomInput
            label={label}
            data={displayData}
            setData={setData}
            disabled={true}
            rightIcon={"calendar"}
          />
        </View>
      </Pressable>
      <DatePickerModal
        // locale={'en'} optional, default: automatic
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={data}
        onConfirm={onConfirmSingle}
        validRange={{
          // optional
          endDate: new Date(), // optional
        }}
        // onChange={} // same props as onConfirm but triggered without confirmed by user
        // saveLabel="Save" // optional
        // label="Select date" // optional
        // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
      />
    </>
  );
};

export default Datepicker;
