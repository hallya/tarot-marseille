import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { subRoutes } from './config';
import Default from '../Default/Default';

const SubRouter = (props) => (
  <Switch history={props.history}>
    {
      props.birthday && subRoutes.map(({ path, exact, Component }) => (
        <Route
          key={`subroute-${path}`}
          exact={exact}
          path={`${props.match.url}/${path}`}
          render={() => <Component {...props} path={path}/>}
          />
      ))
    }
    <Route from="/" to="*" render={() => <Default {...props}/>}/>
  </Switch>
);

export default SubRouter;