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

export function getVehicles(page?: string) {
    const url = `vehicles${page}`;

    return instance.get(url);
}

export function getFilms(page?: string) {
    const url = `films${page}`;

    return instance.get(url);
}

export function getPeople(page?: string) {
    const url = `people${page}`;

    return instance.get(url);
}

export function getPlanet(page?: string) {
    const url = `planets${page}`;

    return instance.get(url);
}

