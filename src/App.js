
import { Component } from 'react';
import './App.css';
import IntroState from './Components/IntroState';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  toggleVisibilty = () => {
    this.setState({isVisible: !this.state.isVisible})
    
  }
  render() {
  return (
    <div className="App">
      <button onClick={this.toggleVisibilty}>
        {this.state.isVisible ? "Hide" : "Show"}
      </button>
      {this.state.isVisible ? <IntroState /> : <></>}
      
    </div>
  );
}
}

export default App;
