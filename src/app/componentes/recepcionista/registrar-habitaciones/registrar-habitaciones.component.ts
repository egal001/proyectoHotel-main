import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HabitacionesService } from 'src/app/servicios/habitacionesService/habitaciones.service';
import { habitaciones } from 'src/app/ts/habitacion';

@Component({
  selector: 'app-registrar-habitaciones',
  templateUrl: './registrar-habitaciones.component.html',
  styleUrls: ['./registrar-habitaciones.component.css']
})
export class RegistrarHabitacionesComponent implements OnInit {
  habitaciones:habitaciones[] = [];
  constructor(private apiHabitaciones:HabitacionesService) { }

  ngOnInit(): void {
    this.apiHabitaciones.getHabitacion().subscribe(data=>{
      this.habitaciones = data;
    })
  }
  registrarhabitacion = new FormGroup({
    codH: new FormControl('',Validators.required),
    caracteristicasH: new FormControl('',Validators.required),
    tipoH: new FormControl('',Validators.required),
    nroH: new FormControl('',Validators.required),
    precioH: new FormControl('',Validators.required),
    pisoH: new FormControl('',Validators.required),
    capacidadH: new FormControl('',Validators.required),
    estadoH: new FormControl('',Validators.required), 
    imagen: new FormControl('',Validators.required)

  })
  NuevaHabitacion():void{
    let habitacion = {
      caracteristicasH: this.registrarhabitacion.value.caracteristicasH,
      tipoH: this.registrarhabitacion.value.tipoH,
      nroH: this.registrarhabitacion.value.nroH,
      precioH: this.registrarhabitacion.value.precioH,
      pisoH:this.registrarhabitacion.value.pisoH,
      capacidadH: this.registrarhabitacion.value.capacidadH,
      estadoH: this.registrarhabitacion.value.estadoH,
      imagen: this.registrarhabitacion.value.imagen
    }
    this.apiHabitaciones.postHabitacion(habitacion).subscribe(data =>{
      this.apiHabitaciones.getHabitacion().subscribe(data=>{
        this.habitaciones = data;
      })
      alert("se registro nueva habitacion")
    })
  }
  eliminarH(i:number){
    let habitacion = this.habitaciones[i];
    this.apiHabitaciones.deleteHabitacion(habitacion.codH).subscribe(data=>{
      this.apiHabitaciones.getHabitacion().subscribe(data=>{
        this.habitaciones = data;
      })
      alert("se elimino habitacion")
    })
  }
  modificar(i:number){
    let cod = this.habitaciones[i].codH;
    let habitacion = {
      caracteristicasH: this.registrarhabitacion.value.caracteristicasH,
      tipoH: this.registrarhabitacion.value.tipoH,
      nroH: this.registrarhabitacion.value.nroH,
      precioH: this.registrarhabitacion.value.precioH,
      pisoH:this.registrarhabitacion.value.pisoH,
      capacidadH: this.registrarhabitacion.value.capacidadH,
      estadoH: this.registrarhabitacion.value.estadoH,
      imagen: this.registrarhabitacion.value.imagen
    }
    this.apiHabitaciones.putHabitacion(cod,habitacion).subscribe(data=>{
      this.apiHabitaciones.getHabitacion().subscribe(data=>{
        this.habitaciones = data;
      })
      alert("se edito habitacion")
    })
  }

}
