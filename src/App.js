import './App.css'
import React from 'react';
import trangchu from './site/trangchu';
import dichvu from './site//dichvu';
import Cview from './control-views/Cview';
import Cservice from './control-views/Cservice'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (

    <>
      <Router>
        <Switch>
          <Route exact path='/' component={trangchu} />
          <Route exact path='/trangchu' render={prop => <Cview {...prop} authRoute='trangchu' />} />
          <Route exact path='/dichvu' render={prop => <Cview {...prop} authRoute='dichvu' />} />
          <Route exact path='/banggia' render={prop => <Cview {...prop} authRoute='banggia' />} />
          <Route exact path='/lienhe' render={prop => <Cview {...prop} authRoute='lienhe' />} />
          <Route exact path='/F_contact' render={prop => <Cview {...prop} authRoute='F_contact' />} />
          <Route exact path='/dichvu' component={dichvu} />
          <Route exact path='/dichvu/taytrangrang' render={prop => <Cservice {...prop} authRoute='taytrangrang' />} />
          <Route exact path='/dichvu/bocrangsu' render={prop => <Cservice {...prop} authRoute='bocrangsu' />} />
          <Route exact path='/dichvu/niengrang' render={prop => <Cservice {...prop} authRoute='niengrang' />} />
          <Route exact path='/dichvu/nhorang' render={prop => <Cservice {...prop} authRoute='nhorang' />} />
          <Route exact path='/dichvu/caovoirang' render={prop => <Cservice {...prop} authRoute='caovoirang' />} />
          <Route exact path='/dichvu/tramrang' render={prop => <Cservice {...prop} authRoute='tramrang' />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
