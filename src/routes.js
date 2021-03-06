import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './pages/App'
import Clients from './pages/Clients'
import Client from './pages/Client'
import Over from './pages/Over'
import Contact from './pages/Contact'
import { NotFound } from './pages/404'
import Login from './pages/Login'
import Header from './components/page/Header'

export default class RouterNav extends Component {
	data = [
		{
			id: 1,
			name: 'Home',
			path: '/',
			file: App,
			show: true,
			protected: false
		},
		{
			id: 2,
			name: 'Cases',
			path: '/cases',
			file: Clients,
			show: true,
			protected: false
		},
		{
			id: 3,
			name: 'Over',
			path: '/over',
			file: Over,
			show: true,
			protected: false
		},
		{
			id: 4,
			name: 'Contact',
			path: '/contact',
			file: Contact,
			show: true,
			protected: false
		},
		{
			id: 5,
			name: 'Case',
			path: '/cases/:id',
			file: Client,
			show: false,
			protected: false
		},
		{
			id: 6,
			name: 'Login',
			path: '/login',
			file: Login,
			show: false,
			protected: false
		},
		{
			id: 7,
			name: 'NotFound',
			path: '*',
			file: NotFound,
			show: false,
			protected: false
		}
	]

	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Header
						link={this.data.filter(page => {
							return (
								page.show === true && page.protected === false
							)
						})}
					/>
					<main>
						<Switch>
							{this.data.map(page => (
								<Route
									activeClassName="nav-active"
									key={page.id}
									exact
									path={page.path}
									component={page.file}
								/>
							))}
						</Switch>
					</main>
				</React.Fragment>
			</BrowserRouter>
		)
	}
}
