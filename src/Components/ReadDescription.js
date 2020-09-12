import React, { Component } from 'react';
export class ReadDescription extends Component {
  render() {
    return (
      <article>
        <div>
          <p>{this.props.desc}</p>
        </div>
      </article>
    );
  }
}