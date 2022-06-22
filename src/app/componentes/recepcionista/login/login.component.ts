import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecepcionistaService } from 'src/app/servicios/recepcionistaService/recepcionista.service';
import { recepcionista } from 'src/app/ts/recepcionista';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recepcionistas:recepcionista[] = [];
  logEmpleado= new FormGroup({
    usuario: new FormControl('',Validators.required),
    contrasenia: new FormControl('',Validators.required)
  })
  constructor(private apiRecepcionista: RecepcionistaService,private router:Router) { }

  ngOnInit(): void {
  }
  login():void{
    this.apiRecepcionista.getRecepcionistaById(this.logEmpleado.value.usuario).subscribe(data=>{
      if(data.contrasenia == this.logEmpleado.value.contrasenia){
        this.router.navigate(['navEmpleado']);
      }
      else{
        alert("datos incorrectos")
      }
    })
  }
}
