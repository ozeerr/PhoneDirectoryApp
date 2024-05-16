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
 const UserUpdate = ({route}) => {
    const {item}=route.params;
  const navigation = useNavigation();
  const [name, setName] = useState(item.name);
  const [surname, setSurname] = useState(item.surname);
  const [phone, setPhone] = useState(item.phone);
  const [age, setAge] = useState(item.age);

  const updateUser=()=>{
    db.transaction(txn=>{
     txn.executeSql(
       'UPDATE users SET surname=?,name=?,phone=?,age=?,photo=? WHERE id=?',
       [surname,name,phone,age,'',item.id],
       (tx,result)=>{
        console.log('result',result)
        Alert.alert('Success','User added successfully')
        navigation.goBack();
      },
       (tx,error)=>console.log('error',error)
     )
   })
 }
  

  return (
    <View style={screenStyle.container}>
      <ScrollView>
        <CustomInput placeholder="Name" title="Name" value={name} onChangeText={(value)=>setName(value)} />
        <CustomInput placeholder="Surname" title="Surname" value={surname} onChangeText={(value)=>setSurname(value)} />
        <CustomInput placeholder="Phone" title="Phone" value={phone} onChangeText={(value)=>setPhone(value)}  />
        <CustomInput placeholder="Age" title="Age" value={age} onChangeText={(value)=>setAge(value)}  />
        <CustomButton title={"UPDATE"} onPress={()=>updateUser()}/>
      </ScrollView>
    </View>
  );
};
export default UserUpdate;
