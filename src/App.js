import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Notfound from "./components/Notfound/Notfound";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login";
import Service from "./components/Service/Service";
import Appointment from "./components/Appointment/Appointment";
import Ourdoctors from "./components/Ourdoctors/Ourdoctors";
import AuthProvider from "./Context/AuthProvider";
import Register from "./components/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Details from "./components/Details/Details";
import Servicedetails from "./components/Servicedetails/Servicedetails";
import Footer from "./components/Footer/Footer";
import Question from "./components/Question/Question";

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
            <Route path="/service">
              <Service></Service>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/question">
                <Question></Question>
            </PrivateRoute>
            <PrivateRoute path="/ourdoctors">
              <Ourdoctors></Ourdoctors>
            </PrivateRoute>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/servicedetails">
              <Servicedetails></Servicedetails>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
