import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import history from 'Utils/history'
import Solitaire from '../Solitaire/Solitaire';
import Alliance from '../Alliance/Alliance';

const appRoutes = [
  {
    path: '/solitaire',
    exact: false,
    Component: Solitaire
  },
  {
    path: '/alliance',
    exact: false,
    Component: Alliance
  }
];

const MainRouter = (props) => (
  <Switch>
    {
      appRoutes.map(({ path, exact, Component }) => (
        <Route key={`route${path}`} exact={exact} path={path} render={({match}) => <Component match={match} history={history} {...props} />}/>
      ))
    }
    <Redirect from="*" to="/solitaire"/>
  </Switch>
);

export default MainRouter;