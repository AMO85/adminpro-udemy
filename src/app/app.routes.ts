import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



const appRoute: Routes = [
// {
//     path:'',
//     component: PagesComponent,
//     children:[
//         {path:'dashboard',component: DashboardComponent},
//         {path:'progress',component: ProgressComponent},
//         {path:'graficas1',component: Graficas1Component},
//         //ruta que redirecciona al dashboard cuando no encuentra componente
//         {path:'', redirectTo: '/dashboard', pathMatch: 'full'},

//     ]
// },
{path:'login',component: LoginComponent},
{path:'register',component: RegisterComponent},
//ruta que redirecciona al 404 cuando no encuentra componente
{path:'**', component: NopagefoundComponent},
];

//RouterModule eso quiere decir que va en el import de app.module.ts
export const APP_ROUTES = RouterModule.forRoot( appRoute, { useHash: true} );

