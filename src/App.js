import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import Resources from './components/Resources';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import './static/App.css';
import Logo from './images/logo.jpg';

function App() {
  return (
    <div className=''>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
      </head>
      <BrowserRouter>
        <body>
          <header>
            <nav class="navbar-fixed navbar-dark navbar-expand" style={{ backgroundColor: '#1B8C79' }}>
              <div class="navbar-nav align-items-center d-flex" >

                <div className=' d-flex align-items-center' style={{ minWidth: '25%' }}>
                  <Link className='nav-link' to='/'>
                    <div>

                    </div>
                    <img src={Logo} className='p-1' alt="" style={{ backgroundColor: 'white', boxShadow: '50px -165px 40px 160px rgba(30, 158, 130, 1)', borderRadius: '10px' }} />
                  </Link>
                  <Link class=" mt-2 nav-link h5" to='/'>
                    24/7 Assure Care
                  </Link>
                </div>

                <div class="d-flex flex-wrap justify-content-center " style={{ minWidth: '50%' }}>
                  <Link class="nav-link" to='/AboutUs'>About Us</Link>
                  <Link class='nav-link mx-4' to='/Services'>Services</Link>
                  <Link class="nav-link mr-4" to='/Contact'>Contact</Link>
                  <Link class="nav-link" to='/Resources'>Resources</Link>
                </div>

                {/* <div className='' style={{ maxWidth: '25%' }}></div> */}



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
