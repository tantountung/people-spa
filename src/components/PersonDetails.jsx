import React from "react";

const PersonDetails = (props) => {

  let countryName = 'No Country';
  if(props.person.city != null){
          
    if(props.person.city.Country != null){
        countryName = props.person.cityId.city.Country
        .countryName.map((c) =>{
            return (
                <p key={c.id}>{c.countryName}</p>
            );
        })
    }
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
        {/* <li className="list-group-item">
          <b>Country Name:</b>
          <p>{props.person.countryName}</p>
        </li> */}

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
};

export default PersonDetails;
