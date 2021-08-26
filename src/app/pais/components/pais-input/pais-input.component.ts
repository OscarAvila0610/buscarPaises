import { Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  

  @Output() onEnter: EventEmitter<string> = new EventEmitter();//Se usa el event emitter para los output y se le declara el tipo que se va a emitir por ejemplo en este caso string
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder:string = '';

  debouncer: Subject<string> = new Subject();//es un observable especial de rxjs
  termino: string = '';
  
  ngOnInit(){
      this.debouncer
      .pipe(debounceTime(300))//esto nos ayuda a que no capture cada tecla que presionamos si no cuando dejamos de presionar las teclas
      .subscribe(valor =>{//aca es donde esta suscrito
        this.onDebounce.emit(valor);
      });
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }
  
  teclaPresionada(){
    this.debouncer.next(this.termino);//con este metodo transmitimos el valor de la tecla al oninit donde esta suscrito
  }

}
