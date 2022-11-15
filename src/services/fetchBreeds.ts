const BASE_URL = process.env.REACT_APP_BASE_URL;
const requestOptions = {
    headers: {
    'Content-Type': 'application/json'
    }
}
export const fetchBreeds = () => {
    const URL = `${BASE_URL}v1/breeds`;
    return fetch(URL, requestOptions);
};