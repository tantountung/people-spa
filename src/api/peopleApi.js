

export default function getPeople() {
    return fetch('https://localhost:44304/api/React')
    //to call the table, must activate backend too
        .then(data => data.json());
}

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