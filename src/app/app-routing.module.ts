import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/recepcionista/login/login.component';
import { NavRecepcionistaComponent } from './componentes/recepcionista/nav-recepcionista/nav-recepcionista.component';
import { RegistrarClientesComponent } from './componentes/recepcionista/registrar-clientes/registrar-clientes.component';
import { RegistrarHabitacionesComponent } from './componentes/recepcionista/registrar-habitaciones/registrar-habitaciones.component';
import { RegistrarReservaComponent } from './componentes/recepcionista/registrar-reserva/registrar-reserva.component';
import { HabitacionesComponent } from './componentes/vista-cliente/habitaciones/habitaciones.component';
import { ReservaComponent } from './componentes/vista-cliente/reserva/reserva.component';

const routes: Routes = [
  {
    path: '',redirectTo: 'home',pathMatch: 'full'
  },
  {
    path: 'login',component: LoginComponent
  },
  {
    path: 'registrar-clientes',component: RegistrarClientesComponent
  },
  {
    path: 'navEmpleado',
    component: NavRecepcionistaComponent
  },
  {
    path: 'registrarHabitaciones',
    component: RegistrarHabitacionesComponent
  },
  {
    path: 'clientesReserva',
    component: RegistrarClientesComponent
  },
  {
    path: 'vistaReserva',
    component: RegistrarReservaComponent
  },
  {
    path: 'home',
    component: ReservaComponent
  },
  {
    path: 'habitaciones',
    component: HabitacionesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
