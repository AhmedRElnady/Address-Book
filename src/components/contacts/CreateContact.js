import React, { Component } from 'react';

class CraeteContact extends Component {
  // ToDo: refactor

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      picture: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  preparePicture = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        picture: file,
      });
    };

    reader.readAsDataURL(file);

  }

  handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      address: this.state.address,
      picture: this.state.picture,
      uid: this.props.uid
    }

    this.props.saveContactFun(contact);

    this.setState({
      name: '',
      address: '',
      picture: ''
    });

    document.getElementById('upload-picture').value = null;
  }
  render() {
    return (

      <div className="container pagecontainer">

        <form className="form-horizontal" onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label for="name" className="col-sm-2 control-label"></label>
            <div className="input-group col-sm-8">
              <div className="input-group-addon"><i className="glyphicon glyphicon glyphicon-user"></i></div>
              <input type="text"
                className="form-control"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                placeholder="Contact Name"
                required>
              </input>
            </div>
          </div>

          <div className="form-group">
            <label for="address" className="col-sm-2 control-label"></label>
            <div className="input-group col-sm-8">
              <div className="input-group-addon"><i className="glyphicon glyphicon glyphicon-home"></i></div>
              <textarea className="form-control"
                name="address"
                onChange={this.handleChange}
                value={this.state.address}
                placeholder="Contact Address"
                required>
              </textarea>
            </div>
          </div>

          <div className="form-group">
            <label for="picture" className="col-sm-2 control-label"></label>
            <div className="input-group col-sm-8">
              <div className="input-group-addon"><i className="glyphicon glyphicon glyphicon-picture"></i></div>
              <input type="file"
                className="form-control"
                id="upload-picture"
                name="picture"
                onChange={this.preparePicture}
                key={this.state.inputKey}
                placeholder="Contact Picture">
              </input>
            </div>
          </div>


          <label className="col-sm-2 control-label"></label>
          <button className="btn btn-primary col-sm-8"> Save </button>

        </form>
      </div>
    )
  }
}

export default CraeteContact;