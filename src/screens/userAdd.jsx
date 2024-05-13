 import React from 'react';
import {View, ScrollView} from 'react-native';
import {screenStyle} from '../styles/screenStyle';
import CustomInput from '../components/uı/customInput';
import CustomButton from '../components/uı/cusstomButton';

 const UserAdd = () => {
  return (
    <View style={screenStyle.container}>
      <ScrollView>
        <CustomInput placeholder="Name" title="Name" />
        <CustomInput placeholder="Surname" title="Surname" />
        <CustomInput placeholder="Phone" title="Phone" />
        <CustomInput placeholder="Age" title="Age" />
        <CustomButton title={"SAVE"}/>
      </ScrollView>
    </View>
  );
};
export default UserAdd;
