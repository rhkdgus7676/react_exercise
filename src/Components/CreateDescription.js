import React, { Component } from 'react';
export class CreateDescription extends Component {
  render() {
    return (
      <article>
        <h1>Create</h1>
        <div>
          <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
            //이 순서로 메뉴가 추가가 됨
            alert("submitted!")
          }.bind(this)}
          >
            <p><input type="text" name="title" placeholder="title!"></input></p>
            <p> <textarea name="desc" placeholder="description"></textarea> </p>
            <p> <input type="submit"></input> </p>
          </form>
        </div>
      </article>
    );
  }
}