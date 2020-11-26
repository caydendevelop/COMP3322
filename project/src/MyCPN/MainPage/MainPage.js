import React from 'react';
import NavBar from './NavBar';
import './MainPage.css';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <h1>I am MainPage</h1>
      </>
    );
  }
}

export default MainPage;