import { mainUrl } from "../url"

export class quizAPI {
    static getRandomQuestion = () => {
        return fetch(`${mainUrl}/random`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        });
    }
    static getCategoriesQuestion = (idCategory) => {
        return fetch(`${mainUrl}/question?category=${idCategory}`, {
            method:'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            }
        })
    }
    static getCategories = () => {
        return fetch(`${mainUrl}/categories`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        });
    }
}