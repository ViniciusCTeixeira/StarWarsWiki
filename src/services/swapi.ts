import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://swapi.dev/api/',
    timeout: 1000,
});

export async function getRoot() {
    try {
        // 👇️ const data: GetUsersResponse
        const response = await instance.get(
            '',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        console.log(JSON.stringify(response.data, null, 4));

        console.log('response status is: ', response.status);

        return response;
    } catch (error) {
        console.log('error message: ', error.message);
        return error.message;
    }
}