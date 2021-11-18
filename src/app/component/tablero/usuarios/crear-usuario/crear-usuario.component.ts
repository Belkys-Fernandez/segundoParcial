import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/service/usuarios.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
 cuenta:any[]=['Cliente Admirable', 'Empresario']
 
 form: FormGroup;

  constructor(private fb:FormBuilder, private _usuarioService:UsuarioService,
     private router:Router, private _snackBar: MatSnackBar) {

    this.form= this.fb.group({
      usuario:['', Validators.required],
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      cuenta:['', Validators.required],
      password:['',Validators.required]
      
    })
   }

  ngOnInit(): void {
  }

  agregarUsuario(){
   
    const user:Usuario={
      usuario:this.form.value.usuario,
      nombre:this.form.value.nombre,
      apellido:this.form.value.apellido,
      cuenta:this.form.value.cuenta,
      password:this.form.value.password
    }
  
    this._usuarioService.agregarUsuario(user);
    this.router.navigate([ './tablero/usuario'])

    this._snackBar.open('Usuario fue agregado con exito','',  {
      duration:3000,
      horizontalPosition:'center',
      verticalPosition:'top'
  
    })
  }

}
