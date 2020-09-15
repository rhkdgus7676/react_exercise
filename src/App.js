import React, { Component } from "react";
import "./App.css";
import { Subject } from "./Components/Subject";
import { ReadDescription } from "./Components/ReadDescription";
import { CreateDescription } from "./Components/CreateDescription";
import { Navigation } from "./Components/Navigation";
import { Control } from "./Components/Control";
import { UpdateContent } from "./Components/UpdateContent";


class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
      selected_content_id: 2,
      subject: { name: "devkim" },
      welcome: {title: "hello there!" , desc: "welcome to my react page!"},
      read: {title:"this is read section" , desc: "welcom this is read description"},
      contents: [
        { id: 1, title:"i am kwanghyun" ,  desc: "19900706" },
        { id: 2, title:"this is mirei" , desc: "19921129"  },
        { id: 3, title:"this is ross" , desc: "20190314"  },
      ]
    };
  }

  getReadContent(){
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        // break;
      }
      i = i + 1;
    }
  }

  getContent(){
    let _desc, _article, _title = null;
    if (this.state.mode === "welcome") {
      _desc = this.state.welcome.desc;
      _title = this.state.welcome.title;
      _article = <ReadDescription desc={_desc} title={_title}></ReadDescription>
    } 
    else if (this.state.mode === "read") {
     let _content = this.getReadContent();
      _article = <ReadDescription desc={_content.desc} title={_content.title}></ReadDescription>
    }
    else if(this.state.mode === "create"){
      _article= <CreateDescription 
      onSubmit = {function(_title , _desc){
        //add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push({id: this.max_content_id , desc:_desc});
        // this.setState({
        //   contents:this.state.contents
        // });
        let _contents =  this.state.contents.concat(
          {id: this.max_content_id , desc:_desc , title:_title}
        )
        this.setState({
         contents:_contents
        });
      }.bind(this)}></CreateDescription>
    }
    else if(this.state.mode === "update"){
      let _content = this.getReadContent();
      _article= <UpdateContent 
      data = {_content}
      onSubmit = {function(_title , _desc){        
        this.max_content_id = this.max_content_id + 1;       
        let _contents =  this.state.contents.concat(
          {id: this.max_content_id , title:_title , desc:_desc}
        );
        this.setState({
         contents:_contents
        });
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          name={this.state.subject.name}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>

        <Navigation
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></Navigation>

        <Control
         onChangeMode={function(mode_){
           this.setState({
             mode:mode_
           });
         }.bind(this)}
        ></Control>

         {this.getContent()}
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;  원래 있던거 함수타입, 강의용은 클래스타입