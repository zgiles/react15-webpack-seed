import React, {Component} from 'react';

export default class App extends Component {

  // change something in here to see hotloading work. Either example should work

  // This is the canonical example..
  /*
  render() {
    return (
      <h1>Hello, world.</h1>
    );
  }
  */

  // the following is silly, but demo's ES6...
  render() {
    return (() => {
      return (
        <h1>Hi World</h1>
      );
    })()
  }
}
