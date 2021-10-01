import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Aquaman', 'Superman', 'Batman', 'Flash'];
  borrado: string = "";

  borrarHeroe(id: number): void {
    let eliminado = this.heroes.splice(id, 1);
    this.borrado = eliminado[0];
  }

} 
