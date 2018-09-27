import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router basename="/react-auth-ui/">
                <div className="App">

                    {/*<div className="App__Form">*/}
                        <Route path="/sign-in" component={SignIn}>
                        </Route>
                    {/*</div>*/}

                </div>
            </Router>
        );
    }
}

export default App;