 import React, { useState } from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {screenStyle} from '../styles/screenStyle';
import CustomInput from '../components/uı/customInput';
import CustomButton from '../components/uı/cusstomButton';
import SQLite from 'react-native-sqlite-storage';
import { useNavigation } from '@react-navigation/native';
const db = SQLite.openDatabase({
  name: 'UserDB',
  createFromLocation: '~user.db',
});
 const UserAdd = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png');

  const insertUser=(params)=>{
    db.transaction(txn=>{
     txn.executeSql(
       'INSERT INTO users (name,surname,phone,age,photo) VALUES (?,?,?,?,?)',
       [params.name,params.surname,params.phone,params.age,params.photo],
       (tx,result)=>{
        console.log('result',result)
        Alert.alert('Success','User added successfully')
        navigation.goBack();
      },
       (tx,error)=>console.log('error',error)
     )
   })
 }
  
const saveUser = () => {
  let params = {
    name: name,
    surname: surname,
    phone: phone,
    age: age,
    photo:photo
  };
  insertUser(params);
};
  return (
    <View style={screenStyle.container}>
      <ScrollView>
        <CustomInput placeholder="Name" title="Name" value={name} onChangeText={(value)=>setName(value)} />
        <CustomInput placeholder="Surname" title="Surname" value={surname} onChangeText={(value)=>setSurname(value)} />
        <CustomInput placeholder="Phone" title="Phone" value={phone} onChangeText={(value)=>setPhone(value)}  />
        <CustomInput placeholder="Age" title="Age" value={age} onChangeText={(value)=>setAge(value)}  />
        <CustomButton title={"SAVE"} onPress={()=>saveUser()}/>
      </ScrollView>
    </View>
  );
};
export default UserAdd;
