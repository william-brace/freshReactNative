import React from 'react';
import {StatusBar, SafeAreaView, View} from "react-native"

const CustomStatusBar = ({backgroundColor, ...props}) => {
    return (
    <View style={[StatusBar.currentHeight, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>)
  };


  export default CustomStatusBar