import React, { Component } from "react";
class PersonCreate extends Component {
  createPerson = (event) => {
    event.preventDefault();

    const person = {
      id: 0,
      Name: event.target["name"].value,
      PhoneNumber: event.target["phoneNumber"].value,
      CityId: Number(event.target["cityId"].value),
    };

    this.props.addPerson(person);
  };

  render() {
    return (
      <div className="col-md-6">
        <div className="row">
          <h3 className="col-12">Add Person</h3>
        </div>

        <form onSubmit={this.createPerson}>
          <div className="row mb-2">
            <label htmlFor="name" className="col-2 mt-2">
              Name:
            </label>
            <input
              id="name"
              type="text"
              required
              minLength="2"
              className="form-control col-10"
              placeholder="Enter Name"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="phoneNumber" className="col-2 mt-2">
              Phone Number:
            </label>
            <input
              id="phoneNumber"
              type="text"
              required
              className="form-control col-10"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="cityId" className="col-2 mt-2">
              City Id:
            </label>
            <input
              id="cityId"
              type="number"
              required
              step="1"
              min="1"
              className="form-control col-10"
              placeholder="Enter City Id"
            />
          </div>

          <div className="row d-flex justify-content-center">
            <input
              type="reset"
              className="mr-2 btn btn-warning"
              value="Reset"
            />
            <input type="submit" className=" btn btn-success" value="Create" />
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary"
            onClick={this.props.closeCreate}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default PersonCreate;
