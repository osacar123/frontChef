import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './views/home'
import Header from './components/Header'
import HeroeDetail from './views/heroeDetail'

const wrappedRoutes = () => (
        
      <div className="container__wrap">
        <Header />
        <Route path="/home/" component={Home} />
        <Route path="/detail/" component={HeroeDetail} />
      </div>
);

const Router = () => (
    <main>
        <Switch>
            {wrappedRoutes()}        
        </Switch>
    </main>
);

export default Router;