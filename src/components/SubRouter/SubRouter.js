import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Default from '../Default/Default';
import { subRoutes } from './config';


const SubRouter = (props) => (
  <Switch>
    {
      subRoutes.map(({ path, exact, Component }) => (
        <Route
          key={`subroute${path}`}
          exact={exact}
          path={props.match.url + path}
          render={() => props.year
            ? <Component {...props}/>
            : <Default/> }
          />
      ))
      }
    <Route from={"/"} to="*" component={Default}/>
  </Switch>
);

export default SubRouter;