import { Routes } from "@angular/router";
import { AppComponent } from './app.component';

export const APP_ROUTING: Routes = [
    {path: '', component: AppComponent, pathMatch: 'full'},
    // {path: '**', component: NotFoundComponent}
]