/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GalleryContainer from './src/containers/GalleryContainer';

const App = () => (
  <View style={styles.container}>
    <GalleryContainer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
