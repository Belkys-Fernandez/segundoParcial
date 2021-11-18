import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PagNoEncontardaComponent } from './component/pag-no-encontarda/pag-no-encontarda.component';
import { RegistroComponent } from './component/registro/registro.component';
import { CustodiaGuard } from './helper/custodia.guard';


const routes: Routes = [
{path:'',redirectTo:'login', pathMatch:'full'},
{path:'login' , component:LoginComponent},
{path:'registro', component:RegistroComponent},
{path:'tablero', loadChildren:()=>import('./component/tablero/tablero.module').then(x=>x.TableroModule),canActivate:[CustodiaGuard]},
{path:'**',redirectTo:'login', pathMatch:'full'},
{path:'**', component:PagNoEncontardaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
