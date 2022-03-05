import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AuthProvider from './Context/AuthProvider'
import Menubar from './components/Menubar/Menubar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer'
import AddEvents from './components/AddEvents/AddEvents'
import MyOrders from './components/MyOrders/MyOrders'
import SingleItem from './components/SingleItem/SingleItem'
import Events from './components/Events/Events'
import Dashboard from './components/Dashboard/Dashboard'
import Orders from './components/Orders/Orders'



function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/addEvent'>
              <AddEvents></AddEvents>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route path='/singleItem/:itemId'>
              <SingleItem></SingleItem>
            </Route>
            <Route path='/orders'>
              <Orders></Orders>
            </Route>
            <Route path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>
            <Route exact path='/footer'>
              <Footer></Footer>
            </Route>

            {/* <Route exact path='/login'>
              <Login></Login>
          </Route> */}
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
