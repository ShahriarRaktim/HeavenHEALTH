import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Notfound from './components/Notfound/Notfound';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Appointment from './components/Appointment/Appointment';
import Help from './components/Help/Help';
import Ourdoctors from './components/Ourdoctors/Ourdoctors';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
            <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/logout">
            <Logout></Logout>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/appoinment">
            <Appointment></Appointment>
          </Route>
          <Route path="/help">
            <Help></Help>
          </Route>
          <Route path="/ourdoctors">
            <Ourdoctors></Ourdoctors>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
