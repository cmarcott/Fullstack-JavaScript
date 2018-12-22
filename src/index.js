import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
    // Using components
    <App headerMessage="Hello props!" />,
    document.getElementById('root')
);