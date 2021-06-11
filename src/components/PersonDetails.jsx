import React from "react";

const PersonDetails = (props) => {

  let countryName = 'No Country';
  if(props.person.City != null){
          
    if(props.person.City.Country != null){
        countryName = props.person.City.Country
        .CountryName;
    }
}

let languageName = 'No Language';
  if(props.person.personLanguages != null){
          
    if(props.person.personLanguages.Language != null){
      languageName = props.person.personLanguages.Language;
    }





  return (
    <div className="col-md-6">
      <ul className="list-group">
        <li className="list-group-item">
          <b>Name:</b>
          <p>{props.person.name}</p>
        </li>
        <li className="list-group-item">
          <b>Phone Number:</b>
          <p>{props.person.phoneNumber}</p>
        </li>
        <li className="list-group-item">
          <b>City Name:</b>
          <p>{props.person.city == null? 
          'No City': props.person.city.cityName}</p>
        </li>

        <li className="list-group-item">
          <b>Country Name:</b>
          <p>{props.person.city.country == null? 
          'No Country': props.person.city.country.countryName}</p>
          {/* <p>{countryName}</p> */}
        </li>

        <li className="list-group-item">
          <b>Languages:</b>
          <p>{props.person.personLanguages.Language == null? 
          'No Language': props.person.personLanguages.Language}</p>
          {/* <p>{languageName}</p> */}
        </li>

        <li className="list-group-item">
          <b>Actions:</b>
          <button className="btn btn-secondary" onClick={props.closeDetails}>
            Close
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deletePerson(props.person.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
          }}

export default PersonDetails;
