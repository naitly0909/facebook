import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CoreRoutingModule} from './core-routing.module';
import {AppComponent} from './components/app/app.component';
import {MenuComponent} from './components/menu/menu.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {PostsModule} from '../posts/posts.module';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomePageComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        CoreRoutingModule,
        PostsModule,
        SharedModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class CoreModule {
}
