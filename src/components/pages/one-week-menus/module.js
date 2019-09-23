import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import {
  MenuHomePage,
  CrewMenu,
  DessertsMenu,
  FrenchCharterMenu,
  MiddleEasternMenu
} from './pages';

const MenuModule = ({ match: { path: base }}) => (
  <Switch>
    <Route exact path={`${base}`} component={MenuHomePage} />
    <Route path={`${base}/crew`} component={CrewMenu} />
    <Route path={`${base}/desserts`} component={DessertsMenu} />
    <Route path={`${base}/french-charter-dinner`} component={FrenchCharterMenu} />
    <Route path={`${base}/middle-eastern`} component={MiddleEasternMenu} />
  </Switch>
);

export default withRouter(MenuModule);
