import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import NewQuestionPage from '../NewQuestionPage/NewQuestionPage';
import LoginPage from '../LoginPage/LoginPage';
import QuestionDetailPage from '../QuestionDetailPage/QuestionDetailPage';
import RegisterPage from '../RegisterPage/RegisterPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* The corresponding component will show here if the current URL matches the path */}
        
        <Route path="/" exact component={MainPage} />
        <Route path="/LoginPage" exact component={LoginPage} />
        <Route path="/NewQuestionPage" exact component={NewQuestionPage} />
        <Route path="/QuestionDetailPage" exact component={QuestionDetailPage} />
        <Route path="/RegisterPage" exact component={RegisterPage} />
        
        

        
        
      </BrowserRouter>
    );
  }
}

export default App;