import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/Header';
import Image from './containers/Image'
import Navigator from './containers/Navigator'
import Bio from './containers/Bio'
import Footer from './containers/Footer'
import Portfolio from './containers/Portfolio'
import registerServiceWorker from './registerServiceWorker';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <Image />
        <Header />
        <Bio />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
