import { Route } from "react-router-dom"
import React from "react"
import Navbar from "./navbar/navbar";
import Searchbar from "./searchbar/searchbar";
import { Switch } from "react-router-dom";
import Splash from "./splash/splash";
import SignupContainer from "./signup/signup_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginContainer from "./login/login_container";
import Footer from "./footer/footer";
import NavbarContainer from "./navbar/navbar_container";
import ProfileContainer from "./profile/profile_container";


const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <Route path="/profile/:id" component={ProfileContainer} />
            <Route path="/" component={Splash} />
        </Switch>
        <Footer />
    </div>


)

export default App;