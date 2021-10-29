import { Route } from "react-router-dom"
import React from "react"
import Navbar from "./navbar/navbar";
import Searchbar from "./searchbar/searchbar";
import { Switch } from "react-router-dom";
import Splash from "./splash/splash";
import Signup from "./signup/signup_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => (
    <div>
        
        <Navbar />
        <Switch>
            
            <AuthRoute path="/signup" component={Signup} />
            <Route path="/" component={Splash} />



        </Switch>
        {/* <Searchbar /> */}
        {/* <Route path="/" Component={Searchbar} /> */}
    </div>

)

export default App;