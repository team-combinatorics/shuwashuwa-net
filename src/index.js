//
// index.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/12
//

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../../App';
import reportWebVitals from '../../reportWebVitals';
import {Helmet} from "react-helmet";

ReactDOM.render(
    <React.StrictMode>
        <Helmet>
            <title> shuwashuwa </title>
        </Helmet>
        <App mode='user' />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
