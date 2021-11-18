import { Injectable } from '@angular/core';
import { persona } from '../interfaces/Persona';

@Injectable({
  providedIn: 'root'
})
export class PresonaService {
  listUsuario: persona[] = [

    {usuario: "Jfernandez" , nombre: 'Flor', apellido: "Gomez", cuenta: 'Empresario', password:'123'},
    {usuario: "Sanches" , nombre: 'Agustina', apellido: "Mendoza", cuenta: 'Cliente Admirable', password:'456'},
    {usuario: "Perez" , nombre: 'Fabio', apellido: "Mendez", cuenta: 'Empresario', password:'789'},
    {usuario: "Javi" , nombre: 'Franco', apellido: "Aquino", cuenta: 'Cliente Admirable', password:'125'},
    {usuario: "Lili" , nombre: 'ana', apellido: "Dominguez", cuenta: 'Cliente Admirable', password:'123'},
    {usuario: "Yeny" , nombre: 'Abigail', apellido: "Nieves", cuenta: 'Cliente Admirable', password:'123'},
    {usuario: "Tati" , nombre: 'Fabricio', apellido: "Feliz", cuenta: 'Empresario', password:'123'}
  ];

 


  constructor() { }
  getUsuario(){
    return this.listUsuario.slice();
  }
   eliminarUsuario(index: number ){
    this.listUsuario.splice(index, 1 );
   } 
   agregarUsuario( persona: persona){
     this.listUsuario.unshift( persona);
   }
  
   /*modificarUsuario(usuario:string, password:string){
     
    
  }
  
  
  })*/

}
function Persona(Persona: any) {
  throw new Error('Function not implemented.');
}

