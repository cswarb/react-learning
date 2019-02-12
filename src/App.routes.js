import { App } from "./App.js";
import { About } from "./scenes/About.js";
import { Details } from "./scenes/Details.js";
import { Dashboard } from "./scenes/Dashboard.js";

export const AppRoutes = {
  path: '/',
  component: App,
  indexRoute: { component: Dashboard },
  childRoutes: [
    { path: 'about', component: About },
    {
      path: 'details',
      component: Details,
      childRoutes: [{
        path: ':id',
        onEnter: ((nextState, replace) => {
          console.log(nextState, replace);
          
        })
      }]
    },
  ]
}