import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

class CountApp extends Component {
  render() {
    return (
      <div>
        <Button />
        <Display />
      </div>
    );
  }
}

export default CountApp