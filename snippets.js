/*
// Change color based on random value
const color = Math.random() > 0.5 ? 'green' : 'red';

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

ReactDOM.render(
    // One method of doing it
    React.createElement('h2', null, 'Hello React'),

    // Using JSX
    <h2 style={{color: color}}>
        Hello Again React with JSX!! -- {Math.random()}
    </h2>,

    // Using components
    <App headerMessage="Hello props!" />,
    document.getElementById('root')
);

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// You have to declare the prop type
Header.propTypes = {
    headerMessage: React.PropTypes.string
};

// You could use .isRequired, or set default props
App.defaultProps = {
    headerMessage: 'Hello!!'
};

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

*/