import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"
import { login, logout, signup } from "./actions/session_actions";
import { fetchUsers } from "./actions/user_actions";


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUserId: window.currentUser.id
            },
            entities: {
                users: {
                    [window.currentUser.id]: {
                        id: window.currentUser.id, 
                        email: window.currentUser.email,
                        fname: window.currentUser.fname,
                        lname: window.currentUser.lname
                    }
                } 
            }

        };
    }
    const store = configureStore(preloadedState)
    ReactDOM.render(<Root store={store} />, root)
    window.store = store
    window.signup = signup
    window.logout = logout
    window.login = login
    window.fetch = fetchUsers

})

// store.dispatch(signup({ email: "jb@gmail.com", password: "starwars", first_name:"jon", last_name: "b", bio:"hi im jon"}))
// store.dispatch(login({email: "jb@gmail.com", password: "starwars"}))
// store.dispatch(logout())