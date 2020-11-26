import React, { Component } from 'react';
import ButtonComponent from './components/ButtonComponent';
import DropdownComponent from './components/DropdownComponent'
import FooComponent from './components/FooComponent';
import SwitchErrorAlert from './components/SwitchErrorAlert';

class App extends Component {
  render() {
    return (
      <div>
        <DropdownComponent></DropdownComponent>
        <ButtonComponent></ButtonComponent>
        <FooComponent></FooComponent>
        <SwitchErrorAlert></SwitchErrorAlert>
      </div>
    );
  }
}

export default App;