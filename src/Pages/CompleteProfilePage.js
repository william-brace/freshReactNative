/** @format */

// /** @format */

/** @format */

import { NavigationHelpersContext } from "@react-navigation/core";
import React, { useState } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import CustomButton from "../Components/CustomButton";
import CustomInput from "../Components/CustomInput";
import HeaderText from "../Components/HeaderText";
import { Button } from "react-native-paper";
import CustomDropdown from "../Components/CustomDropdown";
import Datepicker from "../Components/Datepicker";
import styles from "../Styles/styles";
import { hp, wp } from "../responsiveUnitFunctions";
import PageContainer from "../Components/PageContainer";

const CompleteProfilePage = ({ navigation }) => {
  const { colors } = useTheme();
  const [fullName, setFullName] = useState(null);
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [location, setLocation] = useState("");

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text="Complete your profile"></HeaderText>
        <CustomInput
          label={"Full Name"}
          data={fullName}
          setData={setFullName}
        />
        <CustomDropdown
          marginTop={hp(30)}
          label={"Gender"}
          dropdownOptions={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          data={gender}
          setData={setGender}
        />
        <CustomDropdown
          marginTop={wp(30)}
          label={"Languages"}
          dropdownOptions={[
            {
              label: "English",
              value: "english",
            },
            {
              label: "Spanish",
              value: "spanish",
            },
            {
              label: "French",
              value: "french",
            },
            {
              label: "Green",
              value: "green",
            },
            {
              label: "Orange",
              value: "orange",
            },
          ]}
          data={languages}
          setData={setLanguages}
          multiSelect={true}
        />
        <Datepicker
          label={"Birth Date"}
          data={birthDate}
          setData={setBirthDate}
        />
        <CustomInput
          label={"Location"}
          data={location}
          setData={setLocation}
          rightIcon={"pin"}
        />

        <CustomButton
          text={"FINISH"}
          onPressAction={() => navigation.navigate("ConnectSocialsPage")}
        />
      </PageContainer>
    </View>
  );
};

export default CompleteProfilePage;

// import React, { useState } from "react";
// import { View, Button, Platform } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";

// export const CompleteProfilePage = () => {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState("date");
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === "ios");
//     setDate(currentDate);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode("date");
//   };

//   const showTimepicker = () => {
//     showMode("time");
//   };

//   return (
//     <View>
//       <View>
//         <Button onPress={showDatepicker} title="Show date picker!" />
//       </View>
//       <View>
//         <Button onPress={showTimepicker} title="Show time picker!" />
//       </View>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//     </View>
//   );
// };

// export default CompleteProfilePage;
