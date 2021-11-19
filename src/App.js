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
import AddProduct from './components/AddProduct/AddProduct';
import AllProducts from './components/AllProducts/AllProducts';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';


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

            {/* -----------Home route---------------- */}
            <Route exact path="/allProducts">
              <AllProducts> </AllProducts>
            </Route>

            {/* -----------Dashboard route---------------- */}
            <Route exact path="/dashboard">
             <Dashboard> </Dashboard>
            </Route>

            {/* -----------Dashboard route---------------- */}
            <Route exact path="/user">
              <Profile> </Profile>
            </Route>

            {/* -----------Add a product route---------------- */}
            <PrivetRoute exact path="/AddProduct">
             <AddProduct></AddProduct>
            </PrivetRoute>

            {/* -----------Login route---------------- */}
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>

            {/* -----------Register route---------------- */}
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
