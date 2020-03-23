import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



const appRoute: Routes = [

{path:'login',component: LoginComponent},
{path:'register',component: RegisterComponent},

//ruta que redirecciona al 404 cuando no encuentra componente
{path:'**', component: NopagefoundComponent},
];

//RouterModule eso quiere decir que va en el import de app.module.ts
export const APP_ROUTES = RouterModule.forRoot( appRoute, { useHash: true} );

