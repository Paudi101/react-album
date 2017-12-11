import React, { Component } from 'react'; //Get react & Componet from lib
import { View, Text } from 'react-native';
import axios from 'axios';
//When using class based comp we need to add a render mehtod to return JSX
class AlbumList extends Component {
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response)); //Do this when we get our response
  }

  render() {
    return (
      <View>
        <Text>HelloText</Text>
      </View>
    );
  }
}

export default AlbumList;
