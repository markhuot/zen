import * as routes from "@app/routes";

class App {
    bind(name, concrete) {
        return this;
    }
    middleware() {
        return this;
    }
    view() {
        // save the view transformer
    }
    serve() {
        const app = this;
        const server = Bun.serve({
            fetch(req) {
                return app.handle(req);
            },
        });

        console.log(`Started a server on port ${server.port}`);
    }
    handle(req) {
        for (const routeKey of Object.keys(routes)) {
            if (routes[routeKey].matches(req)) {
                // Run the request through all middleware
                // Transform the request in to a response via the view handler
                // Return the response
                return new Response(routes[routeKey].execute())
            }
        }
    }
}

export function zen() {
    return new App();
}
