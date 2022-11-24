import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] =["Spiderman","IronMan","Hulk","Thor","Capitan america"];
  heroeBorrado: string = "";
  //estaBorrado: boolean=false;

  borrarHeroe(){
    //console.log("borrando...")
    //const heroeBorrado =this.heroes.splice(indice,1);
    const heroeBorrado= this.heroes.shift();
    //this.estaBorrado=true;
    //console.log(heroeBorrado);
    this.heroeBorrado= heroeBorrado || "";
  }
}
