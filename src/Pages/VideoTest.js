/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PageContainer from "../Components/PageContainer";
import { useTheme } from "react-native-paper";
//import { Video, AVPlaybackStatus } from "expo-av";
import HeaderText from "../Components/HeaderText";
import CustomButton from "../Components/CustomButton";

const VideoTest = ({ navigation }) => {
  const { colors } = useTheme();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={{ backgroundColor: colors.viralBlack, flex: 1 }}>
      <PageContainer>
        <HeaderText text={"VideoTest"} />
        {/* <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://vn-academy-dev-poc-vod.s3.us-east-2.amazonaws.com/Output/Top+Tips+for+Superstar+Presentations+by+Todd+Reubold.m3u8", //S3
          }}
          // source={{
          //   uri: "https://vn-academy-dev-poc-vod.s3.us-east-2.amazonaws.com/Dash+Output/Top+Tips+for+Superstar+Presentations+by+Todd+Reubold.mpd", //S3
          // }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <CustomButton
          text={"Tutorial Page"}
          onPressAction={() => navigation.navigate("TutorialPage")}
        /> */}
      </PageContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

{
  /* REACT-NATIVE-VIDEO
    <Video
          source={{
            uri: "/Users/williambrace/Desktop/ufc.264.poirier.vs.mcgregor.3.ppv.720p.hdtv.x264-verum.mkv",
          }} // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        />

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
}); */
}

export default VideoTest;
