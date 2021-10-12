/** @format */

import React, { useEffect, Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import PageContainer from "../Components/PageContainer";
import { useTheme, withTheme } from "react-native-paper";
import HeaderText from "../Components/HeaderText";
import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";
import CustomButton from "../Components/CustomButton";
import {
  TourGuideZone, // Main wrapper of highlight component
  TourGuideZoneByPosition, // Component to use mask on overlay (ie, position absolute)
  useTourGuideController, // hook to start, etc.
} from "rn-tourguide";
//import OverlayTooltip from "../Components/OverlayTooltip";

// const TutorialPage = () => {
//   const { colors } = useTheme();
//   const {
//     canStart, // a boolean indicate if you can start tour guide
//     start, // a function to start the tourguide
//     stop, // a function  to stopping it
//     eventEmitter, // an object for listening some events
//   } = useTourGuideController();

//   useEffect(() => {
//     if (canStart) {
//       // 👈 test if you can start otherwise nothing will happen
//       start();
//     }
//   }, [canStart]); // 👈 don't miss it!

//   useEffect(() => {
//     eventEmitter.on("start", () => console.log("start"));
//     eventEmitter.on("stop", () => console.log("stop"));
//     eventEmitter.on("stepChange", () => console.log(`stepChange`));

//     return () => eventEmitter.off("*", null);
//   }, []);

//   return (
//     <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
//       <PageContainer>
//         <TourGuideZone
//           zone={1}
//           text={"A react-native-copilot remastered! 🎉"}
//           shape={"rectangle"}
//         >
//           {/* <HeaderText text={'"Welcome to the demo of\n"rn-tourguide"'} /> */}
//           <HeaderText text={"The header"} />
//         </TourGuideZone>
//         <TourGuideZone zone={2} text={"Zone 2"} shape={"rectangle"}>
//           {/* <HeaderText text={'"Welcome to the demo of\n"rn-tourguide"'} /> */}
//           <CustomButton text={"Click me!"} />
//         </TourGuideZone>
//         <CustomButton
//           text={"Generate Text"}
//           extraStyles={{ marginTop: 200 }}
//           onPressAction={() => console.log("text generated!")}
//         ></CustomButton>
//       </PageContainer>
//     </View>
//   );
// };

// export default TutorialPage;

//************COPILOT FUNCTIONAL TEST******************/
// const CopilotText = walkthroughable(Text);
// const TutorialPage = ({ start }) => {
//   const { colors } = useTheme();

//   useEffect(() => {
//     start();
//   });

//   return (
//     <View style={{ flex: 1 }}>
//       <PageContainer>
//         <HeaderText text={"Tutorial Page"} />
//         <CopilotStep
//           text="Click this button to get started!"
//           order={1}
//           name={"firstButton"}
//         >
//           <CopilotText>CopilotText</CopilotText>
//         </CopilotStep>
//       </PageContainer>
//     </View>
//   );
// };

// export default copilot({ animated: true, overlay: "svg" })(TutorialPage);

// *****************REACT-NATIVE-COPILOT*********************
const CopilotText = walkthroughable(Text);
const CopilotCustomButton = ({ copilot, text }) => (
  <View {...copilot}>
    <CustomButton text={text} />
  </View>
);
class TutorialPage extends Component {
  componentDidMount() {
    this.props.copilotEvents.on("stepChange", this.handleStepChange);
    this.props.start();
  }

  handleStepChange = (step) => {
    console.log(`Current step is: ${step.name}`);
  };
  render() {
    return (
      <View
        style={{ backgroundColor: this.props.theme.colors.viralBlack, flex: 1 }}
      >
        <PageContainer>
          <HeaderText text={"Tutorial Page"} />
          <CopilotStep text="Step 1" order={1} name={"firstButton"}>
            <CopilotCustomButton text={"Button 1!"} />
          </CopilotStep>
          <CopilotStep text="Step 2!" order={2} name={"secondButton"}>
            <CopilotCustomButton text={"Click me!"} />
          </CopilotStep>
          <CopilotStep text="STep 3!" order={3} name={"thirdButton"}>
            <CopilotCustomButton text={"Click me!"} />
          </CopilotStep>
          <CopilotStep text="Step 4!" order={4} name={"fourthButton"}>
            <CopilotCustomButton text={"Click me!"} />
          </CopilotStep>
          <CopilotStep text="Step 5!" order={5} name={"fifthButton"}>
            <CopilotCustomButton text={"Click me!"} />
          </CopilotStep>
          <CustomButton
            text={"Generate Text"}
            extraStyles={{ marginTop: 200 }}
            onPressAction={() => console.log("text generated!")}
          ></CustomButton>
        </PageContainer>
      </View>
    );
  }
}

const style = {
  backgroundColor: "#9FA8DA",
  borderRadius: 10,
  paddingTop: 5,
};

export default copilot({
  animated: true,
  overlay: "svg",
  tooltipStyle: style,
  // tooltipComponent: OverlayTooltip,
})(withTheme(TutorialPage));
