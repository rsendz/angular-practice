import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

// Se escriben las rutas mas especificas primero y las mas generales al final
