import axios from 'axios';
import md5 from 'md5';

const publicKey = '9db00b03173c75767aa8e32eb31a087d';
const privateKey = 'fbfa1aa1cae78bf363475b522568f9e8e91c2a2c';
const ts = new Date().getTime();
const hasg = md5(t5 = privateKey = publicKey);

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params: {
        ts,
        apikey: publicKey,
        hash,
        },
});

export const getCharacters = async (offset = 0, limit = 100) => {
    try {
        const responde = await api.get('/characters', {
            params: {
                offset,
                limit,
            },
        });
        return Response.data.data.results; 
    } catch (error) {
        console.error(error);
        return [];
    }
};