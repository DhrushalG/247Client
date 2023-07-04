import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import Resources from './components/Resources';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import './static/App.css';
import Logo from './images/AssureCareLogo.jpg';

function App() {
  return (
    <div className=''>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
      </head>
      <BrowserRouter>
        <body>
          <header>
            <nav class="navbar-dark navbar-expand" style={{ backgroundColor: '#1B8C79' }}>
              <div class="navbar-nav align-items-center" >

                <div className='d-flex align-items-center' style={{ width: '25%' }}>
                  <Link className='nav-link' to='/'>
                    <img src={Logo} className='' alt="" style={{ borderRadius: '5px' }} />
                  </Link>
                  <Link class="nav-link" to='/'>
                    24/7 Assure Care
                  </Link>
                </div>

                <div class="d-flex flex-wrap justify-content-center" style={{ width: '50%' }}>
                  <Link class="nav-link mx-2" to='/AboutUs'>About Us</Link>
                  <Link class='nav-link mx-1' to='/Services'>Services</Link>
                  <Link class="nav-link mx-1" to='/Contact'>Contact</Link>
                  <Link class="nav-link ml-2" to='/Resources'>Resources</Link>
                </div>

                <div className='' style={{ width: '25%' }}></div>



              </div>
            </nav>
          </header>

          <main>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route exact path='/Services'>
                <Services></Services>
              </Route>
              <Route exact path='/Resources'>
                <Resources></Resources>
              </Route>
              <Route exact path='/AboutUs'>
                <AboutUs></AboutUs>
              </Route>
              <Route exact path='/Contact'>
                <Contact></Contact>
              </Route>
            </Switch>
          </main>

          <footer class="container py-5" style={{ minWidth: '100%' }}>
            <div class="row">
              <div class="col-3 col-md">
                {/* <img src={IDPHl} class="my-3" alt="" style={{ background: '', marginRight: '100px' }} /> */}
                <small class="d-block mb-3 text-muted">&copy; 2023 by 24/7 Assure Care LLC - All rights reserved.</small>
              </div>
              <div class="col-3 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                  <li><Link class="text-muted" to="/Resources">Resources</Link></li>
                  <li><Link class="text-muted" to="/Resources">FAQ</Link></li>
                </ul>
              </div>
              {/* <div class="col-3 col-md">
                <h5>Contact</h5>
                <ul class="list-unstyled text-small">
                  <li><Link class="text-muted" to="/Contact">Phone</Link></li>
                  <li><Link class="text-muted" to="/Contact">Fax</Link></li>
                  <li><Link class="text-muted" to="/Contact">Email</Link></li>
                </ul>
              </div> */}
              <div class="col-3 col-md">
                <h5>About us</h5>
                <ul class="list-unstyled text-small">
                  <li><Link class="text-muted" to="/AboutUs">About Us</Link></li>
                </ul>
              </div>
            </div>
          </footer>
        </body>

      </BrowserRouter>
    </div >
  );
}

export default App;
