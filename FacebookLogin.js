import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
function App(props) {
  const [token, setToken] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    console.log(`token is ${token}`);

    if (token) {
      new GraphRequestManager().addRequest(infoRequest).start();
      console.log(`posts are ${posts}`);
      console.log(posts);
    }
  }, [token]);

  function responseInfoCallback(error, result) {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      console.log('Success fetching data: ' + result.toString() + '\n');
      console.log(result['data'][0].message);
      setPosts(result['data']);
    }
  }

  // Create a graph request asking for user information with a callback to handle the response.
  const infoRequest = new GraphRequest('/me/posts', null, responseInfoCallback);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Facebook Login React Native Example</Text>
      {posts &&
        posts.map(post => {
          return <Text>{post.message}</Text>;
        })}
      <Button
        title={'Login with Facebook'}
        onPress={() => {
          LoginManager.logInWithPermissions([
            'public_profile',
            'email',
            'user_posts',
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
                navigation.naviagate("")
              }
            },
            function (error) {
              alert('Login failed with error: ' + error);
            },
          );
        }}
      />
    </View>
  );
}
export default App;
