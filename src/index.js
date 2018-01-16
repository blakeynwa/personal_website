import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/Header'
import Navigator from './containers/Navigator'
import Bio from './containers/Bio'
import Portfolio from './containers/Portfolio'
import registerServiceWorker from './registerServiceWorker';
import './index.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <Header />
        <Bio />
        <Portfolio />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
