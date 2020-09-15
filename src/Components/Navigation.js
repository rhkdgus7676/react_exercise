import React, { Component } from 'react';
export class Navigation extends Component {
  shouldComponentUpdate(newProps, newState){
    if(newProps.data === this.props.data){
      return false;
    }
    return true;
  }
  render() {
    let data = this.props.data;
    let lists = [];
    let i = 0;
    while(i < data.length){
      lists.push(
      <li key={data[i].id}>
        <a
          href={"/content/"+data[i].id}
          data-id = {data[i].id}
          onClick= {function(e){
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
        }.bind(this)}      
        >{data[i].title}</a>
      </li>
      );
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
