import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from 'src/app/servicios/reservaService/reserva.service';
import { reserva } from 'src/app/ts/reserva';

@Component({
  selector: 'app-registrar-reserva',
  templateUrl: './registrar-reserva.component.html',
  styleUrls: ['./registrar-reserva.component.css']
})
export class RegistrarReservaComponent implements OnInit {
  Reservas:reserva[] = [];
  constructor(private apiReserva: ReservaService) { }

  ngOnInit(): void {
    this.apiReserva.getReserva().subscribe(data =>{
      this.Reservas = data;
    })
  }
  reserva = new FormGroup({
    fechaIngresoR: new FormControl('',Validators.required),
    fechaSalidaR: new FormControl('',Validators.required),
    catidadPersonasR: new FormControl('',Validators.required),
    codH: new FormControl('',Validators.required),
    codC: new FormControl('',Validators.required),
    codRE:new FormControl('',Validators.required),
    precioR:new FormControl('',Validators.required)
  })
  Reservar():void{
    let reserva = {
      fechaIngresoR: this.reserva.value.fechaIngresoR,
      fechaSalidaR: this.reserva.value.fechaSalidaR,
      catidadPersonasR: this.reserva.value.catidadPersonasR,
      codH:this.reserva.value.codH,
      codC: this.reserva.value.codC,
      codRE: this.reserva.value.codRE,
      precioR: this.reserva.value.precioR
    }
    this.apiReserva.postReserva(reserva).subscribe(data =>{
      this.apiReserva.getReserva().subscribe(data=>{
        this.Reservas = data;
      })
      alert("se registro nueva reserva")
    })
  }
  eliminar(i:number){
    let reserva = this.Reservas[i];
    this.apiReserva.deleteReserva(reserva.id).subscribe(data=>{
      this.apiReserva.getReserva().subscribe(data=>{
        this.Reservas = data;
      })
      alert("se elimino reserva")
    })
  }
  modificar(i:number){
    let cod = this.Reservas[i].id;
    let reserva = {
      fechaIngresoR: this.reserva.value.fechaIngresoR,
      fechaSalidaR: this.reserva.value.fechaSalidaR,
      catidadPersonasR: this.reserva.value.catidadPersonasR,
      codH:this.reserva.value.codH,
      codC: this.reserva.value.codC,
      codRE: this.reserva.value.codRE,
      precioR: this.reserva.value.precioR
    }
    this.apiReserva.putReserva(cod,reserva).subscribe(data=>{
      this.apiReserva.getReserva().subscribe(data=>{
        this.Reservas = data;
      })
      alert("se edito reserva")
    })
  }

}
