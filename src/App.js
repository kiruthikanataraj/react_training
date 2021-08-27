import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Helloworld from './Pages/Helloworld';
import Counter from './Pages/Counter';
import Passprops from './Pages/Passprops';
import SignUp from './Pages/Signup';
import Restcall from './Pages/Restcall';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'

const store = configureStore({ reducer: rootReducer })

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Helloworld} />
        <Route path="/counter" component={Counter} />
        <Route path="/Passprops" component={Passprops} />
        <Route path="/restcall" component={Restcall} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
