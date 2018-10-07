import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import history from '../../utils/history';
import { appRoutes } from './config';

const MainRouter = (props) => (
  <Switch>
    {
      appRoutes.map(({ path, exact, Component }) => (
        <Route key={`route${path}`} exact={exact} path={path} render={({match}) => <Component match={match} history={history} {...props} />}/>
      ))
    }
    <Redirect from="*" to="/individuel"/>
  </Switch>
);

export default MainRouter;