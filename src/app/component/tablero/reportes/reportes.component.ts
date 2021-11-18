import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  productoNuevo:producto={nombre:"",categoria:"",precio:"",presentacion:"",estadoModificacion:false};
  listProducto:any;
  agregandoProducto:boolean=false;
 
  

  constructor( private _productoService:ProductoService ,private _snackBar:MatSnackBar ) { 
    this.cargarProductos();
  
  }
  ngOnInit(): void {
    this.cargarTabla();
  }
  

  cargarProductos(){
    this._productoService.traerValor()
        .subscribe
        ((res:any) =>{
          this.listProducto=res;  
          console.log(this.listProducto);
        },
        error=>{
          alert("error");
        }
      )
  }

  eliminarProducto(nombre:string){

    this._productoService.eliminarProducto(nombre).subscribe(resp=>{
     console.log(resp);
    this.cargarTabla();
    });
    this._snackBar.open('El producto fue ELIMINADO  con exito','',  {
      duration:2000,
      horizontalPosition:'center',
      verticalPosition:'top'

    })
  }
  //modificarProducto(){}
  modificarProducto(prod:producto){
    prod.estadoModificacion=true;
 
    this._snackBar.open('El producto fue modificado  con exito','',  {
      duration:2000,
      horizontalPosition:'center',
      verticalPosition:'top'

    })
  }
  guardarModificacion(prod:producto){
    var nombre=prod.nombre;
    var categoria=prod.categoria;
    var precio=prod.precio;
    var presentacion=prod.presentacion;
    this._productoService.modificarProducto(nombre,categoria,precio,presentacion).subscribe(resp=>{   
    })
    prod.estadoModificacion=false;
  
  }

  cargarTabla(){
    this._productoService.traerValor().subscribe(resp=>this.listProducto=resp);
  }
  
  
}
