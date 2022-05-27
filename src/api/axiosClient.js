import axios from "axios";

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});
export const requestSpoonacular = axios.create({
    baseURL: 'https://api.spoonacular.com/',
})
export const requestAnime = axios.create({
    baseURL: 'https://api.jikan.moe/v4/',
})
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};
export const getSpoonacular = async (path, options = {}) => {
    const response = await requestSpoonacular.get(path, options);
    return response.data.recipes;
};
export default request;