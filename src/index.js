import React from 'react';
import ReactDOM from 'react-dom';

// Change color based on random value
//const color = Math.random() > 0.5 ? 'green' : 'red';
const App = (props) => {
    return (
        <h2 className="text-center">
            {props.headerMessage}
        </h2>
    );
};

// You have to declare the prop type
App.propTypes = {
    headerMessage: React.PropTypes.string
};

// You could use .isRequired, or set default props
App.defaultProps = {
    headerMessage: 'Hello!!'
};

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