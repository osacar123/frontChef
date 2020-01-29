import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './views/home'

const wrappedRoutes = () => (
      <div className="container__wrap">
        <Route path="/" component={Home} />
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