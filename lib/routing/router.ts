import {Route} from "./Route";

export function get(uri: string, callback) {
    return new Route({method: 'GET', uri, callback});
}

export function post(uri: string, callback) {
    return new Route({method: 'POST', uri, callback});
}
