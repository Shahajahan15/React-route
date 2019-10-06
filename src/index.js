import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import SassTest from './pages/SassTest';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import { Route, Link, BrowserRouter as Router } from  '../node_modules/react-router-dom'
import * as serviceWorker from './serviceWorker';

//  create own my route
// const myrouter = (
//     <Router>
//         <div>
//             <ul>
//                 <Link className="px-2" to="/">Home</Link>
//                 <Link to="/abouts">SassTest</Link>
//                 <Link className="px-2" to="/about">About</Link>
//                 <Link className="px-2" to="/contact">Contact</Link>
//                 <Link className="px-2" to="/portfolio">Portfolio</Link>
//             </ul>

//             <Route exact path="/" component={App} />
//             <Route path="/abouts" component={SassTest} />
//             <Route path="/about" component={About} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/portfolio" component={Portfolio} />

            
//         </div>
//     </Router>
// )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
