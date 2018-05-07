import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppView} from './views/AppView/AppView';
import './app.css';

const target = document.getElementById('app');

// Render initial ReactJS code
ReactDOM.render(<AppView />, target);
