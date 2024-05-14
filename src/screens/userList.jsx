 import React, { useEffect, useState } from 'react';
import {View,  SafeAreaView, FlatList, Touchable, RefreshControl} from 'react-native';
import {screenStyle} from '../styles/screenStyle';
import FlatActionButton from '../components/uı/FlatActionButton';
import UserCard from '../components/userCard';
import {USERADD} from '../utils/routes'; 
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({
  name: 'UserDB',

});
const UserList = ({navigation}) => {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    createTable();
  }, []);
  const createTable = () => {
    return new Promise((resolve, reject) => {
      db.transaction(txn => {
        txn.executeSql(
          'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,surname VARCHAR(30),name VARCHAR(30),phone VARCHAR(30),age VARCHAR(30),photo VARCHAR(30))',
          [],
          () => resolve(),
          (_, error) => reject(error),
        );
      });
    });
  };

  const getUsers=()=>{
    db.transaction(
      txn=>{
        txn.executeSql(
          'SELECT * FROM users',
          [],
          (tx,result)=>{
            let length = result.rows.length;
            let results = [];
            if(length>0){
              for(let i=0;i<length;i++){
                results.push(result.rows.item(i));
              }
              setUsers(results)
              console.log('results',results)
            }
          },
          (tx,error)=>{
            console.log('error',error)
          }
        )
      }
    )
  }

 
  return (
    <SafeAreaView style={screenStyle.safeAreaContainer}>
      <View style={screenStyle.container}>
        <FlatList
        refreshControl={
          <RefreshControl onRefresh={getUsers} refreshing={false} />
        }
          data={users}
          renderItem={({item}) => <UserCard item={item} />}
        />
        <FlatActionButton onPress={() => navigation.navigate(USERADD)} />
      </View>
    </SafeAreaView>
  );
};

export default UserList;
