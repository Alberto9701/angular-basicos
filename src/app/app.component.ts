import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //este es el nombre del componente
  templateUrl: './app.component.html',//estos 2 son lo mínimo que este decorador requiere, con este especificamos donde vamos a mostrarlo
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo:string = 'Contador app'; //cambiando el nombre del componente podemos llamarlo desde app.component.html
  public numero: number=0;


  //tarea
  public base: number = 2;
  //fin tarea
  acumular( valor:number): void{
    this.numero += valor;
  }

}
