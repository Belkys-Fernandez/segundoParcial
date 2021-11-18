import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompartirModuloModule } from './component/compartModulos/compartir-modulo.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './component/registro/registro.component';
import { PagNoEncontardaComponent } from './component/pag-no-encontarda/pag-no-encontarda.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PagNoEncontardaComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompartirModuloModule,
    HttpClientModule,
    FormsModule 

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
