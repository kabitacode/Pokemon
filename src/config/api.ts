export const BASE_API_URL = `${process.env.BASE_API_URL}`;

export const API_ENDPOINTS = {
    home: BASE_API_URL,
    detail: (name: string) => `${BASE_API_URL}/${name}`,
}