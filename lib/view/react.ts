import {createElement} from "react";
import {renderToString} from "react-dom/server";

export function view(component: () => JSX.Element) {
    const body = renderToString(createElement(component));
}
