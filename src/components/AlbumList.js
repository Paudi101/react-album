import React, { Component } from 'react'; //Get react & Componet from lib
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//When using class based comp we need to add a render mehtod to return JSX
class AlbumList extends Component {
  state = { albums: [] }; //Initial state (Not for modification)
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    //Map carrys out a function on each entry  in array then outputs into new array.
    //key should be unique identifier, album can be called anything
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);
    return (
      //What ever is in the view is now scrollable
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
