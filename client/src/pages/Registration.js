import React from "react";
import Nav from "../components/Nav";
import "./registration.css";

class Registration extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        // e.preventDefault();
        this.props.onSubmit();
        console.log(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        });
    };

    render() {
        return (
            
            <form>
                <input
                    name="firstName"
                    placeholder='First Name'
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="lastName"
                    placeholder='Last Name'
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="username"
                    placeholder='Username'
                    value={this.state.username}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="email"
                    placeholder='Email'
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="password"
                    placeholder='Password'
                    value={this.state.password}
                    onChange={e => this.change(e)}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Create Account</button>

            </form>
           
        );
    };
}
export default Registration;