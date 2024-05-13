 import {UserSquare} from 'iconsax-react-native';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../theme/colors';

 const Avatar = ({photo}) => {
  return (
    <View style={styles.container}>
      {photo ? (
        <Image
          style={styles.image}
          source={{
            uri: photo,
          }}
        />
      ) : (
        <UserSquare size="60" color={Colors.GRAY} variant="Bulk" />
      )}
    </View>
  );
};

 const styles = StyleSheet.create({
  container: {},
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
});

 export default Avatar;
