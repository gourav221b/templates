
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Blog from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Works from './components/Works/Works'

import Product1 from './components/Products/productpage/Product1'
import Product2 from './components/Products/productpage/Product2'
import Product3 from './components/Products/productpage/Product3'
import Product4 from './components/Products/productpage/Product4'
import Product5 from './components/Products/productpage/Product5'
import Product6 from './components/Products/productpage/Product6'




import Blog0 from './components/Blogs/blogs/Learn-react-with-us';
import Blog1 from './components/Blogs/blogs/Data-visualization';
import Blog2 from './components/Blogs/blogs/Managing-your-business-with-6-easy-steps';
import Blog3 from './components/Blogs/blogs/Write-intriguing-content-to-bring-in-customers';


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
        <Route path="/product1" component={Product1}/>
        <Route path="/product2" component={Product2}/>
        <Route path="/product3" component={Product3}/>
        <Route path="/product4" component={Product4}/>
        <Route path="/product5" component={Product5}/>
        <Route path="/product6" component={Product6}/>

        <Route path="/services" component={Services}/>
        <Route path="/blogs" component={Blog}/>
        <Route path="/learn-react-with-us" component={Blog0}/>
        <Route path="/data-visualization" component={Blog1}/>
        <Route path="/managing-your-business-with-6-easy-steps" component={Blog2}/>
        <Route path="/write-intriguing-content-to-bring-in-customers" component={Blog3}/>






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