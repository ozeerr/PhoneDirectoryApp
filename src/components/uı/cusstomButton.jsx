 import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../theme/colors';

 const CustomButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...props} style={styles.button}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

 const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  button:{
    backgroundColor:Colors.GREEN,
    height:45,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    color:Colors.WHITE,
    fontSize:18,
    fontWeight:"500"
  }
});

 export default CustomButton;
