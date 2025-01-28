import { Routes } from "@angular/router";

export const countryRoutes: Routes = [
    { 
        path: '',         
        loadComponent: () => import('./layouts/country-layout/country-layout.component'),
        children: [
            { path: 'by-capital', loadComponent: () => import('./pages/by-capital/by-capital.component') },
            { path: 'by-country', loadComponent: () => import('./pages/by-country/by-country.component') },
            { path: 'by-region', loadComponent: () => import('./pages/by-region/by-region.component') },
            { path: 'by/:name', loadComponent: () => import('./pages/country-details/country-details.component') },
            { path: '**', redirectTo: 'by-capital' }
        ]
    },
];

export default countryRoutes;