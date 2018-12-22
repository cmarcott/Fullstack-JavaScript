import React from 'react';
import Header from './Header';


class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests'
    };
    componentDidMount() {
        //timers, listeners, third party plugins depending on component
    }
    componentWillUnmount() {
        //cleanup of any timers or listeners etc
    }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    ...
                </div>
            </div>
        );
    }
};

export default App;