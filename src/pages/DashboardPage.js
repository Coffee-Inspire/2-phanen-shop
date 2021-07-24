import React, { useRef, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import BarBrown from '../components/atoms/BarBrown';
import NavDashboard from '../components/templates/NavDashboard';

import DashAbout from '../components/organisms/DashAbout';
import DashChangePass from '../components/organisms/DashChangePass';

function DashboardPage() {
    const navBtn = useRef(null);
    const [navDash, setNavDash] = useState(false);

    return (
        <Container fluid className="p-0 d-flex flex-row">
            <div className={navDash ? "navbarDashboard navbarDashboardShadow z-index-3 show" : "navbarDashboard navbarDashboardShadow z-index-3"}>
                <NavDashboard reff={navBtn} status={navDash} setStatus={setNavDash}/>
            </div>
            <div className="w-100 bodyDashboard">
                <BarBrown reff={navBtn} status={navDash} setStatus={setNavDash}/>
                <Switch>
                    <Route path="/dashboard/dashabout/">
                        <DashAbout />
                    </Route>
                    <Route path="/dashboard/changepass/">
                        <DashChangePass />
                    </Route>
                </Switch>
            </div>
        </Container>
    )
}

export default DashboardPage
