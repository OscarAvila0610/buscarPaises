import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCss(region:string): string{
    return (region === this.regionActiva) ? 'btn btn-primary mr-1': 'btn btn-outline-primary mr-1';
  }

  activarRegion(region:string){

    if(region ===this.regionActiva){return;}
    
    this.regionActiva = region;
    this.paises = []

    this.paisService.buscarRegion(region)
      .subscribe(paises => this.paises = paises);
  }

  

  
}
