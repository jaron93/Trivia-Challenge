import React from 'react';
import ReactDOM from 'react-dom';

import Trivia from './Trivia';
import { store } from './store/store';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(
      <Provider store={store}>
         <Router>
            <Trivia />
         </Router>
      </Provider>,
      div
   );

});
