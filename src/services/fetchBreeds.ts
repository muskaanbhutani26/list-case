export const fetchBreeds = () => {
    const URL = `https://api.thedogapi.com/v1/breeds`;
    return fetch(URL);
};