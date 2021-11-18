import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuario: Usuario[] = [

    {usuario: "Jfernandez" , nombre: 'Flor', apellido: "Gomez", cuenta: 'Cliente Admirable', password:'123'},
    {usuario: "Jf" , nombre: 'agus', apellido: "F", cuenta: 'Cliente Admirable', password:'123'},
    {usuario: "Js" , nombre: 'Fabio', apellido: "Fe", cuenta: 'Cliente Admirable', password:'123'},
    {usuario: "Jav" , nombre: 'Feliz', apellido: "Fernan", cuenta: 'Cliente Admirable', password:'123'},
    {usuario: "Tati" , nombre: 'Fabricio', apellido: "Fernanz", cuenta: 'Cliente Admirable', password:'123'}
  ];


  constructor() { }
getUsuario(){
  return this.listUsuario.slice();
}
 eliminarUsuario(index: number ){
  this.listUsuario.splice(index, 1 );
 } 
 agregarUsuario( usuario: Usuario){
   this.listUsuario.unshift( usuario);
 }

 /*modificarUsuario(usuario:string, password:string){
   
  
}


})*/
}
