import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Error from './components/Error';

function App() {
  return (
    <>
      <div className="main">
      <Router>
        <Header></Header>
            <div className="container">
            <Switch>
             
              <Route exact path="/" component={Main} />
              <Route path="/about" component={About} />
              <Route path="/create" component={Create} />
              <Route exact path="/note/" component={Note} />
              <Route path="/note/:noteURL" component={Note} />
              <Route component={Error} />
            </Switch>
          
        </div>
        </Router>
      </div>
      <Footer/>
    </>
  );
}

export default App;
