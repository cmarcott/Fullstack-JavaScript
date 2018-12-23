import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';


class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests',
        contests: []
    };
    componentDidMount() {
        //timers, listeners, third party plugins depending on component

        // Ajax call for data
        axios.get('/api/contests')
            .then(resp => {
                    //mount data to contests in state
                this.setState({
                    contests: resp.data.contests
                });
            })
            .catch(console.error)
    }
    componentWillUnmount() {
        //cleanup of any timers or listeners etc
    }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }
};

export default App;