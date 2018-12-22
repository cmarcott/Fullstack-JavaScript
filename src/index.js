import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

// Change color based on random value
//const color = Math.random() > 0.5 ? 'green' : 'red';

const App = () => {
    return (
        <div className="App">
            <Header message="Naming Contests" />
            <div>
                ...
            </div>
        </div>
    );
};

// You could use .isRequired, or set default props
//App.defaultProps = {
//    headerMessage: 'Hello!!'
//};

ReactDOM.render(
    // One method of doing it
    //React.createElement('h2', null, 'Hello React'),

    // Using JSX
    //<h2 style={{color: color}}>
    //    Hello Again React with JSX!! -- {Math.random()}
    //</h2>,

    <App headerMessage="Hello props!" />,
    document.getElementById('root')
);