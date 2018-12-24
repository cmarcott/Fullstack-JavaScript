import React from 'react';
import Header from './Header';
import ContestList from './ContestList';


class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
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
                <ContestList contests={this.state.contests} />
            </div>
        );
    }
};

export default App;