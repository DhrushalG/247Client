import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Resources from './components/Resources';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import './static/App.css';
// import ContactUs2 from './components/ContactUs2';

function App() {
  return (
    <div className=''>
      <head>
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous' />
      </head>
      <BrowserRouter>
        <body>
          <header>
            <Navbar></Navbar>
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
              {/* <Route exact path='/ContactUs2'>
                <ContactUs2></ContactUs2>
              </Route> */}
              <Route exact path='/Privacy-policy'>
                <PrivacyPolicy></PrivacyPolicy>
              </Route>
            </Switch>
          </main>

          <footer class='container py-2' style={{ minWidth: '100%' }}>
            <Footer></Footer>
          </footer>
        </body>
      </BrowserRouter>
    </div >
  );
}

export default App;
