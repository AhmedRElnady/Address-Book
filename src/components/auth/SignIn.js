import React, { Component } from 'react'
import { connect } from "react-redux";
import { googleLogin } from "../../redux-store/actions/authActions";
import { Redirect } from 'react-router-dom'


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    if (this.props.auth.uid) return <Redirect to='/' /> 
    return (

      <div className="container pageContainer">

      <form onSubmit={this.handleSubmit} className="form-signin" novalidate autocomplete="off">
        <h6> Sign In (Basic Auhtentication under construction)</h6>
        <h6> -> Please Sign In using your Google Account </h6>
        
        
          <label htmlFor="email">E-mail</label>
          <input type="email" id='email' onChange={this.handleChange} className="form-control" />
        
        
        
        
          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={this.handleChange} className="form-control"/>
        
        
          <br />
          <div>
          <button className="btn-lg btn-primary btn-block">Sign In</button>
          <button className="btn-lg btn-primary btn-block" onClick={this.props.googleLogin}> Sign In with Google account</button>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6">Forgot Password</div>
          </div>      
      </form>
    </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, {googleLogin})(SignIn);