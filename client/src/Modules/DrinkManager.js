

const _drinkUrl = "/api/drinks"

export const getDrinkById = (id) => {
    return fetch(`${_drinkUrl}/${id}`, {
        method: "GET"
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
    })
    .catch(error => {
        console.error('There was an error getting drink by Id.', error);
    })
} 

export const getAllDrinks = () => {
    return fetch(`${_drinkUrl}`, {
        method: "GET"
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
    })
    .catch(error => {
        console.error('Could not get all drinks.', error);
    })
}