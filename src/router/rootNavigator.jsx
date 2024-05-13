import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screens/userList';
import {USERADD, USERLIST} from '../utils/routes';
import UserAdd from '../screens/userAdd';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={USERLIST} component={UserList} />
      <Stack.Screen name={USERADD} component={UserAdd} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
