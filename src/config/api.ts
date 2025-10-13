export const BASE_API_URL = "https://pokeapi.co/api/v2/pokemon";

export const API_ENDPOINTS = {
    home: `${BASE_API_URL}`,
    detail: (id: number) => `${BASE_API_URL}/${id}`,
}