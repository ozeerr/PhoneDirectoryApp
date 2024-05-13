 import React from 'react';
import {View,  SafeAreaView, FlatList} from 'react-native';
import {screenStyle} from '../styles/screenStyle';
import FlatActionButton from '../components/uı/FlatActionButton';
 import {USERS} from '../utils/mockData';
import UserCard from '../components/userCard';
import {USERADD} from '../utils/routes';

// create a component
const UserList = ({navigation}) => {
  return (
    <SafeAreaView style={screenStyle.safeAreaContainer}>
      <View style={screenStyle.container}>
        <FlatList
          data={USERS}
          renderItem={({item}) => <UserCard item={item} />}
        />
        <FlatActionButton onPress={() => navigation.navigate(USERADD)} />
      </View>
    </SafeAreaView>
  );
};

export default UserList;
