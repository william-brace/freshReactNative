/** @format */

import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme, Icon} from 'react-native-paper';
import HeaderText from '../Components/HeaderText';
import SmallText from '../Components/SmallText';
import CustomButton from '../Components/CustomButton';
import CustomOutlinedButton from '../Components/CustomOutlinedButton';
import PageContainer from '../Components/PageContainer';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from '../Styles/styles';
import {hp, wp} from '../responsiveUnitFunctions';

const AccountTypePage = ({navigation}) => {
  const {colors} = useTheme();

  const [creatorSelected, setCreatorSelected] = useState(true);
  const [contentSelected, setContentSelected] = useState(false);

  return (
    <View style={{backgroundColor: colors.viralBlack, flex: 1}}>
      <PageContainer>
        <HeaderText text="Choose your account type"></HeaderText>
        <SmallText text={'RECOMMENDED'} extraStyles={{marginTop: hp(40)}} />
        <CustomOutlinedButton
          text={'CREATOR'}
          mode={creatorSelected ? 'contained' : 'outlined'}
          extraStyles={{marginTop: 0}}
          onPressAction={() => {
            setCreatorSelected(true);
            setContentSelected(false);
          }}
        />

        {/*change opacity of text  when buttons are clicked*/}
        <View style={{...styles.flexRow}}>
          <SmallText
            text={'Enjoy all the perks only for $18.99/month.'}
            extraStyles={
              !creatorSelected
                ? {
                    alignSelf: 'center',
                    opacity: 0.5,
                    marginTop: hp(20),
                    marginBottom: hp(20),
                    marginLeft: 0,
                    textAlign: 'left',
                  }
                : {
                    alignSelf: 'center',
                    marginTop: hp(20),
                    marginBottom: hp(20),
                    marginLeft: 0,
                    textAlign: 'left',
                  }
            }
          />
        </View>

        <View style={{...styles.flexRow}}>
          <Ionicons
            name="md-checkmark-circle"
            size={hp(26)}
            style={
              creatorSelected
                ? {color: 'rgb(255,255,255)'}
                : {color: 'rgba(255,255,255,0.5)'}
            }
          />
          <SmallText
            text={'Access 1000+ hours of VA exclusive content.'}
            extraStyles={
              !creatorSelected
                ? {alignSelf: 'center', opacity: 0.5}
                : {alignSelf: 'center'}
            }
          />
        </View>
        <View style={{...styles.flexRow}}>
          <Ionicons
            name="md-checkmark-circle"
            size={hp(26)}
            style={
              creatorSelected
                ? {color: 'rgb(255,255,255)'}
                : {color: 'rgba(255,255,255,0.5)'}
            }
          />
          <SmallText
            text={'Find your next favorite creator.'}
            extraStyles={
              creatorSelected
                ? {alignSelf: 'center'}
                : {alignSelf: 'center', opacity: 0.5}
            }
          />
        </View>
        <View style={{...styles.flexRow}}>
          <Ionicons
            name="md-checkmark-circle"
            size={hp(26)}
            style={
              creatorSelected
                ? {color: 'rgb(255,255,255)'}
                : {color: 'rgba(255,255,255,0.5)'}
            }
          />
          <SmallText
            text={'Get best tips to start your creating journey.'}
            extraStyles={
              !creatorSelected
                ? {alignSelf: 'center', opacity: 0.5}
                : {alignSelf: 'center'}
            }
          />
        </View>
        <View style={{...styles.flexRow}}>
          <Ionicons
            name="md-checkmark-circle"
            size={hp(26)}
            backgroundColor={'rgba(255, 255, 255, 0.5)'}
          />
          <SmallText
            text={'Analyze your social media growth with statistics'}
            extraStyles={
              !creatorSelected
                ? {alignSelf: 'center', opacity: 0.5}
                : {alignSelf: 'center'}
            }
          />
        </View>
        {/* CONTENT ONLY SECTION */}
        <CustomOutlinedButton
          text={'CONTENT ONLY'}
          mode={contentSelected ? 'contained' : 'outlined'}
          onPressAction={() => {
            setContentSelected(true);
            setCreatorSelected(false);
          }}
        />
        <View style={{...styles.flexRow}}>
          <SmallText
            text={'Enjoy certain perks only for $11.99/month.'}
            extraStyles={
              contentSelected
                ? {
                    alignSelf: 'center',
                    marginTop: hp(20),
                    marginBottom: hp(20),
                    marginLeft: 0,
                    textAlign: 'left',
                  }
                : {
                    alignSelf: 'center',
                    opacity: 0.5,
                    marginTop: hp(20),
                    marginBottom: hp(20),
                    marginLeft: 0,
                    textAlign: 'left',
                  }
            }
          />
        </View>

        <View style={{...styles.flexRow}}>
          <Ionicons
            name="md-checkmark-circle"
            size={hp(26)}
            style={
              contentSelected
                ? {color: 'rgb(255,255,255)'}
                : {color: 'rgba(255,255,255,0.5)'}
            }
          />
          <SmallText
            text={'Access 1000+ hours of VA exclusive content.'}
            extraStyles={
              contentSelected
                ? {alignSelf: 'center'}
                : {alignSelf: 'center', opacity: 0.5}
            }
          />
        </View>
        <View style={{...styles.flexRow}}>
          <Ionicons
            name="md-checkmark-circle"
            size={hp(26)}
            style={
              contentSelected
                ? {color: 'rgb(255,255,255)'}
                : {color: 'rgba(255,255,255,0.5)'}
            }
          />
          <SmallText
            text={'Find your next favorite creator.'}
            extraStyles={
              contentSelected
                ? {alignSelf: 'center'}
                : {alignSelf: 'center', opacity: 0.5}
            }
          />
        </View>
        <CustomButton
          text={'CONFIRM'}
          onPressAction={() => navigation.navigate('AddPaymentInfoPage')}
        />
      </PageContainer>
    </View>
  );
};

export default AccountTypePage;
