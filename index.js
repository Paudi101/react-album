// Import a library to help create a component
import React from 'react';
//Deconstruction import - only what access to the Text & AppRegistry comp not the entire lib
import { Text, AppRegistry } from 'react-native';
// Create component (Javascript function that returns JSX to be rendered)
const App = () => (
  //Not html this is JSX - Still javascript syntactic sugar makes our
  //life easier to read. (bablejs.io)
    <Text>Hello World</Text>
  );
// Render it to the device1
AppRegistry.registerComponent('albums', () => App);
