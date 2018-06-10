import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DeleteButton = ({ handleDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Icon name="md-trash" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#D4D4D4'
  },
  button: {
    width: 30,
    height: 30,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 16
  }
});

export default DeleteButton;
