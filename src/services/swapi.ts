import axios from "axios";

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
});

export async function getRoot() {
    return instance.get(
        ''
    );
}

export async function getRandomPlanet() {
    const planetID = Math.round(Math.random() * (60 - 1) + 1)
    return instance.get(
        `planets/${planetID}/`
    );
}

export function getStarships(page?: string) {
    const url = `starships${page}`;

    return instance.get(url);
}

