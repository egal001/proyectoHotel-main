import { Component, Input, OnInit } from '@angular/core';
import { habitaciones } from 'src/app/ts/habitacion';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  Habitacion: habitaciones = {
    codH:'',
    caracteristicasH: '',
    tipoH: '',
    nroH: 0,
    precioH: 0,
    pisoH:0,
    capacidadH: 0,
    estadoH: "",
    imagen: ""
  }
  @Input() HabitacionPromo: any = {
    codH: '',
    codHabitacion: this.Habitacion
  }
  constructor() { }

  ngOnInit(): void {
  }

}
