import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/clienteService/cliente.service';
import { clienteReserva } from 'src/app/ts/clienteReserva';

@Component({
  selector: 'app-registrar-clientes',
  templateUrl: './registrar-clientes.component.html',
  styleUrls: ['./registrar-clientes.component.css']
})
export class RegistrarClientesComponent implements OnInit {
  clientes:clienteReserva[] = [];
  constructor(private apiClientes: ClienteService) { }

  ngOnInit(): void {
    this.apiClientes.getCliente().subscribe(data =>{
      this.clientes = data;
    })
  }
  registrarCliente = new FormGroup({
    nombreCliente:new FormControl('',Validators.required),
    apellidosCliente: new FormControl('',Validators.required),
    correoCliente:new FormControl('',Validators.required),
    numeroCelularCliente: new FormControl('',Validators.required),
    fechaIngreso: new FormControl('',Validators.required),
    fechaSalida: new FormControl('',Validators.required),
    tipoHabitacion: new FormControl('',Validators.required),
    tipoDePago: new FormControl('',Validators.required)
 

  })
  NuevoCliente():void{
    let cliente = {
      nombreCliente: this.registrarCliente.value.nombreCliente,
      apellidosCliente: this.registrarCliente.value.apellidosCliente,
      correoCliente:this.registrarCliente.value.correoCliente,
      numeroCelularCliente: this.registrarCliente.value.numeroCelularCliente,
      fechaIngreso: this.registrarCliente.value.fechaIngreso,
      fechaSalida: this.registrarCliente.value.fechaSalida,
      tipoHabitacion: this.registrarCliente.value.tipoHabitacion,
      tipoDePago: this.registrarCliente.value.tipoDePago
    }
    this.apiClientes.postCliente(cliente).subscribe(data =>{
      this.apiClientes.getCliente().subscribe(data=>{
        this.clientes = data;
      })
      alert("se registro nuevo cliente")
    })
  }
  eliminarH(i:number){
    let habitacion = this.clientes[i];
    this.apiClientes.deleteCliente(habitacion.codC).subscribe(data=>{
      this.apiClientes.getCliente().subscribe(data=>{
        this.clientes = data;
      })
      alert("se elimino cliente")
    })
  }
  modificar(i:number){
    let cod = this.clientes[i].codC;
    let cliente = {
      nombreCliente: this.registrarCliente.value.nombreCliente,
      apellidosCliente: this.registrarCliente.value.apellidosCliente,
      correoCliente:this.registrarCliente.value.correoCliente,
      numeroCelularCliente: this.registrarCliente.value.numeroCelularCliente,
      fechaIngreso: this.registrarCliente.value.fechaIngreso,
      fechaSalida: this.registrarCliente.value.fechaSalida,
      tipoHabitacion: this.registrarCliente.value.tipoHabitacion,
      tipoDePago: this.registrarCliente.value.tipoDePago
    }
    this.apiClientes.putCliente(cod,cliente).subscribe(data=>{
      this.apiClientes.getCliente().subscribe(data=>{
        this.clientes = data;
      })
      alert("se edito cliente")
    })
  }
}
