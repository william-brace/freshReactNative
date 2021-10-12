/** @format */

import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {useTheme, Avatar} from 'react-native-paper';
import HeaderText from '../Components/HeaderText';
import SmallText from '../Components/SmallText';
import CustomButton from '../Components/CustomButton';
import CustomOutlinedButton from '../Components/CustomOutlinedButton';
//import * as ImagePicker from "expo-image-picker";
import {Link} from '@react-navigation/native';
import styles from '../Styles/styles';
import {hp, wp} from '../responsiveUnitFunctions';
import PageContainer from '../Components/PageContainer';

const AddProfilePhotoPage = ({navigation}) => {
  const {colors} = useTheme();
  const [photo, setPhoto] = React.useState(
    'file:///Users/williambrace/Library/Developer/CoreSimulator/Devices/9FC5AD82-7233-4EB4-B019-70556E01A9C4/data/Containers/Data/Application/F1BF858F-BE28-468C-9F13-5C81150A73F7/Library/Caches/ExponentExperienceData/%2540anonymous%252Fviral-academy-mobile-6eba7145-8abf-4f08-b1e3-d92adc7f9e12/ImagePicker/5FA8F1C6-AAFA-4366-927A-0DBC4E99DA32.jpg',
  );

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } =
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         alert("Sorry, we need camera roll permissions to make this work!");
  //       }
  //     }
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setPhoto(result.uri);
  //   }
  // };

  return (
    <View style={{backgroundColor: colors.viralBlack, flex: 1}}>
      <PageContainer>
        <HeaderText text="Add a profile photo"></HeaderText>
        <SmallText text="Add a photo so that your friends know it's you." />
        <View
          style={{
            ...styles.flexCol,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: hp(30),
          }}>
          <Avatar.Image size={150} source={{uri: photo}} />
        </View>
        <CustomOutlinedButton text={'UPLOAD PROFILE PICTURE'} />
        <CustomButton
          text={'NEXT'}
          onPressAction={() => navigation.navigate('CompleteProfilePage')}
        />
        <Link
          to={{screen: 'ConnectSocialsPage'}}
          style={{color: 'white', alignSelf: 'center', marginTop: hp(20)}}>
          SKIP FOR NOW
        </Link>
      </PageContainer>
    </View>
  );
};

export default AddProfilePhotoPage;
