import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';
import Counter from './view/Counter';

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    from: 10,
    to: 0,
  }

  render() {
    return (<div>
      <main>
        <Home username="DaftCoder" />
      </main>
      <content>
        <Counter from={this.state.from} to={this.state.to} />
      </content>
    </div>
    );
  }
}

export default hot(module)(App);
