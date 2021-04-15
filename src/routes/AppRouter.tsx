import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';

export default function AppRouter() {
  return (
    <Switch>
      {routes.map((x) => (
        <Route key={x.path} {...x} />
      ))}
      <Redirect from="/" to={routes[0].path} />
    </Switch>
  );
}
