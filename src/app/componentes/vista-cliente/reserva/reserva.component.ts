import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/clienteService/cliente.service';
import { HabitacionesService } from 'src/app/servicios/habitacionesService/habitaciones.service';
import { habitaciones } from 'src/app/ts/habitacion';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  private contador:number = 2;
  constructor(private apiCliente:ClienteService){
  }
  ngOnInit(): void {
  }
  reserva = new FormGroup({
    codC: new FormControl('',Validators.required),
    nombreCliente: new FormControl('',Validators.required),
    apellidosCliente: new FormControl('',Validators.required),
    correoCliente: new FormControl('',Validators.required),
    numeroCelularCliente: new FormControl('',Validators.required),
    fechaIngreso: new FormControl('',Validators.required),
    fechaSalida: new FormControl('',Validators.required),
    tipoHabitacion: new FormControl('',Validators.required),
    tipoDePago:  new FormControl('',Validators.required)
  })

  solicitarReserva():void{
    let Solicitud  = {
      nombreCliente: this.reserva.value.nombreCliente,
      apellidosCliente: this.reserva.value.apellidosCliente,
      correoCliente: this.reserva.value.correoCliente,
      numeroCelularCliente: this.reserva.value.numeroCelularCliente,
      fechaIngreso: this.reserva.value.fechaIngreso,
      fechaSalida: this.reserva.value.fechaSalida,
      tipoHabitacion: this.reserva.value.tipoHabitacion,
      tipoDePago: this.reserva.value.tipoDePago,
    }
    this.apiCliente.postCliente(Solicitud).subscribe(data =>{
      alert("se envio solicitud de reserva")
    })
    
  }

}
