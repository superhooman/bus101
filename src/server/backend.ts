import { type Response } from '@src/schemas/response';
import urlcat from 'urlcat';

type Stringifiable = string | number | boolean | null | undefined;

interface RequestOptions<P extends object = object> {
    method: string;
    headers?: Record<string, string>;
    payload?: P;
    query?: Record<string, Stringifiable>;
}

const request = async <T, P extends object = object>(path: string, options: RequestOptions<P>): Promise<T> => {
    const { method, headers = {}, payload, query } = options;
    const url = urlcat(path, query ?? {});

    const body = payload ? JSON.stringify(payload) : undefined;

    if (body) {
        headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url, { method, headers, body });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    try {
        const data = (await response.json()) as unknown as T;
        return data;
    } catch (error) {
        throw new Error(`Failed to parse response as JSON`);
    }
}


export class Backend {
    host: string;

    constructor(host: string) {
        this.host = host;
    }

    private async request<T, P extends object = object>(path: string, options: RequestOptions<P>): Promise<T> {
        return request<T>(this.host + path, options);
    }

    async send(text: string): Promise<Response[] | { error: string }> {
        return this.request('/recommendations/', {
            method: 'POST',
            query: {
                user_prompt: text,
                N: 3,
            },
        });
    }
}
