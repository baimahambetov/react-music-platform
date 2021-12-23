import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/global.css';
import { withLayout } from './layout/Layout';
import { Home, Popular, Recently, Suggested, Liked } from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/liked' element={<Liked />} />
				<Route path='/popular' element={<Popular />} />
				<Route path='/recently' element={<Recently />} />
				<Route path='/suggested' element={<Suggested />} />
			</Routes>
		</>
	);
}

export default withLayout(App);
