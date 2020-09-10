import React, { Component } from 'react';
export class Subject extends Component {
  render() {
    return (
      <header>
        <h1> <a href="#top">{this.props.name}</a></h1>
      </header>
    );
  }
}
