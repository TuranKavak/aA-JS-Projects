class Router {
    constructor(node, routes) { //, routes
        this.node = node;
        this.routes = routes;
    }

    start() {
        this.render();
        window.addEventListener('hashchange', () => {
            this.render();
        });
    }

    render() {
        this.node.innerHTML = "";
        let component = this.activeRoute();
        if (component) {
            this.node.appendChild(component.render());
        }
    }

    activeRoute() {
        let hash = window.location.hash.substr(1); // will remove #
        let component = this.routes[hash];
        return component;
    }
}

module.exports = Router;