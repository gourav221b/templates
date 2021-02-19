
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Blog from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Works from './components/Works/Works'

import Missing from './components/Missing/Missing'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <div>
     <Router>
       <Nav/>
       <div className="main">
       <Switch>
         
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/works" component={Works}/>
        <Route path="/services" component={Services}/>
        <Route path="/blogs" component={Blog}/>
        <Route path="/contact" component={Contact}/>
        <Route path="*" component={Missing} />
       </Switch>
        <Footer/>
       </div>
     </Router>
    </div>
  );
}


export default App;

// http://webredox.net/demo/wp/doro/dark/