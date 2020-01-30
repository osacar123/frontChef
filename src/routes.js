import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './views/home'
import Header from './components/Header'
import HeroeDetail from './views/heroeDetail'
import Ranking from './views/ranking'

const wrappedRoutes = () => (
        
      <div className="container__wrap">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/" component={HeroeDetail} />
        <Route exact path="/ranking/" component={Ranking} />
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