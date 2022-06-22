import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/recepcionista/login/login.component';
import { RegistrarHabitacionesComponent } from './componentes/recepcionista/registrar-habitaciones/registrar-habitaciones.component';
import { RegistrarClientesComponent } from './componentes/recepcionista/registrar-clientes/registrar-clientes.component';
import { RegistrarReservaComponent } from './componentes/recepcionista/registrar-reserva/registrar-reserva.component';
import { FooterComponent } from './componentes/vista-cliente/footer/footer.component';
import { NavComponent } from './componentes/vista-cliente/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavRecepcionistaComponent } from './componentes/recepcionista/nav-recepcionista/nav-recepcionista.component';
import { ReservaComponent } from './componentes/vista-cliente/reserva/reserva.component';
import { CarruselHabitacionesComponent } from './componentes/vista-cliente/carrusel-habitaciones/carrusel-habitaciones.component';
import { HabitacionesComponent } from './componentes/vista-cliente/habitaciones/habitaciones.component';//Usar Api

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarHabitacionesComponent,
    RegistrarClientesComponent,
    RegistrarReservaComponent,
    FooterComponent,
    NavComponent,
    NavRecepcionistaComponent,
    ReservaComponent,
    CarruselHabitacionesComponent,
    HabitacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
