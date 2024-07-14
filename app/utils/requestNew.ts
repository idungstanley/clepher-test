import axios, { AxiosError, AxiosResponse } from 'axios';

async function requestNew<T>(options: Record<string, unknown>): Promise<T> {
    const client = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`
    });

    // request handler
    const onSuccess = (response: AxiosResponse<T>) => {
        const { data } = response;
        return data;
    };

    // error handler
    function onError(error: AxiosError) {
        return Promise.reject(error.response);
    }

    const response = client(options).then(onSuccess).catch(onError);
    // adding success and error handlers to client
    return response;
}

export default requestNew;
