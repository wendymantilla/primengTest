import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
    { path: '', component: MenuComponent },
    //{ path: 'rutaUrl', component: NombreComponenteImportado },

    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(routes, {useHash:true});
