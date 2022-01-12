import React from 'react';

import './landing-page.styles.scss';

import NavBar from '../../components/nav-bar/nav-bar.component';
import SideBar from '../../components/side-bar/side-bar.component';

const LandingPage = () => (
    <div className='landingPage'>
        <NavBar />
        <SideBar />
    </div>
);

export default LandingPage;