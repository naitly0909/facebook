import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from './pages/home-page/home-page.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent

    },
    {
        path: '**', //lapanie nazwy dowolnego stringa
        component: NotFoundComponent

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
