import React, { Component } from "react";
class PersonCreate extends Component {
  createPerson = (event) => {
    event.preventDefault();

    const person = {
      id: 0,
      Name: event.target["name"].value,
      PhoneNumber: event.target["phoneNumber"].value,
      CityId: Number(event.target["city"].value),
      // CountryName: event.target["country"].value,
    };

    this.props.addPerson(person);
  };

  render() {
    const optionCity = this.props.cityArray.map((city) => {
      return ( 
        <option key={city.id} value={city.id}>
          {city.cityName}
          </option>     
      );
    });

    const optionCountry = this.props.countryArray.map((country) => {
      return ( 
        <option key={country.id} value={country.id}>
          {country.countryName}</option>     
      );
    });
  
  
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
            <label htmlFor="city" className="col-2 mt-2">
              City:
            </label>
            <select id="city" required className="form-control col-10">
              {optionCity}
            </select>          
          </div>
          
          <div className="row mb-2">
            <label htmlFor="country" className="col-2 mt-2">
            Country:
            </label>
            <select id="country" required className="form-control col-10">
              {optionCountry}
            </select>          
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
