import axios from 'axios';

export interface ISearchResult {
    id: string,
    image: string;
    title: string;
    description: string;
    starList: Array<IStar>;
}

interface IStar {
    id: number,
    name: string,
}

export async function search(query : string) {
    try {
        const url = `https://imdb-api.com/API/AdvancedSearch/k_k2rf07hj/?title=${query}&count=10`;
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.log(`Error searching: ${error}`);
    }
}