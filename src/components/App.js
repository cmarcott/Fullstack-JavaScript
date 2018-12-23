import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';


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
                {this.props.contests.map(contest =>
                    <div>
                        <ContestPreview {...contest} />
                    </div>
                )}
            </div>
        );
    }
};

export default App;