// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

/** @format */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import AuthenticationStack from './src/Components/AuthenticationStack';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import CustomStatusBar from './src/Components/CustomStatusBar';
import {AuthProvider} from './src/Contexts/AuthContext';

import {
  TourGuideProvider, // Main provider
} from 'rn-tourguide';

const theme = {
  ...DefaultTheme,
  dark: true,
  backgroundColor: '#121212',
  colors: {
    ...DefaultTheme.colors,
    viralBlack: '#121212',
    viralBlue: '#43b0ff',
    viralGrey: '#2F2F2F',
    primary: '#43b0ff',
    accent: 'pink',
    background: '#2F2F2F',
    surface: '#2F2F2F',
    text: 'rgba(255, 255, 255, 0.6)',
    disabled: 'grey',
    underlineColor: 'transparent',
    placeholder: 'grey',
    backdrop: 'pink',
    onSurface: 'pink',
  },
};

export default function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <CustomStatusBar backgroundColor="#121212" barStyle="light-content" />
        <PaperProvider theme={theme}>
          <View style={styles.container}>
            <NavigationContainer style={styles.container}>
              <TourGuideProvider {...{borderRadius: 16}}>
                <AuthenticationStack />
              </TourGuideProvider>
            </NavigationContainer>
          </View>
        </PaperProvider>
      </AuthProvider>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import React, {useState, useEffect} from 'react';
// import {Button, Text, View} from 'react-native';
// import {
//   LoginManager,
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
// } from 'react-native-fbsdk-next';
// function App(props) {
//   const [token, setToken] = useState();
//   const [posts, setPosts] = useState();

//   useEffect(() => {
//     console.log(`token is ${token}`);

//     if (token) {
//       new GraphRequestManager().addRequest(infoRequest).start();
//       console.log(`posts are ${posts}`);
//       console.log(posts);
//     }
//   }, [token]);

//   function responseInfoCallback(error, result) {
//     if (error) {
//       console.log('Error fetching data: ' + error.toString());
//     } else {
//       console.log('Success fetching data: ' + result.toString() + '\n');
//       console.log(result['data'][0].message);
//       setPosts(result['data']);
//     }
//   }

//   // Create a graph request asking for user information with a callback to handle the response.
//   const infoRequest = new GraphRequest('/me/posts', null, responseInfoCallback);

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Facebook Login React Native Example</Text>
//       {posts &&
//         posts.map(post => {
//           return <Text>{post.message}</Text>;
//         })}
//       <Button
//         title={'Login with Facebook'}
//         onPress={() => {
//           LoginManager.logInWithPermissions([
//             'public_profile',
//             'email',
//             'user_posts',
//           ]).then(
//             function (result) {
//               if (result.isCancelled) {
//                 alert('Login Cancelled ' + JSON.stringify(result));
//               } else {
//                 alert(
//                   'Login success with  permisssions: ' +
//                     result.grantedPermissions.toString(),
//                 );
//                 alert('Login Success ' + result.toString());
//                 AccessToken.getCurrentAccessToken().then(data => {
//                   console.log(data.accessToken.toString());
//                   setToken(data.accessToken.toString());
//                 });
//               }
//             },
//             function (error) {
//               alert('Login failed with error: ' + error);
//             },
//           );
//         }}
//       />
//     </View>
//   );
// }
// export default App;
