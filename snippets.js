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

// Node Server

// For reference, below method serves pages individually
/*
server.get('/about.html', (req, res) => {
    fs.readFile('./public/about.html', (err, data) => {
        res.send(data.toString());
    });
});






//in server.get

// Default method to send res
res.send('Hello Express');


*/

