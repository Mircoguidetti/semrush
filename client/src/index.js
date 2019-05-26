import React from 'react';
import ReactDOM from 'react-dom';
import IndexRouter from './routers/indexRouter';

const jsx = (
    <div>
        <IndexRouter />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));