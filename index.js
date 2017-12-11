// Import a library to help create a component
import React from 'react';
//Deconstruction import - only what access to the Text & AppRegistry comp not the entire lib
import { AppRegistry } from 'react-native';
//Nesting our Header component
import Header from './src/components/header';
// Create component (Javascript function that returns JSX to be rendered)
const App = () => (
  //Not html this is JSX - Still javascript syntactic sugar makes our
  //life easier to read. (bablejs.io)
  //Self closing
  <Header headerText={'Albums'} />
  );
// Render it to the device1
AppRegistry.registerComponent('albums', () => App);
