

export default function getPeople() {
    return fetch('https://localhost:44304/api/React')
    //to call the table, must activate backend too
        .then(data => data.json());
}

export function getPersonById(id) {
    return fetch('https://localhost:44304/api/React/' + id)
        .then(data => data.json());
}