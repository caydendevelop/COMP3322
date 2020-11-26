import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from "./NavBar";

import LoginPage from "../LoginPage/LoginPage";
import MainPage from "../MainPage/MainPage";
import NewQuestionPage from "../NewQuestionPage/NewQuestionPage";
import QuestionDetailPage from "../QuestionDetailPage/QuestionDetailPage";
import RegisterPage from "../RegisterPage/RegisterPage";


class App extends React.Component {

    // 如果App係functional , 呢到可以用hook黎取代class的componentdidmount
    // https://zh-hant.reactjs.org/docs/hooks-effect.html
    //     useEffect(() => {
    //     props.fetchUser()
    //     console.log('fetch it!');
    // }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour
    // componentWillMount() {
    //     this.props.fetchUser();
    // }

  render() {
    return (
      <React.StrictNode>
        <BrowserRouter>            
            <NavBar />
            <Route path="/LoginPage" exact component={LoginPage}/>
            <Route path="/" exact component={MainPage}/>
            <Route path="NewQuestionPage" exact component={NewQuestionPage}/>
            <Route path="QuestionDetailPage" exact component={QuestionDetailPage}/>
            <Route path="/RegisterPage" exact component={RegisterPage}/>
        </BrowserRouter>
      </React.StrictNode>
    );
  }
}

export default App;


