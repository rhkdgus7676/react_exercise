import React, { Component } from 'react';
export class Navigation extends Component {
  render() {
    let data = this.props.data;
    let lists = [];
    let i = 0;
    while(i < data.length){
      lists.push(<li key={data[i].id}><a href={"/contents/"+data[i].id}>{data[i].link}</a></li>);
      i = i+1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}