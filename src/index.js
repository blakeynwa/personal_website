import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/Header';
import Image from './containers/Image'
import registerServiceWorker from './registerServiceWorker';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Image />
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
