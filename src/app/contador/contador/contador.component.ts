import {Component} from '@angular/core'

@Component({
    selector: "app-contador",
    template:`
        <h1>{{titulo}}</h1>

        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(base*-1);">-{{base}}</button>

        <span> {{numero}} </span>

        <button (click)="acumular(base);">+{{base}}</button>

    `
})
export class ContadorComponent{
    public titulo:string = 'Contador app'; //cambiando el nombre del componente podemos llamarlo desde app.component.html
    public numero: number=0;
    //tarea
    public base: number = 12;
    //fin tarea

    acumular( valor:number): void{
        this.numero += valor;
    }

    

}