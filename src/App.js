import React, { Component } from "react";
import "./App.css";
import { Subject } from "./Components/Subject";
import { ReadDescription } from "./Components/ReadDescription";
import { CreateDescription } from "./Components/CreateDescription";
import { Navigation } from "./Components/Navigation";
import { Control } from "./Components/Control";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 2,
      subject: { name: "devkim" },
      welcome: { desc: "welcome to my react page!" },
      read: { desc: "welcom this is read description" },
      contents: [
        { id: 1, link: "kwanghyun", desc: "19900706" },
        { id: 2, link: "mirei", desc: "19921129" },
        { id: 3, link: "ross", desc: "20190314" },
      ],
    };
  }
  render() {
    let desc_ = null;
    if (this.state.mode === "welcome") {
      desc_ = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          desc_ = data.desc;
          break;
        }
        i = i + 1;
      }
    }
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

        <ReadDescription desc={desc_}></ReadDescription>
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
