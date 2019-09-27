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

const MenuModule = ({ match: { path: base }, ...rest }) => (
  <Switch>
    <Route exact path={`${base}`} component={MenuHomePage} />
    <Route path={`${base}/desserts`} render={() => <DessertsMenu {...rest} /> } />
    <MenuContainer path={`${base}/crew`} {...rest} component={CrewMenu} />
    <MenuContainer path={`${base}/french-charter-dinner`} {...rest} component={FrenchCharterMenu} />
    <MenuContainer path={`${base}/middle-eastern`} {...rest} component={MiddleEasternMenu} />
  </Switch>
);

export default withRouter(MenuModule);
