import { Route } from "react-router-dom"
import React from "react"
import { Switch } from "react-router-dom";
import SignupContainer from "./signup/signup_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginContainer from "./login/login_container";
import Footer from "./footer/footer";
import NavbarContainer from "./navbar/navbar_container";
import ProfileContainer from "./profile/profile_container";
import ParkContainer from "./park/park_container";
import SplashContainer from "./splash/splash_container";


const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <Route path="/park/:id" component ={ParkContainer} />
            <Route path="/profile/:id" component={ProfileContainer} />
            <Route path="/" component={SplashContainer} />
        </Switch>
        <Footer />
    </div>


)

export default App;