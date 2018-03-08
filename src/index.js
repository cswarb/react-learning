import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Pass the main app component to the root element
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
