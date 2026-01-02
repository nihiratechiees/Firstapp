import { Routes } from "@angular/router";
import { Location } from "../component/location/location";

export const about_routes: Routes = [
    {
        path: 'location', component: Location
    },
    {
        path: 'user', loadComponent: () => import('../component/users/users').then(m => m.Users)
    },
    {
        path: 'location/:direction', component: Location
    },
    {
        path: 'location/:direction/:country', component: Location
    }
]