import React from "react";
import { Link } from "react-router-dom";


class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = props.user
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.clearErrors()
    }

    handleChange(type){
        return e => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state)
        console.log(this.props.errors)
        this.props.errors == [] ? this.props.history.push("/") : null
        

    }
    render(){
        const { errors } = this.props
        return(
            <div>
                <div className="signup-background-img">
                <div className="signup-div">
                    <h1>Create your free account</h1>
                        <form className="form-div" onSubmit={this.handleSubmit} >
                        <div className={errors.includes("Fname can't be blank") ? "fake-input red" : "fake-input"}>
                            <input className="signup-field"
                                type="search" 
                                placeholder="First name" 
                                value={this.state.fname}
                                onChange={this.handleChange("fname")}
                                />   
                        </div>
                        <p className="signup-error-text">
                            {errors.includes("Fname can't be blank") ? "Enter your first name." : ""}
                        </p>
                        <div className={errors.includes("Lname can't be blank") ? "fake-input red" : "fake-input"}>
                            <input 
                                className="signup-field" 
                                type="search" 
                                placeholder="Last name"
                                value={this.state.lname}
                                onChange={this.handleChange("lname")}
                                />
                        </div>
                            <p className="signup-error-text">
                                {errors.includes("Lname can't be blank") ? "Enter your last name." : ""}
                            </p>
                        <div className={errors.includes("Email can't be blank") || errors.includes("Email has already been taken") ? "fake-input red" : "fake-input"}>
                            <input 
                                className="signup-field" 
                                type="search" 
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange("email")}
                                />
                        </div>
                            <p className="signup-error-text">
                                {errors.includes("Email can't be blank") ? "Email is not valid." : ""}
                            </p>
                            <p className="signup-error-text">
                                {errors.includes("Email has already been taken") ? "Email is already in use." : ""}
                            </p>
                        <div className={errors.includes("Password is too short (minimum is 6 characters)") ? "fake-input red" : "fake-input"}>
                            <input 
                                className="signup-field" 
                                type="password" 
                                placeholder="Password" 
                                value={this.state.password}
                                onChange={this.handleChange("password")}
                                />
                        </div>
                            <p className="signup-error-text">
                                {errors.includes("Password is too short (minimum is 6 characters)") ? "Password must be 6 characters long." : ""}
                            </p>
                        <input 
                            className="sign-up-page-submit"
                            type="submit" 
                            value="Sign up" 
                            />
                        <p className="have-acc">
                            Already have an account?&nbsp;
                            <Link className="green-signup" to="/login">Login</Link>
                        </p>
                    <p className="demo-log">
                            Just here to look? Log in as a&nbsp;
                            <Link to="/" className="green-signup">demo user</Link>
                    </p>

                    </form>
                </div>
                </div>
            </div>
            
        )
        
    }
}

export default Signup