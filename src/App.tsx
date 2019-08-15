import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import MainContent from './Components/MainContent'


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
