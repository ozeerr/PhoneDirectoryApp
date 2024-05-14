 import React, { useState } from 'react';
import {View, ScrollView} from 'react-native';
import {screenStyle} from '../styles/screenStyle';
import CustomInput from '../components/uı/customInput';
import CustomButton from '../components/uı/cusstomButton';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
  name: 'UserDB',
  createFromLocation: '~user.db',
});
 const UserAdd = () => {
  const [name, setName] = useState('Ahmet');
  const [surname, setSurname] = useState('Ozer');
  const [phone, setPhone] = useState('5555555555');
  const [age, setAge] = useState('25');

  const insertUser=(params)=>{
    db.transaction(txn=>{
     txn.executeSql(
       'INSERT INTO users (name,surname,phone,age,photo) VALUES (?,?,?,?,?)',
       [params.name,params.surname,params.phone,params.age,''],
       (tx,result)=>console.log('result',result),
       (tx,error)=>console.log('error',error)
     )
   })
 }
  
const saveUser = () => {
  let params = {
    name: name,
    surname: surname,
    phone: phone,
    age: age
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
