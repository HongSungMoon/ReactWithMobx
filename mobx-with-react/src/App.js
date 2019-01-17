import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import SuperMarket from './components/SuperMarket';
import DevTools from 'mobx-react-devtools';

import RootStore from './stores';

const root = new RootStore(); // *** 루트 스토어 생성

class App extends Component {
  render() {
    return (
      <Provider {...root}>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div>
              <Counter />
              <hr />
              <SuperMarket />
              {process.env.NODE_ENV === 'development' && <DevTools />}
            </div>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
