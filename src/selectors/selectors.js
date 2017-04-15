import _ from 'lodash';

export const getSelectedUserName = state => _.replace(state.routing.location.pathname, '/users', '');
