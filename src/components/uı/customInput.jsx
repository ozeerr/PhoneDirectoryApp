 import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Colors from '../../theme/colors';

 const CustomInput = props => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

 const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  input: {
    backgroundColor: Colors.INPUT,
    height: 45,
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
    padding: 5,
    fontSize: 16,
    borderRadius:5
  },
  title:{
    fontSize:14,
    marginVertical:5,
    fontWeight:"medium"
  }
});

 export default CustomInput;
