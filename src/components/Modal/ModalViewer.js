import React, { PureComponent } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ModalViewer extends PureComponent {
  static navigationOptions = {
    headerMode: 'none'
  };

  handleCloseModal = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    const { handleCloseModal } = this;
    const { navigation } = this.props;
    const uri = navigation.getParam('imageUri');
    const width = navigation.getParam('width');

    return (
      <View style={styles.container}>
        <Image
          style={{ width: width, height: width }}
          source={{ uri: uri }}
          resizeMode={'contain'}
        />
        <TouchableHighlight style={styles.closeButton} onPress={handleCloseModal}>
          <Icon name="md-close-circle" size={30} color="white" />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
