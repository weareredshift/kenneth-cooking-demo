import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import AppContainer from 'containers/AppContainer';

import Home from './Home';
import Skills from './Skills';
import Comfort from './Comfort';
import Questions from './Questions';
import Confirmation from './Confirmation';

/**
 * App routes.
 * Path is path match.
 * Additional fields can be added
 */
export const routes = [
  { path: '/', component: Home },
  { path: '/skills', component: Skills, pageRoute: true },
  { path: '/comfort', component: Comfort, pageRoute: true },
  { path: '/questions', component: Questions, pageRoute: true },
  { path: '/confirmation', component: Confirmation, pageRoute: true }
];

/**
 * Defines the base routes of the application.
 */
const Routes = ({ router }) => {
  const { location } = router;
  return (
    <AppContainer>
      <Switch location={ location }>
        {
          routes.map(route => (
            <Route
              path={ route.path }
              component={ route.component }
              exact
              key={ route.path }
            />
          ))
        }
      </Switch>
    </AppContainer>
  );
};

const mapStateToProps = state => ({
  router: state.router
});

Routes.propTypes = {
  router: object
};

export default connect(mapStateToProps)(Routes);
