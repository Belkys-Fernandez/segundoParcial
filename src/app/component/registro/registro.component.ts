import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/service/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form!:FormGroup;


  
  constructor(private api:RegistroService, private router:Router, private fb:FormBuilder) { 
  

      this.form= this.fb.group({
        usuario: ["",[Validators.required, Validators.minLength(7), Validators.maxLength(9)]],
        nombre: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
        apellido: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
        cuenta: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
        password: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(24)]],
     
      })
  }
  
  ngOnInit(): void {
  }
  entrar(){
    localStorage.setItem('token', 'valido');
    this.router.navigate(['login']);
  }

  
  registrar(){
      alert('Creación de Usuario');
  }

  atras(){
      this.router.navigate(['/login']);
  }
 
  CrearUsuario(){
    if (this.form.invalid) {
    
      return;
    }  
    this.entrar();

    console.log(this.form.value);
    this.api.registrarUsuario(this.form.value.usuario, 
      this.form.value.nombre, 
      this.form.value.apellido,
      this.form.value.cuenta, 
      this.form.value.password).subscribe(resp => {console.log(resp);
    
       alert("Usuario Creado con exito")
   })
 
 }
 

}

