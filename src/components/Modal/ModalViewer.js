import React from 'react';
import { Modal, View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ModalViewer = ({ width, uri, visible, handleCloseModal }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => console.log('close')}
      >
        <View style={styles.modal}>
          <Image
            style={{ width: width, height: width }}
            source={{ uri: uri }}
            resizeMode={'contain'}
          />
          <TouchableHighlight style={styles.closeButton} onPress={handleCloseModal}>
            <Icon name="md-close-circle" size={30} color="white" />
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  closeButton: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 30,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ModalViewer;
