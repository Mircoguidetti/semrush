import React from 'react';
import ReactDOM from 'react-dom';
import IndexRouter from './routers/indexRouter';
import './styles/main.scss';

const jsx = (
    <div>
        <IndexRouter />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));