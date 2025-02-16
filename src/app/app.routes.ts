import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    //create a route for the home screen( when routesare emmpty(so the user form))
    path: '', 
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home.component').then((m) => m.HomeComponent)
        },
    },
    // {//create path for about page
    {
    path: 'about',
    loadComponent: () => {
        return import('./components/about/about.component').then((m) => m.AboutComponent)
        },
    },

    //create path for contact
    {
    path: 'contact',
    loadComponent: () => {
        return import('./components/contact/contact.component').then((m) => m.ContactComponent)
        },
    },

];
