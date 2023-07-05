

const _brothUrl = "/api/broths"

export const getBrothById = (id) => {
    return fetch(`${_brothUrl}/${id}`, {
        method: "GET"
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
    })
    .catch(error => {
        console.error('There was an error getting Broth by Id.', error);
    })
} 

export const getAllBroths = () => {
    return fetch(`${_brothUrl}`, {
        method: "GET"
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
    })
    .catch(error => {
        console.error('Could not get all broths.', error);
    })
}