import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import fetchReducer from './reducers';

const history = createBrowserHistory({ basename: `/${process.env.MICRO_SERVICE_APP}` });


export const defaultReducers = {
  router: connectRouter(history),
  fetchReducer: fetchReducer
};

export const rootReducer = combineReducers(defaultReducers);

const store = {
    defaultReducers,
    rootReducer,
  };

export default store;