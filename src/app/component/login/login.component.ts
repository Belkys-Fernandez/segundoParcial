import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/service/registro.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  cargaSpinner=true ;
  usu:any;
  cont:any;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar,private router:Router ,private api:RegistroService) {
    if (sessionStorage.getItem('token')==' valido')
    this.router.navigate(['/tablero']);

    this.form= this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })

  }

  ngOnInit(): void {
  }

  entrar(){
    localStorage.setItem('token', 'valido');
    this.router.navigate(['tablero']);
  }
 registro(){
   this.router.navigate(['registro'])
 }
 ingresarLogin(){
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value.usuario, this.form.value.password);
    this.api.buscarUsuario(
      this.form.value.usuario,
      this.form.value.password).subscribe(resp => {
        console.log(resp);
        this.entrar();
        this.load(this.form.value.usuario, this.form.value.password);
      },  
      error=>{

        alert('error')

      });

  }

  load(usu:any, contraseña:any){
    this.usu = localStorage.getItem(usu);
    this.cont = localStorage.getItem(contraseña);
}
 
   
 
  error(){
    this._snackBar.open('Usuario o contraseña  ingresado son invalido','',  {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'top'

    })
  }
  fakecarga(){
    this.cargaSpinner=true;
    setTimeout(()=> {
      //redireccionamos
      this.router.navigate(['tablero']);
      this.cargaSpinner=false;
    }, 10);
  }
  
}