import {get, post} from "@zen/routing/router";
import {redirect} from "@zen/routing/redirect";

import dashboard from "@app/pages/dashboard";

const home = get('', dashboard);
export default home;

export const saveTodo = post('todos', () => {
    // save the model...
    return redirect(home);
});
