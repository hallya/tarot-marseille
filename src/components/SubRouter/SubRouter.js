import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { subRoutes } from './config';
import Default from '../Default/Default';
import Miroirs from '../Miroirs/miroirs';


const SubRouter = (props) => (
  <Switch history={props.history}>
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
    <Route key={`subroute/miroirs13`}
          exact={true}
          path={props.match.url + '/miroirs-13'}
          render={() => props.year
            ? <Miroirs miroirs={props.miroir13}/>
            : <Default/> }
          />
    <Route key={`subroute/miroirs17`}
          exact={true}
          path={props.match.url + '/miroirs-17'}
          render={() => props.year
            ? <Miroirs miroirs={props.miroir17}/>
            : <Default/> }
          />
    <Route key={`subroute/miroirs22`}
          exact={true}
          path={props.match.url + '/miroirs-22'}
          render={() => props.year
            ? <Miroirs miroirs={props.miroir22}/>
            : <Default/> }
          />
    <Route from={"/"} to="*" component={Default}/>
  </Switch>
);

export default SubRouter;