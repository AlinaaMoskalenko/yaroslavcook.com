import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import {
  MenuHomePage,
  MenuContainer,
  CrewMenu,
  DessertsMenu,
  FrenchCharterMenu,
  MiddleEasternMenu
} from './pages';

const MenuModule = ({ match: { path: base }}) => (
  <Switch>
    <Route exact path={`${base}`} component={MenuHomePage} />
    <Route path={`${base}/desserts`} component={DessertsMenu} />
    <MenuContainer path={`${base}/crew`} component={CrewMenu} />
    <MenuContainer path={`${base}/french-charter-dinner`} component={FrenchCharterMenu} />
    <MenuContainer path={`${base}/middle-eastern`} component={MiddleEasternMenu} />
  </Switch>
);

export default withRouter(MenuModule);
