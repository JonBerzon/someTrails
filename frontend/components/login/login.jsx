import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = props.user
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginDemo = this.loginDemo.bind(this)

    }
    componentDidMount() {
        this.props.clearErrors()
    }

    handleChange(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        console.log(this.props.errors)
        this.props.errors == [] ? this.props.history.push("/") : null
    }

    loginDemo() {
        let demo = ({
            email: "demo@gmail.com",
            password: "password"
        })
        this.props.login(demo)
    }

    render(){
        const { errors } = this.props
        return(
            <div>
                <div className="signup-background-img">
                    <div className="signup-div-login">
                        <h1>Log in and let's get going</h1>
                        <form className="form-div" onSubmit={this.handleSubmit}>
                            <div className={errors.includes("Wrong credentials entered! Please try again.") ? "fake-input red" : "fake-input"}>
                                <input
                                    className="signup-field"
                                    type="search"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleChange("email")}
                                />
                            </div>
                            <p className="signup-error-text">
                                {errors.includes("Wrong credentials entered! Please try again.") ? "Invalid email or password." : ""}
                            </p>
                            <div className={errors.includes("Wrong credentials entered! Please try again.") ? "fake-input red" : "fake-input"}>
                                <input
                                    className="signup-field"
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange("password")}
                                />
                            </div>
                            <p className="signup-error-text">
                                {errors.includes("Wrong credentials entered! Please try again.") ? "Invalid email or password." : ""}
                            </p>
                            <input
                                className="sign-up-page-submit"
                                type="submit"
                                value="Login"
                            />
                            </form>
                            
                            
                            
                            
                            
                            <p className="have-acc">
                                Don't have an account?&nbsp;
                                <Link className="green-signup" to="/signup">Sign up for free</Link>
                            </p>
                            <p className="demo-log">
                                Just here to look? Log in as a&nbsp;
                                <span onClick={this.loginDemo} className="green-signup">demo user</span>
                            </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;