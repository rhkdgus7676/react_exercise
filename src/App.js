import React, {Component} from 'react';
import './App.css';
import { Subject } from './Components/Subject';
import Description from './Components/Description';
import { Navigation } from './Components/Navigation';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{name:"devkim", desc:"this is devkim learning react and this is very very fun to do"},
      contents:[
        {id:1 , link:"aa"},
        {id:2 , link:"bb"},
        {id:3 , link:"cc"}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject
        name={this.state.subject.name}>   
        </Subject>

        <Navigation 
        data={this.state.contents}
        ></Navigation>

        <Description
        desc={this.state.subject.desc}>  
        </Description>
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
