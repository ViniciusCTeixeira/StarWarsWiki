import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export async function sendPost(titulo: string, body: string, userID: number) {
    return instance.post(
        `posts`,
        {
            title: titulo,
            body: body,
            userId: userID
        },{
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
    );
}