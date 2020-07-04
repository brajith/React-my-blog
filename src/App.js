import React from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ArticalList from './pages/ArticalList';
import AboutPage from './pages/AbouPage';
import ArticalPage from './pages/ArticalPage';

class App extends React.Component
 {
   render(){
    return (
      <Router>
        <div className="App">
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage} />
          <Route path="/artical-list" component={ArticalList} />
          <Route path="/artical/:name" component={ArticalPage} />
       </div>
      </Router>
        
    );
   }
  
}

export default App;

/* npm install --save react-router-dom */