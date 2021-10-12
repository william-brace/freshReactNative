/** @format */

import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useTheme, Button, ThemeProvider, Icon} from 'react-native-paper';
import CustomOutlinedButton from '../Components/CustomOutlinedButton';
import HeaderText from '../Components/HeaderText';
import SmallText from '../Components/SmallText';
import {hp, wp} from '../responsiveUnitFunctions';
import {Link} from '@react-navigation/native';
import PageContainer from '../Components/PageContainer';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';

const SignUpMethodPage = ({navigation}) => {
  const {colors} = useTheme();

  const [token, setToken] = useState();
  const [posts, setPosts] = useState();

  // useEffect(() => {
  //   console.log(`token is ${token}`);

  //   if (token) {
  //     new GraphRequestManager().addRequest(infoRequest).start();
  //     console.log(`posts are ${posts}`);
  //     console.log(posts);
  //   }
  // }, [token]);

  // function responseInfoCallback(error, result) {
  //   if (error) {
  //     console.log('Error fetching data: ' + error.toString());
  //   } else {
  //     console.log('Success fetching data: ' + result.toString() + '\n');
  //     console.log(result['data'][0].message);
  //     setPosts(result['data']);
  //   }
  // }

  // Create a graph request asking for user information with a callback to handle the response.
  // const infoRequest = new GraphRequest('/me/posts', null, responseInfoCallback);

  return (
    <View style={{backgroundColor: colors.viralBlack, flex: 1}}>
      <PageContainer>
        <View>
          <HeaderText text={'Choose a sign up method'} />
          <SmallText
            text={
              'By using our services you are agreeing to our \n Terms and Privacy Statement'
            }
          />
          {posts &&
            posts.map(post => {
              return <Text>{post.message}</Text>;
            })}
          <CustomOutlinedButton
            text={'SIGN UP WITH EMAIL'}
            icon="email"
            onPressAction={() => navigation.navigate('SignUpPage')}
          />
          <CustomOutlinedButton
            text={'SIGN UP WITH GOOGLE'}
            icon="google"
            onPressAction={() => navigation.navigate('SignUpPage')}
          />
          <CustomOutlinedButton
            text={'SIGN UP WITH FACEBOOK'}
            icon="facebook"
            onPressAction={() => {
              LoginManager.logInWithPermissions([
                'public_profile',
                'email',
                'user_posts',
                `pages_show_list`,
                'pages_manage_posts',
                'pages_manage_posts',
                'pages_read_engagement',
                'publish_to_groups',
                'pages_read_engagement',
                'instagram_basic',
                'instagram_content_publish',
                'instagram_manage_comments',
                'instagram_manage_insights',
                // 'instagram_graph_user_media',
                // 'instagram_graph_user_profile',
              ]).then(
                function (result) {
                  if (result.isCancelled) {
                    alert('Login Cancelled ' + JSON.stringify(result));
                  } else {
                    alert(
                      'Login success with  permisssions: ' +
                        result.grantedPermissions.toString(),
                    );
                    alert('Login Success ' + result.toString());
                    AccessToken.getCurrentAccessToken().then(data => {
                      console.log(data.accessToken.toString());
                      setToken(data.accessToken.toString());
                    });
                    navigation.navigate('SocialFeedPage');
                  }
                },
                function (error) {
                  alert('Login failed with error: ' + error);
                },
              );
            }}
          />
          <CustomOutlinedButton
            text={'SIGN UP WITH apple'}
            icon="apple"
            onPressAction={() => navigation.navigate('SignUpPage')}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(30),
              justifyContent: 'center',
            }}>
            <SmallText text={'Have an account?'} />
            <Link
              to={{screen: 'SignInPage'}}
              style={{
                color: colors.viralBlue,
                textDecorationLine: 'underline',
                fontSize: hp(15),
              }}>
              Sign In
            </Link>
          </View>
        </View>
      </PageContainer>
    </View>
  );
};

export default SignUpMethodPage;
