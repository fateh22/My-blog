import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './Posts/Posts';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
