import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Photo from './Photo';

class Gallery extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  }

  _renderItem = ({ item }) => {
    const { width, handlePress, editing } = this.props;
    const { id, selected } = item;
    const uri = `https://picsum.photos/300/200?image=${id}`;

    return (
      <Photo
        source={uri}
        width={width}
        handlePress={handlePress}
        id={id}
        selected={selected}
        editing={editing}
      />
    );
  };

  render() {
    const { data, onEndReached, onScroll, onRefresh, refreshing } = this.props;

    return (
      <FlatList
        style={styles.container}
        data={data}
        keyExtractor={item => item.filename}
        renderItem={this._renderItem}
        numColumns={3}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        onScroll={onScroll}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Gallery;
