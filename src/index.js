import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';
import { LanguageProvider } from './Context/LangContext';
import App from './App';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
);

