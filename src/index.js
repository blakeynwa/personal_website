import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Header from './Header';
import Image from './Image'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Image />, document.getElementById('myHeadshot'));
ReactDOM.render(<Header />, document.getElementById('myHeader'))
registerServiceWorker();
