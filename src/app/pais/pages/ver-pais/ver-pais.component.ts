import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }//sirve para subscribirse a cualquier cambio del url

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log)
    )
      .subscribe(pais => this.pais = pais);
    
    // this.activatedRoute.params//params lee los parametros que vienen en el url
    // .subscribe(({id})=>{ //se hace destructuracion del params.id donde id fue declarado en el path routing
    //   console.log(id);
      
    //   this.paisService.getPaisPorAlpha(id)
    //   .subscribe(pais => {
    //     console.log(pais); //tomo el id y lo subscribo al servicio para que mande el pais
    //   });

    // });
  }

}
