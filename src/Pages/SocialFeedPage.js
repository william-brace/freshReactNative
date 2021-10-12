/** @format */

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PageContainer from '../Components/PageContainer';
import {useTheme} from 'react-native-paper';
import HeaderText from '../Components/HeaderText';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import SmallText from '../Components/SmallText';
import {hp, wp} from '../responsiveUnitFunctions';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';

const SocialFeedPage = ({navigation}) => {
  const {colors} = useTheme();
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();
  const [pageInfo, setPageInfo] = useState();
  const [pagePosts, setPagePosts] = useState([]);
  const [postInput, setPostInput] = useState();
  const [instagram, setInstagram] = useState();

  useEffect(async () => {
    try {
      getUserInfoRequest();
      getPageInfoRequest();
    } catch (e) {
      console.error(`error in useEffect is ${e}`);
    }
  }, []);

  const handlePostStatus = () => {
    postPageRequest(postInput);
  };

  // useEffect(() => {
  //   try {
  //     postPageRequest();
  //   } catch (e) {
  //     console.error(`error in second useEffect is ${e}`);
  //   }
  // }, [pageInfo]);
  useEffect(() => {
    try {
      getPageInstagramRequest();
    } catch (e) {
      console.error(`error in second useEffect is ${e}`);
    }
  }, [pageInfo]);

  //Get all posts to personal (not page) facebook account
  function personalPostRequestCallback(error, result) {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      console.log('Success fetching data: ' + result.toString() + '\n');
      console.log(result['data'][0].message);
      setPosts(result['data']);
    }
  }
  const personalPostRequest = new GraphRequest(
    '/me/posts',
    null,
    personalPostRequestCallback,
  );

  //function that returns a promise which gets user info
  const getUserInfoRequest = () => {
    return new Promise((resolve, reject) => {
      const userInfoRequest = new GraphRequest('/me', null, (error, result) => {
        if (error) {
          console.log('Error fetching userIndo: ' + error.toString());
          reject(error);
        } else {
          console.log('Success fetching userInfo: ' + result.toString() + '\n');
          setUser(result);
          resolve(result);
        }
      });
      new GraphRequestManager().addRequest(userInfoRequest).start();
    });
  };

  const getPageInfoRequest = () => {
    return new Promise((resolve, reject) => {
      const pageInfoRequest = new GraphRequest(
        `/me/accounts`,
        {accessToken: AccessToken},
        (error, result) => {
          if (error) {
            console.log('Error fetching pageInfo: ' + error.toString());
            reject(error);
          } else {
            console.log(
              'Success fetching pageInfo: ' + result.toString() + '\n',
            );
            setPageInfo(result.data);
            console.log(result.data);
            resolve(result[0]);
          }
        },
      );
      new GraphRequestManager().addRequest(pageInfoRequest).start();
    });
  };

  const postPageRequest = message => {
    return new Promise((resolve, reject) => {
      const postPageRequest = new GraphRequest(
        `/${pageInfo.id}/feed`,
        {
          accessToken: pageInfo.access_token,
          parameters: {
            message: {string: message},
          },
          httpMethod: 'POST',
        },
        (error, result) => {
          if (error) {
            console.log('Error posting to page: ' + error.toString());
            reject(error);
          } else {
            console.log('Success posting to page: ' + result.toString() + '\n');
            console.log(`page successfully posted with id: ${result}`);
            console.log(result);
            setPagePosts(prevPosts => [...prevPosts, result.id]);
            resolve(result);
          }
        },
      );
      new GraphRequestManager().addRequest(postPageRequest).start();
    });
  };

  const getPageInstagramRequest = message => {
    return new Promise((resolve, reject) => {
      const pageInstagramRequest = new GraphRequest(
        //This is getting the instagram connected to the first page in the array only
        `/${pageInfo[0].id}`,
        {
          accessToken: AccessToken,
          parameters: {
            fields: {string: 'instagram_business_account'},
          },
          httpMethod: 'GET',
        },
        (error, result) => {
          if (error) {
            console.log('Error getting instagram account: ' + error.toString());
            reject(error);
          } else {
            console.log(
              'Success getting instagram account: ' + result.toString() + '\n',
            );
            console.log(`Instagram succesfully connected with ID:`);
            console.log(result);
            setInstagram(result);
            resolve(result);
          }
        },
      );
      new GraphRequestManager().addRequest(pageInstagramRequest).start();
    });
  };

  return (
    <View style={{backgroundColor: colors.viralBlack, flex: 1}}>
      <PageContainer>
        <HeaderText text={'SocialFeedPage'} />
        {posts &&
          posts.map(post => {
            return <SmallText text={post.message} />;
          })}
        {user && <HeaderText text={user.id} />}
        {pageInfo &&
          pageInfo.map((page, index) => {
            return <HeaderText text={`page ${index + 1} is ${page.name}`} />;
          })}
        {instagram && (
          <HeaderText
            text={`Page with name ${pageInfo[0].name} has a connected instagram business account with id ${instagram['instagram_business_account']['id']}`}
          />
        )}
        {/* <CustomInput
          label={'Create new post to Williams World'}
          data={postInput}
          setData={setPostInput}
          extraStyles={{marginTop: hp(20)}}
        />
        <CustomButton
          text={'POST'}
          mode="contained"
          onPressAction={handlePostStatus}
        /> */}
      </PageContainer>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SocialFeedPage;
