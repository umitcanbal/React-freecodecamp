import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import './index.scss';

import App from './Components/App.jsx';

// ReactDOM.render(
//     myParagraph,
//     document.getElementById('app')
// );
var myDiv = document.getElementById("app");
var myParagraph = document.createElement("p");
myParagraph.innerHTML = "helloo";
myDiv.appendChild(myParagraph);