// Import my libraies
import React from 'react';
import { Text } from 'react-native';
//Make my component
const Header = () => (
  //Ignore this error - generally when function is multiple line use the other way
   <Text>Albums</Text>
);

//Make component abailable from other parts of my app
//We export to allow other files to be able to use it
export default Header;
