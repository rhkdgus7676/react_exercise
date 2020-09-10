import React, {Component} from 'react';
import './App.css';
import { Subject } from './Components/Subject';
import {Description} from './Components/Description';
import { Navigation } from './Components/Navigation';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      subject:{name:"devkim"},
      welcome:{desc:"welcome to my react page!"},
      // contents[0]:{desc:"react is hard to understand but fun to do"}
      contents:[
        {id:1 , link:"aa"},
        {id:2 , link:"bb"},
        {id:3 , link:"cc"}
      ]
    }
  }
  render() {
    let desc_ = null;
    if(this.state.mode === "welcome"){
      desc_ = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      desc_ = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject name={this.state.subject.name}></Subject> */}
      
        <header>
          <h1> <a href="/" onClick={function(e){
            alert("hi");
            e.preventDefault();
            // this.state.mode = 'welcome';
            this.setState({
              mode:"welcome"
            });
          }.bind(this)}>{this.state.subject.name}</a></h1>
        </header>

        <Navigation data={this.state.contents}></Navigation>

        <Description desc={desc_}></Description>
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
