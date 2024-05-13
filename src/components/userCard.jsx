import React from 'react';
import {View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../theme/colors';
import Avatar from './uı/avatar';
import {Call} from 'iconsax-react-native';
import {compareUserName} from '../utils/functions';

 
const UserCard = ({item}) => {
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
        <Pressable>
          <Call size={30} color={Colors.GREEN} />
        </Pressable>
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
  },
});

 export default UserCard;
