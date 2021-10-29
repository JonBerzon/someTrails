import React from "react";
import { Link } from "react-router-dom";


class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = props.user
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
                        <div className="fake-input">
                            <input 
                                className={errors.includes("Fname can't be blank") ? "signup-field red" : "signup-field"}
                                type="text" 
                                placeholder="First name" 
                                value={this.state.fname}
                                onChange={this.handleChange("fname")}
                                />
                        </div>
                        <div className="fake-input">
                            <input 
                                className="signup-field" 
                                type="text" 
                                placeholder="Last name"
                                value={this.state.lname}
                                onChange={this.handleChange("lname")}
                                />
                        </div>
                        <div className="fake-input">
                            <input 
                                className="signup-field" 
                                type="text" 
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange("email")}
                                />
                        </div>
                        <div className="fake-input">
                            <input 
                                className="signup-field" 
                                type="password" 
                                placeholder="Password" 
                                value={this.state.password}
                                onChange={this.handleChange("password")}
                                />
                        </div>
                        <input 
                            type="submit" 
                            value="Sign up" 
                            />
                        <p className="have-acc">
                            Already have an account? &nbsp;
                            <Link className="green-signup" to="/login">Log in</Link>
                        </p>
                    <p className="demo-log">
                            Just here to look? Log in as a &nbsp;
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