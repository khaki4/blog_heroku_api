import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostsIndex from './components/posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route
              path="/"
              component={PostsIndex}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
