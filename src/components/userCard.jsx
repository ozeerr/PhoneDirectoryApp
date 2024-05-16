import React from 'react';
import {View, Text, StyleSheet, Pressable, Linking, TouchableOpacity } from 'react-native';
import Colors from '../theme/colors';
import Avatar from './uı/avatar';
import {Call, Edit2, Trash} from 'iconsax-react-native';
import {compareUserName} from '../utils/functions';
import { useNavigation } from '@react-navigation/native';
import { USERUPDATE } from '../utils/routes';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'UserDB',
  createFromLocation: '~user.db'});

const UserCard = ({item}) => {
      const navigation=useNavigation();
  // const callPhone=()=>{
  //   const url=`tel:${item.phone}`;
  //   Linking.canOpenURL(url).then(supported=>{
  //     if(supported){
  //       return  Linking.openURL(url);
  //     }else{
  //       console.log('Phone call not supported')}
  //   })
  // }

  const deleteUser=(id)=>{
    db.transaction(txn=>{
     txn.executeSql(
       'DELETE FROM users WHERE id=?',
       [id],
       (tx,result)=>{
        console.log("object")
      },
       (tx,error)=>console.log('error',error)
     )
   })
 }
  return (
    <Pressable style={styles.container}>
      <View style={styles.imageContainer}>
        <Avatar photo={item.photo} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {compareUserName(item.name, item.surname)}
        </Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>

      <View style={styles.callContainer}>
        <TouchableOpacity onPress={()=>{}}>
          <Call size={30} color={Colors.GREEN} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate(USERUPDATE,item={item})}}>
          <Edit2 size={30} color={Colors.BLUE} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>deleteUser(item.id)}>
          <Trash size={30} color={Colors.RED} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    marginVertical: 10,
    borderBottomWidth: 0.3,
    borderColor: Colors.GRAY,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  infoContainer: {
    padding: 10,
    flex: 3,
  },
  imageContainer: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  phone: {
    color: Colors.GRAY,
    fontSize: 18,
  },
  callContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection:"row",
    gap:6,
    marginRight:10
  },
});

 export default UserCard;
