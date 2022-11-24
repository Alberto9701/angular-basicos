import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
//se borra heroecomponent y listado component ya que ya los hemos agregado a nuestro modulo de heroes
import { HeroesModule } from './heroes/heroes.module';

//tarea : crear un módulo llamada ContadorModule
//y hacer sus declaraciones y exportaciones, para ello hay que comentar el contador component de la linea 5
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent, esta linea se comenta por la tarea
    //HeroeComponent,
    //ListadoComponent

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule //esta linea se agrega por la tarea
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
