import React, { Component } from 'react'; //Get react & Componet from lib
import { View, Text } from 'react-native';
//When using class based comp we need to add a render mehtod to return JSX
class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>HelloText</Text>
      </View>
    );
  }
}

//FUNCTIONAL COMPONENT STRUCTURE
// const AlbumList = () => {
//   return (
//     <View>
//       <Text>HelloText</Text>
//     </View>
//   );
// };

export default AlbumList;
