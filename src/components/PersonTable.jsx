import React from "react";

const PersonTable = (props) => {
  const rows = props.people.map((person) => {
    return (
      <tr key={person.id}>
        <td >{person.name}</td>
        <td >{person.phoneNumber}</td>
        <td >{person.cityId}</td>
        <td
          className="btn btn-info"
          onClick={() => {
            props.showPerson(person.id);
          }}>
          Details
        </td>
      </tr>
    );
  });

  return (
    <div className="col-md-6 middle-bar">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>PhoneNumber</th>
            <th>CityId</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default PersonTable;
