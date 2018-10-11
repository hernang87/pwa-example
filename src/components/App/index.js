import { Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';
import store from '../../store';
import Users from '@pages/Users';

import style from './index.scss';

export default (props) => {
	return (
		<Provider store={store}>
			<Router>
        <Users path="/" />
      </Router>
		</Provider>
	);
}
