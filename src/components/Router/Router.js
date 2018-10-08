import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { appRoutes } from './config';

const MainRouter = (props) => (
  <Switch>
    {
      appRoutes.map(({ path, exact, Component }) => (
        <Route
          key={`route${path}`}
          exact={exact}
          path={path}
          render={({ match }) => <Component match={match} {...props} />} />
      ))
    }
    <Redirect from="*" to="/individuel"/>
  </Switch>
);

export default MainRouter;