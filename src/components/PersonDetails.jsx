import React from "react";

const PersonDetails = (props) => {
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
          <b>City Id:</b>
          <p>{props.person.cityId}</p>
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
};

export default PersonDetails;
