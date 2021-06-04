import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PersonTable from "./PersonTable";
import PersonDetails from "./PersonDetails";
import PersonCreate from "./PersonCreate";
import getPeople, { getPersonById } from "../api/peopleApi";
import "../css/App.css";

class App extends Component {
  state = {
    detailsPerson: null,
    createPerson: false,
    peopleList: [],
  };

  componentDidMount() {
    const _this = this;
    getPeople().then((people) => {
      _this.setState({ peopleList: people });
    });
  }

  findPerson = (id) => {
    // const people = this.state.peopleList;
    // let foundPerson = null;
    // people.forEach((element) => {
    //   if (element.id === id) {
    //     foundPerson = element;
    //   }
    // });

  

    getPersonById(id).then((person) => {
      return person;
    });
    
    
  };

  showPerson = (id) => {
    const person = this.findPerson(id);
    if (person != null) {
      this.setState({
        detailsPerson: person,
      });
    }
  };

  closeDetails = () => {
    this.setState({
      detailsPerson: null,
    });
  };

  deletePerson = (id) => {
    const person = this.findPerson(id);
    if (person != null) {
      const people = this.state.peopleList;
      people.splice(people.indexOf(person), 1);
      this.setState({
        peopleList: people,
        detailsPerson: null,
      });
    }
  };

  createPerson = () => {
    this.setState({
      createPerson: true,
    });
  };

  addPerson = (person) => {
    const peopleList = this.state.peopleList;
    if (peopleList === null || peopleList.length < 1) {
      person.id = 1;
    } else {
      const newId =
        peopleList.reduce((rowPerson, highest) => {
          if (rowPerson.id > highest.id) {
            return rowPerson.id;
          }
          return highest;
        }).id + 1; 
      person.id = newId;
    }

    peopleList.push(person);

    this.setState({
      peopleList: peopleList,
      createPerson: false,
    });
  };

  closeCreate = () => {
    this.setState({
      createPerson: false,
    });
  };

  render() {
    const sideElement =
      this.state.detailsPerson != null ? (
        <PersonDetails
          person={this.state.detailsPerson}
          closeDetails={this.closeDetails}
          deletePerson={this.deletePerson}
        />
      ) : this.state.createPerson ? (
        <PersonCreate addPerson={this.addPerson} closeCreate={this.closeCreate} />
      ) : (
        <div>
          <button onClick={this.createPerson} className="btn btn-success">
            Add Person
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <div>
        <Header />

        <div className="container stay-clear">
          <h3>Person SPA</h3>
          <hr />
          <div className="row">
            <PersonTable people={this.state.peopleList} showPerson={this.showPerson} />
            {sideElement}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
