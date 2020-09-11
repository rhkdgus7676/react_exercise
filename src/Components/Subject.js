import React, { Component } from 'react';
export class Subject extends Component {
  render() {
    return (
      <header>
        <h1> <a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.name}</a></h1>
      </header>
    );
  }
}
