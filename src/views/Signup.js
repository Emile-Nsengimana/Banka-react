import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import LeftSide from '../components/SidePart';
import { registerUser } from '../redux/actions/authenticationAction';

class Signup extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUserRegister= async (e) => {
    e.preventDefault();
    await this.props.registerUser(this.state);
  }

  render() {
    return (
      <div className="wrapper">
        <LeftSide />
        <div className="left">
          <h1 className="signup-header">Signup</h1>
          <form onSubmit={this.handleUserRegister}>
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder="First name..."
              onChange={this.onChange}
            />
            <input
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Last name..."
              onChange={this.onChange}
            />
            <input
              className="form-control"
              type="text"
              name="phoneNo"
              placeholder="phone..."
              onChange={this.onChange}
            />

            <div className="form-control-select">
              <select
                className="form-control"
                type="text"
                name="gender"
                placeholder="Email..."
                onChange={this.onChange}
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Email..."
              onChange={this.onChange}
            />
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password..."
              onChange={this.onChange}
            />
            <input
              className="form-control"
              type="password"
              name="confirmPassword"
              placeholder="Re-type password..."
              onChange={this.onChange}
            />
            <button
              className="login-btn"
              name="Login"
              send="Logging in..."
              id="button"
              type="submit"
            >
            Register
            </button>
          </form>
          <h5 className="login-header">
            Already have an account?
            {' '}
            <Link to="/login">Login</Link>
          </h5>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  registerUser: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
});


export default connect(
  mapStateToProps,
  { registerUser },
)(Signup);
