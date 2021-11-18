import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { producto } from '../interfaces/producto';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

      


    constructor(private http:HttpClient) {}


  getProducto(){
      
  }

  traerValor(){
    return this.http.get('https://backend-angular-edi.herokuapp.com/Productos/listaProducto');
  }

  agregarProducto( nombre: string, categoria:string, precio:string, presentacion :string) {
    const body = { nombre:nombre, categoria:categoria, precio:precio, presentacion:presentacion};
    return this.http.post('https://backend-angular-edi.herokuapp.com/Productos/registrarProducto', body);
  }
 


  eliminarProducto(nombre:string){
    const body={nombre:nombre};
    return this.http.delete('https://backend-angular-edi.herokuapp.com/Productos/borrarProducto',{body});
  }

  modificarProducto(nombre:string,categoria:string,precio:string,presentacion:string){
    var body={nombre:nombre,
              categoria:categoria,
              precio:precio,
              presentacion:presentacion
        }
    return this.http.put('https://backend-angular-edi.herokuapp.com/Productos/actualizarProducto',body);
  }

}

 

 






