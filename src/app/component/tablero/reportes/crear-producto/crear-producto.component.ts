import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { producto } from 'src/app/interfaces/producto';

import { ProductoService } from 'src/app/service/productos.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  presentacion:any[]=['Botella', 'Caja'] 
  form:FormGroup;
  productoArray:Array<producto> | undefined;
  

  constructor( private fb: FormBuilder, private api:ProductoService, private router:Router,private _snackBar: MatSnackBar) { 
    this.form =this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
      categoria:['',[Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
      precio:['',[Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
      presentacion:['',[Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
    });
  
   

  }

  ngOnInit(): void {
  }





  agregarproducto(){
    if (this.form.invalid){
      alert(4);
      return;
    }alert(5);
    console.log(this.form.value);
    this.api.agregarProducto(this.form.value.nombre,
      this.form.value.categoria,
      this.form.value.precio,
      this.form.value.presentacion).subscribe(res=>{console.log(res);
      alert("Usuario Creado con Exito");
      this.router.navigate(['/tablero/reportes'])
    })

  }

}
