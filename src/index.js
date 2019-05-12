import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
    // Using components
    <App initialData={window.initialData}/>,
    document.getElementById('root')
);