import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Photo extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.source !== nextProps.source ||
      this.props.selected !== nextProps.selected ||
      this.props.editing !== nextProps.editing
    );
  }

  render() {
    const { source, width, handlePress, id, selected, editing } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => handlePress(source, id)}>
        <ImageBackground
          style={{ width: width, height: width }}
          source={{ uri: source }}
          resizeMode={'cover'}
        >
          {editing &&
            !selected && (
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end'
                }}
              >
                <Icon
                  style={{ marginTop: 5, marginRight: 5 }}
                  name="md-radio-button-off"
                  size={30}
                  color="white"
                />
              </View>
            )}
          {selected && (
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                borderWidth: 5,
                borderColor: 'orange'
              }}
            >
              <Icon name="md-checkmark-circle" size={30} color="orange" />
            </View>
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 1
  },
  image: {
    borderWidth: 1,
    borderColor: 'orange'
  }
});

export default Photo;
