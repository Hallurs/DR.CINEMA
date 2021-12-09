import React from 'react';
import AppContainer from './src/routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import UpcomingMovies from './src/views/UpcomingMovies';

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <AppContainer />
    </Provider>
  );
}
