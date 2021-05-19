import './App.css';
import React from 'react'
import { ForgotPassword } from './Login/ForgotPassword';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ChangePassword } from './Login/ChangePassword';
import { Home } from './Login/Home';
import { ALogin } from './Login/ALogin';
import { LandingPage } from './LandingPage';
import { AHome } from './Admin/AHome';
import { Payment } from './Payment/Payment';
import { RazorPay } from './Payment/RazorPay';


function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/forgotpassword' exact={true} component={ForgotPassword} />
          <Route path='/validate' exact={true} component={ChangePassword} />
          <Route path='/login' component={Home} />
          <Route path='/adminlogin' component={ALogin} />
          <Route path='/admin' component={AHome} />
          <Route path='/payment/:total' component={Payment} />
          <Route path='/finalPay' component={RazorPay} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>)

}

export default App;
