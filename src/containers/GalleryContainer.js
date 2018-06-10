import React, { Component } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import axios from 'axios';

import { EditingButton, Gallery, ModalViewer, DeleteButton } from '../components';

class GalleryContainer extends Component {
  state = {
    fetchData: [],
    photos: [],
    modalVisible: false,
    imageUri: '',
    editing: false,
    cursor: 30,
    allLoad: false,
    isScroll: false,
    isFetching: false
  };

  async componentDidMount() {
    try {
      const { _addSelectKey } = this;
      const { cursor } = this.state;
      const { data } = await axios.get('https://picsum.photos/list/');
      const addedSelected = _addSelectKey(data);

      this.setState({
        fetchData: addedSelected,
        photos: addedSelected.slice(0, cursor)
      });
    } catch (error) {
      console.warn(error);
    }
  }

  width = Dimensions.get('window').width;

  _addSelectKey = arr => {
    return arr.map(item => {
      item.selected = false;
      return item;
    });
  };

  handlePress = (uri, id) => {
    const { editing, photos } = this.state;

    if (!editing) {
      this.setState({
        modalVisible: true,
        imageUri: uri
      });
    } else {
      const index = photos.findIndex(item => item.id === id);

      this.setState({
        photos: [
          ...photos.slice(0, index),
          {
            ...photos[index],
            selected: !photos[index].selected
          },
          ...photos.slice(index + 1)
        ]
      });
    }
  };

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
      imageUri: ''
    });
  };

  handleEdit = () => {
    this.setState({
      editing: !this.state.editing,
      photos: this._addSelectKey(this.state.photos)
    });
  };

  handleScroll = () => {
    if (!this.state.isScroll) {
      this.setState({
        isScroll: true
      });
    }
  };

  onRefresh = async () => {
    const { fetchData } = this.state;
    const reversedData = fetchData.slice(0).reverse();

    this.setState({
      isFetching: true
    });

    setTimeout(() => {
      this.setState({
        fetchData: reversedData,
        photos: reversedData.slice(0, 30),
        cursor: 30,
        allLoad: false,
        isFetching: false
      });
    }, 500);
  };

  handleEndReached = () => {
    const { cursor, fetchData, allLoad, isScroll } = this.state;
    const limitLength = fetchData.length;
    let nextCursor = cursor;

    if (!allLoad && isScroll) {
      if (limitLength > cursor + 30) {
        nextCursor += 30;
      } else if (limitLength <= cursor + 30) {
        nextCursor = limitLength;
        this.setState({
          allLoad: true
        });
      }

      this.setState({
        photos: [...this.state.photos, ...this.state.fetchData.slice(cursor, nextCursor)],
        cursor: nextCursor,
        isScroll: false
      });
    }
  };

  handleDelete = () => {
    const { photos } = this.state;
    const filteredPhoto = photos.filter(item => !item.selected);

    this.setState({
      photos: filteredPhoto
    });
  };

  render() {
    const { photos, modalVisible, imageUri, editing, isFetching } = this.state;
    const {
      width,
      handlePress,
      handleCloseModal,
      handleEdit,
      handleEndReached,
      handleScroll,
      handleDelete,
      onRefresh
    } = this;

    return (
      <View style={styles.container}>
        <EditingButton editing={editing} handleEdit={handleEdit} />
        <Gallery
          style={styles.gallery}
          data={photos}
          width={width / 3 - 2}
          handlePress={handlePress}
          onEndReached={handleEndReached}
          onScroll={handleScroll}
          onRefresh={onRefresh}
          refreshing={isFetching}
          editing={editing}
        />
        <ModalViewer
          style={styles.modal}
          visible={modalVisible}
          uri={imageUri}
          handleCloseModal={handleCloseModal}
          width={width}
        />
        {editing && <DeleteButton handleDelete={handleDelete} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gallery: {
    flex: 1
  },
  modal: {
    flex: 1
  }
});

export default GalleryContainer;
