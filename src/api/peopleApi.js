import axios from 'axios';

export default function getPeople() {
    return fetch('https://localhost:44304/api/React')
    //to call the table, must activate backend too
        .then(data => data.json());
}

export  function getCities() {
    return fetch('https://localhost:44304/api/React/Cities')
        .then(data => data.json());
}

// export function getCountries() {
//     return fetch('https://localhost:44304/api/React/Countries')
//     //to call the table, must activate backend too
//         .then(data => data.json());
// }
export async function getPersonById(id) {
    try {
        let response = await fetch('https://localhost:44304/api/React/' + id);
        let json = await response.json();
        return json;
        }
        catch (e) {
            console.log('Error!', e);
}
}

export async function createPerson (person) {
 try {
    let response = await axios.post('https://localhost:44304/api/React/', { 
Name: person.Name,
PhoneNumber: person.PhoneNumber,
CityId: person.CityId
});
let json = await response.data;
return json;
}
catch (e) {
    console.log('Error!', e);
}
}

export async function deletePerson(id) {
    try {
       let response = await axios.delete('https://localhost:44304/api/React/' +id);
     
   return true;
   }
   catch (e) {
       console.log('Error!', e);
       return false;
   }
   }