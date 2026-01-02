import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './component/about/about';
import { Contact } from './component/contact/contact';
import { Status } from './status/status';
import { Location } from './component/location/location';
import { Users } from './component/users/users';

export const routes: Routes = [
    {
        path:'',component:Home
    },
    {
        path:'about', loadComponent:()=>import('./component/about/about').then(m=>m.About),
        // children:[
        //     {
        //         path:'location',component:Location
        //     },
        //     {
        //         path:'user',loadComponent:()=>import('./component/users/users').then(m=>m.Users)
        //     }
        // ],
        loadChildren:()=>import('./aboutroute/about.routes').then(m=>m.about_routes)
    },
    {
        path:'contact',component:Contact
    },
    {
        path:'**',component:Status
    }
];
