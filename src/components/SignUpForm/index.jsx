import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            error: ''
        });
    };

    handleSubmit = async (event) => {    
        event.preventDefault();
        try {
            // We don't want to send the 'error' or 'confirm' property,
            // just define what need to be sent to the server
            const formData = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            };
            const user = await signUp(formData);
            console.log(user)
        } catch {
            // An error occured
            this.setState({ error: 'Sign Up FAiled - Try Again' });
        }
    };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        <label>Confirm</label>
                        <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}