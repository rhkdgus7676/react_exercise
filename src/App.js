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
      welcome: { title: "hello there!", desc: "welcome to my react page!" },
      read: {
        title: "this is read section",
        desc: "welcom this is read description",
      },
      contents: [
        { id: 1, title: "i am kwanghyun", desc: "19900706" },
        { id: 2, title: "this is mirei", desc: "19921129" },
        { id: 3, title: "this is ross", desc: "20190314" },
      ],
    };
  }

  getReadContent() {
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

  getContent() {
    let _desc,
      _article,
      _title = null;

    //welcome section
    if (this.state.mode === "welcome") {
      _desc = this.state.welcome.desc;
      _title = this.state.welcome.title;
      _article = (
        <ReadDescription desc={_desc} title={_title}></ReadDescription>
      );
    }
    //read section
    else if (this.state.mode === "read") {
      let _content = this.getReadContent();
      _article = (
        <ReadDescription
          desc={_content.desc}
          title={_content.title}
        ></ReadDescription>
      );
    }
    //create section
    else if (this.state.mode === "create") {
      _article = (
        <CreateDescription
          onSubmit={function (_title, _desc) {
            //add content to this.state.contents
            this.max_content_id = this.max_content_id + 1;
            // this.state.contents.push({id: this.max_content_id , desc:_desc});
            // this.setState({
            //   contents:this.state.contents
            // });
            let _contents = this.state.contents.concat({
              id: this.max_content_id,
              desc: _desc,
              title: _title,
            });
            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></CreateDescription>
      );
    }

    //update section
    else if (this.state.mode === "update") {
      let _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            //immutable technique, needs when improving performance
            // when changing array or object, use concat,array.from..etc(immutable methods)
            let _contents = Array.from(this.state.contents);
            let i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }
            this.setState({
              contents: _contents,
              mode: "read",
            });
          }.bind(this)}
        ></UpdateContent>
      );
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
          onChangeMode={function (_mode) {
            //delete section
            if (_mode === "delete") {
              if (window.confirm("are you sure?")) {
                let _contents = Array.from(this.state.contents);
                let i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: "welcome",
                  selected_content_id: 1,
                  contents: _contents,
                  
                });
                alert("deleted!");
              }
            } else {
              this.setState({
                mode: _mode
              });
            }
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
