// Import my libraies
import React from 'react';
import { Text, View } from 'react-native';
//Make my component
const Header = () => {
  //Ignore this error - generally when function is multiple line use the other way
    const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Albums</Text>
      </View>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 25
  }
};

//Make component abailable from other parts of my app
//We export to allow other files to be able to use it
export default Header;
