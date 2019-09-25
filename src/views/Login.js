import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import LeftSide from '../components/SidePart';
import { userLogin } from '../redux/actions/authenticationAction';

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUserLogin= async (e) => {
    e.preventDefault();
    await this.props.userLogin(this.state);
  }

  redirectOnsuccess = () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.props.history.push('/home');
    }
  }

  render() {
    this.redirectOnsuccess();
    return (
      <div className="wrapper">
        <LeftSide />
        <div className="left login-left">
          <h1 className="login-header">Welcome Back!</h1>
          <form onSubmit={this.handleUserLogin}>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={this.onChange}
              placeholder="Email..."
            />
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.onChange}
              placeholder="Password..."
            />
            <button
              className="login-btn"
              name="Login"
              send="Logging in..."
              id="button"
              type="submit"
            >
            Login
            </button>
          </form>
          <h5 className="login-header">
          Do not have an account?
            {' '}
            <Link to="/signup">Signup</Link>
          </h5>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  userLogin: propTypes.func.isRequired,
  history: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
});


export default connect(
  mapStateToProps,
  { userLogin },
)(Login);
