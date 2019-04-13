import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
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
    return (

      <div className="container pagecontainer">
        <div className="page-header">
          <h1>Register (underConstruction...)</h1>
        </div>

        <form className="form-horizontal" novalidate autocomplete="off">
          
          <div className="form-group">
            <label for="firstname" className="col-sm-2 control-label">First Name <sup>*</sup></label>
            <div className="input-group col-sm-8">
              <div className="input-group-addon"><i className="glyphicon glyphicon glyphicon-user"></i></div>
              <input type="text" className="form-control" id='firstname' onChange={this.handleChange} placeholder="First Name"></input>
            </div>
          </div>

          <div className="form-group">
            <label for="lastname" className="col-sm-2 control-label">Last Name <sup>*</sup></label>
            <div className="input-group col-sm-8">
              <div className="input-group-addon"><i className="glyphicon glyphicon glyphicon-user"></i></div>
              <input type="text" className="form-control" id='lastname' onChange={this.handleChange} placeholder="Last Name"></input>
            </div>
          </div>

          <div className="form-group">
            <label for="email" className="col-sm-2 control-label">E-mail <sup>*</sup></label>
            <div className="input-group col-sm-8">
              <div class="input-group-addon">@</div>
              <input type="text" className="form-control" id='email' onChange={this.handleChange} placeholder="E-mail"></input>
            </div>
          </div>

          <div className="form-group">
            <label for="password" className="col-sm-2 control-label">Password <sup>*</sup></label>
            <div className="input-group col-sm-8">
              <div class="input-group-addon"><i className="glyphicon glyphicon glyphicon-asterisk"></i></div>
              <input type="text" className="form-control" id='password' onChange={this.handleChange} placeholder="password"></input>
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label"></label>
            <div class="col-sm-5">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="reset" className="btn btn-default">Reset</button>
            </div>

            <div class="col-sm-5">
              <sup>*</sup> required
            </div>

          </div>

        </form>
      </div>

    )
  }
}

export default SignUp;