/** @format */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../Pages/LandingPage';
import NichePage from '../Pages/NichePage';
import SignUpMethodPage from '../Pages/SignUpMethodPage';
import SignUpPage from '../Pages/SignUpPage';
import PhoneNumberPage from '../Pages/PhoneNumberPage';
import VerifyAccountPage from '../Pages/VerifyAccountPage';
import AccountTypePage from '../Pages/AccountTypePage';
import AddPaymentInfoPage from '../Pages/AddPaymentInfoPage';
import CompleteProfilePage from '../Pages/CompleteProfilePage';
import AddProfilePhotoPage from '../Pages/AddProfilePhotoPage';
import ConnectSocialsPage from '../Pages/ConnectSocialsPage';
import RecoverPasswordPage from '../Pages/RecoverPasswordPage';
import EmailSentPage from '../Pages/EmailSentPage';
import CreateNewPasswordPage from '../Pages/CreateNewPasswordPage';
import PasswordChangedPage from '../Pages/PasswordChangedPage';
import SignInPage from '../Pages/SignInPage';
import HomePage from '../Pages/HomePage';
import {useTheme} from 'react-native-paper';
import VideoTest from '../Pages/VideoTest';
import TutorialPage from '../Pages/TutorialPage';
import SocialFeedPage from '../Pages/SocialFeedPage';
const Stack = createStackNavigator();

export default function AuthenticationStack() {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.viralBlack,
        },
      }}>
      <Stack.Screen
        name="SignUpMethodPage"
        component={SignUpMethodPage}
        options={{title: false}}
      />
      {/*  */}
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{title: false, headerShown: false}}
      />
      <Stack.Screen
        name="SignInPage"
        component={SignInPage}
        options={{title: false}}
      />
      <Stack.Screen
        name="SignUpPage"
        component={SignUpPage}
        options={{title: false}}
      />

      <Stack.Screen
        name="NichePage"
        component={NichePage}
        options={{title: false}}
      />
      {/* Sign UP method page */}

      <Stack.Screen
        name="PhoneNumberPage"
        component={PhoneNumberPage}
        options={{title: false}}
      />
      <Stack.Screen
        name="VerifyAccountPage"
        component={VerifyAccountPage}
        options={{title: false}}
      />
      <Stack.Screen
        name="AccountTypePage"
        component={AccountTypePage}
        options={{title: false}}
      />
      <Stack.Screen
        name="AddPaymentInfoPage"
        component={AddPaymentInfoPage}
        options={{title: false}}
      />
      <Stack.Screen
        name="AddProfilePhotoPage"
        component={AddProfilePhotoPage}
        options={{title: false}}
      />

      <Stack.Screen
        name="CompleteProfilePage"
        component={CompleteProfilePage}
        options={{title: false}}
      />

      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{title: false}}
      />
      <Stack.Screen
        name="EmailSentPage"
        component={EmailSentPage}
        options={{title: false}}
      />
      <Stack.Screen
        name="RecoverPasswordPage"
        component={RecoverPasswordPage}
        options={{title: false}}
      />
      <Stack.Screen
        name="CreateNewPasswordPage"
        component={CreateNewPasswordPage}
        options={{title: false}}
      />
      <Stack.Screen
        name="PasswordChangedPage"
        component={PasswordChangedPage}
        options={{title: false}}
      />
      <Stack.Screen
        name="ConnectSocialsPage"
        component={ConnectSocialsPage}
        options={{title: false}}
      />
      <Stack.Screen
        name="TutorialPage"
        component={TutorialPage}
        options={{title: false}}
      />
      <Stack.Screen
        name="VideoTest"
        component={VideoTest}
        options={{title: false}}
      />
      <Stack.Screen
        name="SocialFeedPage"
        component={SocialFeedPage}
        options={{title: false}}
      />
    </Stack.Navigator>
  );
}
