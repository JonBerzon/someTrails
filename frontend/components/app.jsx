import { Route } from "react-router-dom"
import React from "react"
import Navbar from "./navbar/navbar";
import Searchbar from "./searchbar/searchbar";


const App = () => (
    <div>
        <Navbar />
        <Searchbar />
        {/* <Route path="/" Component={Searchbar} /> */}
    </div>

)

export default App;