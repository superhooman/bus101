import urlcat from 'urlcat';

export const DOMAIN = 'https://duo.kz';

type StringifiableRecord = Record<string, string | number | boolean | null | undefined>;

interface RouteOptions {
    params?: StringifiableRecord;
    full?: boolean;
}

class Route {
    path: string;

    constructor(path: string) {
        this.path = path;
    }

    private formatUrl = (path: string, full?: boolean) => `${full ? DOMAIN : ''}${path}`;

    get = ({ params, full }: RouteOptions = {}) => urlcat(this.formatUrl(this.path, full), params ?? {})
}

export const ROUTES = {
    HOME: new Route('/'),
    AUTH: new Route('/auth'),

    IMAGE: new Route('/assets/images/:id'),
};
