import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          {/* -----------Header route---------------- */}
          <Header>
          </Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* -----------Home route---------------- */}
            <Route exact path="/home">
              <Home></Home>
            </Route>



            {/* -----------Login route---------------- */}
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>

            {/* -----------Login route---------------- */}
            <Route exact path="/register">
             <Register> </Register>
            </Route>


            {/* -----------Unknown or error  route---------------- */}
            <Route path="*">
              <NotFound> </NotFound>
            </Route>

          </Switch>
          {/* -----------Route route---------------- */}
          <Footer></Footer>
        </Router>

      </AuthProvider>


    </div>
  );
}

export default App;
