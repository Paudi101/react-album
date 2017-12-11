import React, { Component } from 'react'; //Get react & Componet from lib
import { View, Text } from 'react-native';
import axios from 'axios';
//When using class based comp we need to add a render mehtod to return JSX
class AlbumList extends Component {
  state = { albums: [] }; //Initial state (Not for modification)

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>HelloText</Text>
      </View>
    );
  }
}

export default AlbumList;
