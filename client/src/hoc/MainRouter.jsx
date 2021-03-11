import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from '../components/CustomNavbar'
import ApiPage from '../views/ApiPage'
import Home from '../views/Home'
import Login from '../views/Login'
import NotFound from '../views/NotFound'

export default function MainRouter() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/apipage" component={ApiPage} />
        <Route component={NotFound} />
      </Switch>

    </BrowserRouter>
  )
}
