import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const EditingButton = ({ editing, handleEdit }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleEdit}>
        <Text style={styles.text}>{editing ? '취소' : '편집'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  button: {
    width: 50,
    height: 30,
    marginTop: 15,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16
  }
});

export default EditingButton;
