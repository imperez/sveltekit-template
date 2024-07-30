import { PUBLIC_API_URL } from "$env/static/public";
import LoadingState from "../enums/LoadingState";
import { messages, state } from "../stores/app";
import Cookies from "js-cookie";

const base = PUBLIC_API_URL;

interface ApiDefaults {
    fetch?: any
}

let defaults: ApiDefaults = {};

export const setDefaults = (value: ApiDefaults): void => {
    defaults = value;
}

export const get = async (endpoint: string): Promise<any> => {
    return callAPI('get', endpoint);
}

export const post = async (endpoint: string, data: Object = {}): Promise<any> => {
    return callAPI('post', endpoint, data);
}

export const put = async (endpoint: string, data: Object): Promise<any> => {
    return callAPI('put', endpoint, data);
}

export const del = async (endpoint: string): Promise<any> => {
    return callAPI('delete', endpoint);
}

const getClientDefaults = () => {
    return {
        headers: {
            Authorization: `Bearer ${Cookies.get('user_token')}`
        },
        body: {}
    }
}

const callAPI = async (method: string, endpoint: string, data: Object | null = null): Promise<any | null> => {
    const clientDefaults = getClientDefaults();

    state.set(LoadingState.Loading);
    messages.set([]);

    const url = `${base}${endpoint}`;
    const options: RequestInit = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Api-Major-Version': '1',
            'Api-Minor-Version': '1'
        }
    };

    if (options.headers && !options.headers.hasOwnProperty('Authorization')) {
        options.headers['Authorization'] = clientDefaults.headers['Authorization'];
    }

    if (data) {
        options.body = JSON.stringify({...data, ...clientDefaults.body});
    }

    let response;
    if (defaults?.fetch) {
        response = await defaults.fetch(url, options);
    }
    else {
        response = await fetch(url, options);
    }

    let json = await response.json();
    if (json.errors) {
        if (json.errors) {
            const errors = Object.values(json.errors).map(error => {
                const message: Message = {
                    type: 'error',
                    description: error.pop()
                }
                return message;
            });
            messages.set(errors);
        }
        else {
            const message: Message = {
                type: 'error',
                description: json.message
            }
            messages.set([message]);
        }

        return null;
    }

    return json;
}
