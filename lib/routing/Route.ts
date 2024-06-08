export class Route {
    constructor({method, uri, callback}) {
        this.method = method;
        this.uri = uri;
        this.callback = callback;
    }
    matches() {
        return true;
    }
    execute(req) {
        return this.callback();
    }
}
