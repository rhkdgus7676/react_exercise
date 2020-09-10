import React, { Component } from 'react';
export class Description extends Component {
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