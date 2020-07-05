import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FaceEnrollment from './FaceEnrollment/FaceEnrollment';
import AddCamera from './AddCamera/AddCamera';
import Api from './Api/Api';
import { Image } from 'react-bootstrap'

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <App/>
    },
    {
        path: "/face-enrollment",
        main: () => <FaceEnrollment/>
    },
    {
        path: "/add-camera",
        main: () => <AddCamera/>
    },
    {
        path: "/history",
        main: () => <Api/>
    }
]
class AppRouter extends Component {
    initialState = {
        isShowSidebar: true
    }
    state = this.initialState

    HandleClose = () => {

        console.log("clicked")
    }
    render() {
        return (
            <Router>
                <div style={{height:"100%", width:"100%", position:"relative", paddingTop:"50px"}}>
                    <div className="app-header bg-dark">
                        <div className="bg-dark header-logo">
                            <img  alt="" src="https://proxy.cakap.com/aws-s3/dev.squline.com/uploads/student/00472220e2038bcae199ee5d879f8667.png"></img>
                        </div>
                        <div className="app-header-navbar">
                            <button className="btn btn-primary" onClick={this.HandleClose}>Hide</button>
                        </div>
                    </div>
    
                    <div className="app-body">
                    
                    <div className="app-sidebar bg-dark">
                        <ul style={{listStyleType:"none", padding:"0"}}>
                            <li>
                                <Link style={{color:"#ffffff", textDecoration: "none"}} to="/">Monitor</Link>
                            </li>
                            <li>
                                <Link style={{color:"#ffffff", textDecoration: "none"}}  to="/face-enrollment">Face Enrollment</Link>
                            </li>
                            <li>
                                <Link style={{color:"#ffffff", textDecoration: "none"}}  to="/add-camera">Add Camera</Link>
                            </li>
                            <li>
                                <Link style={{color:"#ffffff", textDecoration: "none"}}  to="/history">Report History</Link>
                            </li>
                        </ul>
    
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                />
                            ))}
                        </Switch>
                    </div>
    
                    <div className="app-main">
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main/>}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
                </div>
                
                
            </Router>
        );
    }
}
export default AppRouter;


