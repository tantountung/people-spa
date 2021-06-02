

export default function getPeople() {
    return fetch('https://localhost:44348/api/React')
        .then(data => data.json());
}

export function getPersonById(id) {
    return fetch('https://localhost:44348/api/React/' + id)
        .then(data => data.json());
}