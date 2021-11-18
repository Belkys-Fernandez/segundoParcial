import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableroRoutingModule } from './tablero-routing.module';
import { CompartirModuloModule } from 'src/app/component/compartModulos/compartir-modulo.module';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TableroComponent } from './tablero.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { CrearProductoComponent } from './reportes/crear-producto/crear-producto.component';
import { OrdenPipe } from './reportes/orden.pipe';


@NgModule({
  declarations: [ 
    TableroComponent,
   InicioComponent,
   MenuComponent,
    UsuarioComponent, 
    ReportesComponent,
     CrearUsuarioComponent, 
     CrearProductoComponent, 
     OrdenPipe
    
  ],
  imports: [
    CommonModule,
    TableroRoutingModule,
    CompartirModuloModule,
    FormsModule 

  ]
})
export class TableroModule { }
